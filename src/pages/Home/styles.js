import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background-color: #333333;
  flex-direction: column;
  align-items: center;
  padding-top: 140px;
  width: 100%;
  height: 100%;

  @media (max-width: 620px) {
    padding-top: 100px;
}
`;

export const Title = styled.h1`
  padding-bottom: 42px;
  font-family: "Oswald";
  font-weight: 700;
  font-size: 43px;
  color: #ffffff;
  width: 610px;

  @media (max-width: 650px) {
    width: 100%;
    padding-left: 20px;
  }

  @media (max-width: 460px) {
    font-size: 33px;
    padding-bottom: 32px;
  }
`;

export const FormContainer = styled.div`
  background-color: #ffffff;
  width: 610px;
  height: 210px;
  padding: 16px;
  margin-bottom: 30px;
  display: flex;
  gap: 16px;
  border-radius: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  @media (max-width: 650px) {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 460px) {
    height: 100%;
    padding: 10px;
  }
`;

export const ProfilePicture = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;

  @media (max-width: 460px) {
    display: none;
  }
`;

export const NewPostContainer = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 5px;

  div {
    display: flex;
    width: 100%;
    padding-top: 20px;
    justify-content: flex-end;

    @media (max-width: 460px) {
      padding-top: 0px;
    }
  }

  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const ContainerTitle = styled.h3`
  font-family: "Lato";
  font-weight: 300;
  font-size: 20px;
  color: #707070;

  @media (max-width: 460px) {
    font-size: 17px;
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

export const DescriptionInput = styled.textarea`
  background-color: #efefef;
  border: none;
  border-radius: 5px;
  height: 60px;
  padding-left: 13px;
  padding-top: 8px;

  ::placeholder {
    position: absolute;
    top: 8px;
    color: #949494;
  }
`;

export const Button = styled.button`
  background-color: #1877f2;
  border: none;
  cursor: pointer;
  width: 112px;
  height: 30px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.p`
  color: #ffffff;
  font-family: "Lato";
  font-weight: 700;
  font-size: 14px;
`;

export const PostContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 650px) {
    width: 100%;
  }
`;

export const NoPostsText = styled.p`
  font-family: "Oswald";
  font-weight: 400;
  font-size: 24px;
  line-height: 36px;
  color: #FFFFFF;

  @media (max-width: 650px) {
    width: 100%;
    text-align: center;
  }

`;
