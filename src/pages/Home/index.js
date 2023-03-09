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
  PostContainer
} from "./styles";

export function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoadingButton, setIsLoadingButton] = useState(false);
  const [posts, setPosts] = useState();
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");

  const {user} = useContext(AuthContext);

  const navigate = useNavigate();

  console.log(user.token)

  async function getAllPosts() {
    setIsLoading(true);
    try {
      const postsData = await api.get("/posts", {
        headers: {
          Authorization: `Bearer a9cb3502-2a6a-4894-ab54-11e5905cb4eb`,
        },
      });

      setPosts(postsData.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      alert("An error occurred while trying to fetch the posts, please refresh the page")
    }
  }

  async function handleCreatePost(e) {
    e.preventDefault();
    setIsLoadingButton(true);
    try {
      await api.post(
        "/posts",
        {
          link,
          description
        },
        {
          headers: {
            Authorization: `Bearer a9cb3502-2a6a-4894-ab54-11e5905cb4eb`,
          },
        }
      );
      setLink("");
      setDescription("");
      setIsLoadingButton(false);
      getAllPosts();
    } catch (error) {
      console.log(error);
      setIsLoadingButton(false);
    }
  }



  useEffect(() => {
    if (!user) {
      navigate("/")
    } else {
      getAllPosts();
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <Container>
      <Title>timeline</Title>

      <FormContainer>
        <ProfilePicture src="http://c.files.bbci.co.uk/17444/production/_124800359_gettyimages-817514614.jpg" />

        <NewPostContainer>
          <ContainerTitle>What are you going to share today?</ContainerTitle>

          <LinkInput 
            placeholder="http://..."
            value={link}
            onChange={(e) => setLink(e.target.value)}
            disabled={isLoadingButton}
          />

          <DescriptionInput 
            placeholder="Awesome article about #javascript"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            disabled={isLoadingButton}
          />
          <div>
            <Button>
              <ButtonText onClick={handleCreatePost}>Publish</ButtonText>
            </Button>
          </div>
        </NewPostContainer>
      </FormContainer>

      
        {
          isLoading ?
          <PostContainer>
          <p>Loading</p>
          </PostContainer>
          :
          (
            <PostContainer>
              {
                posts.length === 0 ?
                (
                  <p>There are no posts yet</p>
                )
                :
                posts.map(post => {
                  return (
                    <Post
                    key={post.postid}   
                    author={post.postauthor}
                    profilePicture={post.authorphoto}
                    description={post.postdescription}
                    link={post.postlink}
                    />
                  )
                })
              }
              
            </PostContainer>
          )
        }
      
    </Container>
  );
}
