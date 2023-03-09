import { IoTrash, IoPencil } from "react-icons/io5";
import { api } from "../../services/api";

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
} from "./styles";

export function Post({
  author,
  profilePicture,
  description,
  link,
  linkTitle,
  linkDescription,
  linkImage,
}) {
  async function handleDeletePost(id) {
    try {
      await api.delete(
        `/posts`,
        {},
        {
          headers: {
            //Authorization: `Bearer ${user.token}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  async function handleEditPost(id) {
    try {
      await api.put(
        `/posts`,
        {},
        {
          headers: {
            //Authorization: `Bearer ${user.token}`,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container>
      <PhotoLikesContainer>
        <ProfilePicture src={profilePicture} />
      </PhotoLikesContainer>

      <PostContainer>
        <PostAuthor>{author}</PostAuthor>

        <PostDescription>{description}</PostDescription>

        <PostLink href={link} target="_blank">
          <div>
            <LinkTitle>
              Como aplicar o material UI em um projeto react
            </LinkTitle>
            <LinkDescription>
              lorem Ipsum is simply dummy text et so indent level is always
              available lorem
            </LinkDescription>

            <LinkUrl>{link}</LinkUrl>
          </div>

          <LinkImage src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png" />
        </PostLink>
      </PostContainer>

      {true && (
        <IconsContainer>
          <IoPencil onClick={() => alert("edit"+ author)} />
          <IoTrash onClick={() => alert("delete"+ author)} />
        </IconsContainer>
      )}
    </Container>
  );
}
