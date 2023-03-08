import styled from "styled-components";

export const Container = styled.div`
    width: 610px;
    display: flex;
    padding: 16px;
    border-radius: 16px;
    background-color: #171717;
    gap: 16px;
`;

export const PhotoLikesContainer = styled.div`
`;

export const ProfilePicture = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 7px;
`;

export const PostAuthor = styled.p`
    font-family: "Lato";
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    color: #FFFFFF;
`;

export const PostDescription = styled.p`
    font-family: "Lato";
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #B7B7B7;
`;

export const PostLink = styled.div`
    width: 100%;
    display: flex;
    border-radius: 10px;
    border: 1px solid #4d4d4d;
    cursor: pointer;
    div {
        padding: 19px;
    }
`;

export const LinkTitle = styled.p`
    font-family: "Lato";
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #cecece;
    margin-bottom: 8px;
`;

export const LinkDescription = styled.p`
    font-family: "Lato";
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #9B9595;
    margin-bottom: 8px;
`;

export const LinkUrl = styled.p`
    font-family: "Lato";
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #CECECE;
`;

export const LinkImage = styled.img`
    width: 155px;
    height: 155px;
    border-radius: 0 10px 10px 0;
`;

