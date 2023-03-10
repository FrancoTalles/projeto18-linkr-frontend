import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

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
} from "./styles";
import Header from "../../components/Header/Header";
import { ThreeDots } from "react-loader-spinner";


export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingButton, setIsLoadingButton] = useState(false);
  const [posts, setPosts] = useState();
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  console.log(user.token);

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

  useEffect(() => {
    if (user.token.length === 0) {
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

      <FormContainer >
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
          <ThreeDots color="#FFFFFF" width={80}/>
        </PostContainer>
      ) : (
        <PostContainer>
          {posts.length === 0 ? (
            <NoPostsText data-test="message">There are no posts yet</NoPostsText>
          ) : (
            posts.map((post) => {
              return (
                <Post
                  key={post.postid}
                  postId={post.postid}
                  author={post.postauthor}
                  profilePicture={post.authorphoto}
                  description={post.postdescription}
                  link={post.postlink}
                  linkTitle={post.linktitle}
                  linkDescription={post.linkdescription}
                  linkImage={post.linkimage}
                  getAllPosts={getAllPosts}
                  routeOrigin={"/timeline"}
                />
              );
            })
          )}
        </PostContainer>
      )}
    </Container>
  );
}
