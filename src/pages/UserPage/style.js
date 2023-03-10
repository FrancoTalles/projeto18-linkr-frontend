import styled from "styled-components";

export const UserPageContainer = styled.div`
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

export const UserName = styled.div`
    width: 611px;
    height: 70px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 42px;

    margin-bottom: 40px;

    @media (max-width: 650px) {
        width: 100%;
        justify-content: center;
        align-items: center;
        padding-left: 15px;
    }

    @media (max-width: 460px) {
        width: 100%;
        justify-content: center;
        align-items: center;
        padding: 0 15px;
    }

    img{
        width: 50px;
        height: 50px;
        border-radius: 26.5px;
        margin-right: 18px ;
        @media (max-width: 650px) {
            width: 40px;
            height: 40px;
        }
    }
    h1{
        
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
            align-items: center;
            padding: 0;
            width: 100%;
        }
    }
`;

export const UserPosts = styled.div`
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
