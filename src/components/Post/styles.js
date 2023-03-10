import styled from "styled-components";

export const Container = styled.div`
  width: 610px;
  display: flex;
  padding: 15px;
  border-radius: 16px;
  background-color: #171717;
  gap: 16px;
  position: relative;

  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const PhotoLikesContainer = styled.div``;

export const ProfilePicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  @media (max-width: 650px) {
    width: 40px;
    height: 40px;
  }
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;

  @media (max-width: 650px) {
    width: 100%;
  }

  @media (max-width: 460px) {
    gap: 2px;
  }
`;

export const LinkInput = styled.input`
  background-color: #efefef;
  border: none;
  border-radius: 5px;
  height: 30px;
  padding-left: 13px;

  ::placeholder {
    color: #949494;
  }
`;

export const PostAuthor = styled.p`
  font-family: "Lato";
  font-weight: 400;
  font-size: 19px;
  line-height: 23px;
  color: #ffffff;
  cursor: pointer;

  @media (max-width: 460px) {
    font-size: 17px;
    line-height: 20px;
  }
`;

export const PostDescription = styled.p`
  font-family: "Lato";
  font-weight: 400;
  font-size: 17px;
  line-height: 20px;
  color: #b7b7b7;

  @media (max-width: 460px) {
    font-size: 15px;
    line-height: 18px;
  }
`;

export const PostLink = styled.a`
  width: 100%;
  display: flex;
  border-radius: 10px;
  border: 1px solid #4d4d4d;
  cursor: pointer;
  div {
    padding: 19px;

    @media (max-width: 460px) {
      padding: 7px;
    }
  }
`;

export const LinkTitle = styled.p`
  font-family: "Lato";
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #cecece;
  margin-bottom: 8px;

  @media (max-width: 460px) {
    font-size: 11px;
    margin-bottom: 3px;
  }
`;

export const LinkDescription = styled.p`
  font-family: "Lato";
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: #9b9595;
  margin-bottom: 8px;

  @media (max-width: 460px) {
    font-size: 9px;
    margin-bottom: 3px;
  }
`;

export const LinkUrl = styled.p`
  font-family: "Lato";
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  color: #cecece;
  word-break: break-all;

  @media (max-width: 460px) {
    font-size: 9px;
  }
`;

export const LinkImage = styled.img`
  width: 155px;
  border-radius: 0 10px 10px 0;

  @media (max-width: 460px) {
    width: 95px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  position: absolute;
  gap: 12px;
  top: 16px;
  right: 16px;
`;
