import { useEffect, useState } from "react";
import { Post } from "../../components/Post";
import { api } from "../../services/api";

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
  const [posts, setPosts] = useState(true);

  async function getAllPosts() {
    setIsLoading(true);
    try {
      const postsData = await api.get("/post", {
        headers: {
          //Authorization: `Bearer ${userData.token}`,
        },
      });

      setPosts(postsData.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleCreatePost() {
    try {
      await api.post(
        "/post",
        {},
        {
          headers: {
            //Authorization: `Bearer ${userData.token}`,
          },
        }
      );

      getAllPosts();
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDeletePost(id) {
    try {
      await api.delete(
        `/post`,
        {},
        {
          headers: {
            //Authorization: `Bearer ${userData.token}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAllPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Title>timeline</Title>

      <FormContainer>
        <ProfilePicture src="http://c.files.bbci.co.uk/17444/production/_124800359_gettyimages-817514614.jpg" />

        <NewPostContainer>
          <ContainerTitle>What are you going to share today?</ContainerTitle>

          <LinkInput />

          <DescriptionInput />
          <div>
            <Button>
              <ButtonText>Publish</ButtonText>
            </Button>
          </div>
        </NewPostContainer>
      </FormContainer>

      <PostContainer>
        <Post />
        <Post />
      </PostContainer>
    </Container>
  );
}
