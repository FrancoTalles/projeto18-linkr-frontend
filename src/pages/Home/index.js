import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import React from 'react';

import useInterval from 'use-interval';
import { Post } from "../../components/Post";

import { api } from "../../services/api";

import { AuthContext } from "../../contexts/auth.context";

import {
  Container,
  Title,
  FormContainer,
  ProfilePicture,
  NewPostContainer,
  ContainerTitle,
  LinkInput,
  DescriptionInput,
  Button,
  ButtonText,
  PostContainer,
  NoPostsText,
  ContainerHashtagBox,
  ContainerPosts,
  NewPostNotification,
} from "./styles";
import Header from "../../components/Header/Header";
import { ThreeDots } from "react-loader-spinner";
import HashtagBox from "../../components/Hashtag/hashtagBox";

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingButton, setIsLoadingButton] = useState(false);
  const [posts, setPosts] = useState();
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [newPosts, setNewPosts] = useState([]);
  const [showNotification, setShowNotification] = useState(false);


  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const baseURL = process.env.REACT_APP_API_URL;

  async function getAllPosts(isFirstLoad) {
    if (isFirstLoad) {
      setIsLoading(true);
    }

    try {
      const postsData = await api.get("/posts", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      setPosts(postsData.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      alert(
        "An error occurred while trying to fetch the posts, please refresh the page"
      );
    }
  }

  async function getNewPosts() {

    try {
      const promise = await axios.get(`${baseURL}/posts`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      setNewPosts(promise.data.count);
      if (newPosts.length > 0) {
        setShowNotification(true);
      } else {
        setShowNotification(false);
      }

    } catch (error) {
      console.log(error);
      alert(
        "An error occurred while trying to fetch the posts, please refresh the page"
      );
    }
  };

  useInterval(() => {
    getNewPosts();
  }, 15000);


  async function handleCreatePost(e) {
    e.preventDefault();
    setIsLoadingButton(true);
    if (link === undefined || link === "") {
      alert("Please select a link to create a new post");
      setIsLoadingButton(false);
      return;
    }
    try {
      await api.post(
        "/posts",
        {
          link,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setLink("");
      setDescription("");
      setIsLoadingButton(false);
      getAllPosts(false);
    } catch (error) {
      alert("There was an error publishing your link");
      console.log(error);
      setIsLoadingButton(false);
    }
  }

  async function reformPage(){
    setShowNotification(false)
    setPosts([newPosts, ...posts])
  }
  useEffect(() => {
    if (!user) {
      navigate("/");
    } else {
      getAllPosts();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Header />
      <Title>timeline</Title>

      <FormContainer>
        <ProfilePicture src={user.pictureURL} />

        <NewPostContainer data-test="publish-box">
          <ContainerTitle>What are you going to share today?</ContainerTitle>

          <LinkInput
            placeholder="http://..."
            value={link}
            onChange={(e) => setLink(e.target.value)}
            disabled={isLoadingButton}
            data-test="link"
          />

          <DescriptionInput
            placeholder="Awesome article about #javascript"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={isLoadingButton}
            data-test="description"
          />
          <div>
            <Button>
              <ButtonText onClick={handleCreatePost} data-test="publish-btn">
                {isLoadingButton ? <p>Publishing...</p> : <p>Publish</p>}
              </ButtonText>
            </Button>
          </div>
        </NewPostContainer>
      </FormContainer>

      {isLoading ? (
        <PostContainer>
          <NoPostsText>Loading</NoPostsText>
          <ThreeDots color="#FFFFFF" width={80} />
        </PostContainer>
      ) : (
        <PostContainer>
          {showNotification ? (
            <NewPostNotification onClick={()=>reformPage()}>
              <button data-test="load-btn">
                {newPosts} new posts, load more!
                <ion-icon name="refresh"></ion-icon>
              </button>              
            </NewPostNotification>
          ) : ""}

          {posts.length === 0 ? (
            <NoPostsText data-test="message">
              There are no posts yet
            </NoPostsText>
          ) : (
            posts.map((post) => {
              return (
                <Post
                  key={Math.random()}
                  postId={post.postid}
                  author={post.postauthor}
                  authorId={post.userid}
                  profilePicture={post.authorphoto}
                  description={post.postdescription}
                  link={post.postlink}
                  linkTitle={post.linktitle}
                  linkDescription={post.linkdescription}
                  linkImage={post.linkimage}
                  getAllPosts={getAllPosts}
                  routeOrigin={"/timeline"}
                  liked={post.liked}
                  likeCount={post.likescount}
                  whoLiked={post.wholiked}
                  isReshare={post.reshareid ? true : false}
                  resharer={post.reshareauthor}
                  resharesCount={post.resharescount}
                />
              );
            })
          )}
        </PostContainer>
      )}
      <ContainerHashtagBox>
        <HashtagBox />
      </ContainerHashtagBox>
    </Container>
  )
};
