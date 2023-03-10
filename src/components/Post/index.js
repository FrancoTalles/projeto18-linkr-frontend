import { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoTrash, IoPencil } from "react-icons/io5";
import { ReactTagify } from "react-tagify";

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
  getAllPosts,
  routeOrigin,
}) {
  const [isEditing, setIsEditing] = useState();
  const [postDescription, setPostDescription] = useState(description);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      getAllPosts();
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
    console.log(postId);
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

  return (
    <>
      {!isDeleting && (
        <Container data-test="post">
          <PhotoLikesContainer>
            <ProfilePicture src={profilePicture} />
          </PhotoLikesContainer>

          <PostContainer>
            <PostAuthor data-test="username">{author}</PostAuthor>

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

          {user.username === author && routeOrigin === "/timeline" && (
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
        </Container>
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
    </>
  );
}
