import { useContext, useEffect, useRef, useState } from "react";
import {
  IoTrash,
  IoPencil,
  IoHeartOutline,
  IoHeart,
  IoRepeatOutline,
} from "react-icons/io5";
import { ReactTagify } from "react-tagify";
import { useNavigate } from "react-router-dom";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import { AuthContext } from "../../contexts/auth.context";

import { api } from "../../services/api";

import { Modal } from "../Modal";

import {
  Container,
  PhotoLikesContainer,
  ProfilePicture,
  PostContainer,
  PostAuthor,
  PostDescription,
  PostLink,
  LinkTitle,
  LinkDescription,
  LinkUrl,
  LinkImage,
  IconsContainer,
  LinkInput,
  LikeContainer,
  RepostContainer,
  InnerContainer
} from "./styles";

export function Post({
  author,
  profilePicture,
  description,
  link,
  linkTitle,
  linkDescription,
  linkImage,
  postId,
  authorId,
  getAllPosts,
  routeOrigin,
  liked,
  likeCount,
  whoLiked,
}) {
  const [isEditing, setIsEditing] = useState();
  const [postDescription, setPostDescription] = useState(description);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(liked);
  const [likesName, setLikesName] = useState();

  const testRepost = true;

  const descRef = useRef(null);

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  async function handleDeletePost() {
    setIsDeleting(true);
    try {
      await api.delete(`/posts/${postId}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      getAllPosts(false);
      handleModal(false);
      setIsDeleting(false);
    } catch (error) {
      setIsDeleting(false);
      handleModal(false);
      alert("Unable to delete post, please try again later.");
      console.log(error);
    }
  }

  async function handleEditPost() {
    setIsLoading(true);
    try {
      await api.put(
        `/posts`,
        {
          postId: postId,
          description: postDescription,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setIsEditing(false);
      setIsLoading(false);
    } catch (error) {
      alert(
        "An error occurred while trying to update the post, please try again."
      );
      setIsLoading(false);
      console.log(error);
    }
  }

  function handleEditClick() {
    const newIsEditing = !isEditing;

    if (newIsEditing) {
      setIsEditing(true);
    } else {
      setPostDescription(description);
      setIsEditing(false);
    }
  }

  function handleKeyPressed(e) {
    switch (e.key) {
      case "Enter":
        handleEditPost();
        break;
      case "Escape":
        setPostDescription(description);
        setIsEditing(false);
        break;
      default:
        break;
    }
  }

  function handleModal(isOpen) {
    setIsModalOpen(isOpen);
  }

  const tagStyle = {
    color: "white",
    fontWeight: 700,
    cursor: "pointer",
  };

  async function findHashtag(tag) {
    const hashtag = tag;
    const semHashtag = hashtag.substring(1);

    try {
      navigate(`/hashtag/${semHashtag}`);
    } catch (error) {
      alert(
        `An error occurred while trying to go to hashtag ${hashtag}, please try again.`
      );
      console.log(error);
    }
  }
  function handleNavigateToUser() {
    navigate(`/user/${authorId}`);
  }

  async function toggleLike() {
    if (isLiked === false) {
      try {
        await api.post(
          "/likes",
          {
            postId: postId,
            liked: true,
          },
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );

        setIsLiked(true);
        getAllPosts(false);
      } catch (error) {
        console.log(error);
      }
    }

    if (isLiked === true) {
      try {
        await api.post(
          "/likes",
          {
            postId: postId,
            liked: false,
          },
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );

        setIsLiked(false);
        getAllPosts(false);
      } catch (error) {
        console.log(error);
      }
    }
  }

  function formatNames(names, user) {
    let result;
    if (names === null && isLiked === false) {
      result = "";

      return result;
    } else if (names === null && isLiked === true) {
      result = "Você";

      return result;
    }
    const nameList = names.map((obj) => obj.name);
    const otherCount = nameList.length - 2;

    if (nameList.includes(user)) {
      result =
        nameList.length === 2
          ? `Você, and ${nameList[0] === user ? nameList[1] : nameList[0]}`
          : nameList.length === 1
          ? `Você`
          : `Você, ${
              nameList[0] === user ? nameList[1] : nameList[0]
            } and other ${otherCount} people`;
    } else {
      result =
        nameList.length === 2
          ? `${nameList[0]} and ${nameList[1]}`
          : nameList.length === 1
          ? `${nameList[0]}`
          : `${nameList[0]}, ${nameList[1]} and other ${otherCount} people`;
    }

    return result;
  }

  useEffect(() => {
    const names = formatNames(whoLiked, user.username);
    setLikesName(names);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getAllPosts]);

  return (
    <>
    {!isLiked ? (
        ""
      ) : (
        <RepostContainer>
          <IoRepeatOutline size={18} />
          <p>Re-posted by {true ? "you" : "name"}</p>
        </RepostContainer>
      )}
    <Container data-test="post">
      
      {!isDeleting && (
        <InnerContainer>
          <PhotoLikesContainer>
            <ProfilePicture src={profilePicture} />

            <LikeContainer>
              {liked ? (
                <IoHeart
                  color="red"
                  onClick={toggleLike}
                  data-test="like-btn"
                />
              ) : (
                <IoHeartOutline onClick={toggleLike} data-test="like-btn" />
              )}

              <p
                data-tooltip-id="my-tooltip"
                data-tooltip-variant="light"
                data-tooltip-content={likesName}
                data-test="counter"
              >
                {likeCount} {+likeCount === 1 ? "like" : "likes"}
              </p>
              <ReactTooltip
                id="my-tooltip"
                effect="solid"
                place="bottom"
                data-test="tooltip"
              />
            </LikeContainer>

            <LikeContainer>
              <IoRepeatOutline size={18} data-test="repost-btn"/>
              <p data-test="repost-counter">
                {likeCount} {+likeCount === 1 ? "re-post" : "re-posts"}
              </p>
            </LikeContainer>
          </PhotoLikesContainer>

          <PostContainer>
            <PostAuthor data-test="username" onClick={handleNavigateToUser}>
              {author}
            </PostAuthor>

            {isEditing ? (
              <LinkInput
                value={postDescription}
                ref={descRef}
                onChange={(e) => setPostDescription(e.target.value)}
                onKeyDown={handleKeyPressed}
                disabled={isLoading}
                autoFocus
                data-test="edit-input"
              />
            ) : (
              <ReactTagify
                tagStyle={tagStyle}
                tagClicked={(tag) => findHashtag(tag)}
              >
                <PostDescription data-test="description">
                  {postDescription}
                </PostDescription>
              </ReactTagify>
            )}

            <PostLink href={link} target="_blank" data-test="link">
              <div>
                <LinkTitle>{linkTitle}</LinkTitle>
                <LinkDescription>{linkDescription}</LinkDescription>

                <LinkUrl>{link}</LinkUrl>
              </div>

              <LinkImage src={linkImage} />
            </PostLink>
          </PostContainer>

          {user.username === author && routeOrigin === "/timeline" && !testRepost && (
            <IconsContainer>
              <IoPencil
                onClick={handleEditClick}
                cursor="pointer"
                data-test="edit-btn"
              />
              <IoTrash
                onClick={() => handleModal(true)}
                cursor="pointer"
                data-test="delete-btn"
              />
            </IconsContainer>
          )}
        </InnerContainer>
      )}
      <Modal
        isModalOpen={isModalOpen}
        handleCloseModal={() => handleModal(false)}
        handleConfirm={handleDeletePost}
        isDeleting={isDeleting}
        title="Are you sure you want to delete this post?"
        cancelText="No, go back"
        confirmText="Yes, delete it"
      />
    </Container>
    </>
  );
}
