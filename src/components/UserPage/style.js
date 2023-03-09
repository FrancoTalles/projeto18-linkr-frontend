import styled from "styled-components";

export const UserPageContainer = styled.div`
    width: 100vw ;
    height: 100vh;
    background-color: #333333;
    padding-top: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const UserName = styled.div`
    width: 611px;
    height: 70px;

    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 5px 18px; 

    margin-bottom: 40px;

    img{
        width: 50px;
        height: 50px;
        border-radius: 26.5px;
        margin-right: 18px ;
    }
    h1{
        font-family: 'Oswald', sans-serif;
        font-weight: 700;
        font-size: 43px;
        color: #FFFFFF;
    }
`;

export const UserPosts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;