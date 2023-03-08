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
  return (
    <Container>
      <PhotoLikesContainer>
        <ProfilePicture src="http://c.files.bbci.co.uk/17444/production/_124800359_gettyimages-817514614.jpg" />
      </PhotoLikesContainer>

      <PostContainer>
        <PostAuthor>Juvenal Juvêncio</PostAuthor>

        <PostDescription>
          Muito maneiro esse post Muito maneiro esse post Muito maneiro esse
          post Muito maneiro esse post Muito maneiro esse post
        </PostDescription>

        <PostLink href={link} target="_blank">
          <div>
            <LinkTitle>
              Como aplicar o material UI em um projeto react
            </LinkTitle>
            <LinkDescription>
              lorem Ipsum is simply dummy text et so indent level is always
              available lorem
            </LinkDescription>

            <LinkUrl>www.example.com</LinkUrl>
          </div>

          <LinkImage src="https://pbs.twimg.com/profile_images/446356636710363136/OYIaJ1KK_400x400.png" />
        </PostLink>
      </PostContainer>
    </Container>
  );
}
