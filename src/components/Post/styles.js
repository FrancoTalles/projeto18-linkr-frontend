import styled from "styled-components";

export const Container = styled.div`
  width: 610px;
  display: flex;
  padding: 15px;
  flex-direction: column;
  border-radius: 16px;
  background-color: #171717;
  gap: 16px;
  position: relative;

  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const PhotoLikesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ProfilePicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  @media (max-width: 650px) {
    width: 40px;
    height: 40px;
  }
`;

export const LikeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: center;

  p {
    text-align: center;
    font-family: "Lato";

    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    text-align: center;

    color: #ffffff;
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

export const RepostContainer = styled.div`
  min-height: 42px;
  width: 100%;
  color: #ffffff;
  display: flex;
  gap: 4px;
  border-radius: 16px 16px 0 0;
  align-items: center;
  padding-left: 10px;
  margin-bottom: -27px;
  background-color: #1e1e1e;
  padding-bottom: 8px;

  span {
    font-weight: bold;
  }
`;

export const InnerContainer = styled.div`
  display: flex;  
  gap: 6px
`;

export const CommentsWrapper = styled.div`
    margin-bottom: 25px;
`
    
export const CommentsBox = styled.div`
    padding: 0 20px;
    max-height: 250px;
    overflow-y: scroll;
    &::-webkit-scrollbar {
    display: none;
  }
`
export const CommentPost = styled.div`
    display: flex;
    padding: 20px 0;
    border-bottom: 1px solid #353535;
    .profilePicture{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-left: 5px;
        margin-right: 18px;
    }
    .content{
      
    }
    .userName{
        span{
            color: #565656;
        }
    }
    .commentText{
        color: #ACACAC;
    }
  `

  export const InputCommentBox = styled.div`
    padding: 20px 20px;
    display: flex;
    align-items: center;
    position: relative;
    .profilePicture{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-left: 5px;
        margin-right: 18px;
    }
    .commentText{
        background-color: #252525;
        color: white;
        font-size: 14px;
        padding-left: 10px;
        padding-right: 40px;
        outline: none;
        border: 0;
        height: 40px;
        border-radius: 5px;
        width: 100%;
    }
    .icon{
        position: absolute;
        right: 35px;
        top: 35px;
        cursor: pointer;
    }
`