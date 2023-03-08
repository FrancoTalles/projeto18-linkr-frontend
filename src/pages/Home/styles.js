import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    background-color: #333333;
    flex-direction: column;
    align-items: center;
    padding-top: 140px;
    width: 100%;
    height: 100%;
`;

export const Title = styled.h1`
    padding-bottom: 42px;
    font-family: "Oswald";
    font-weight: 700;
    font-size: 43px;
    color: #FFFFFF;
    width: 610px;
`;

export const FormContainer = styled.div`
    background-color: #FFFFFF;
    width: 610px;
    height: 210px;
    padding: 16px;
    margin-bottom: 30px;
    display: flex;
    gap: 16px;
    border-radius: 16px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ProfilePicture = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

export const NewPostContainer = styled.form`
    display: flex;
    width: 90%;
    flex-direction: column;
    gap: 5px;

    div {
        display: flex;
        width: 100%;
        margin-top: 20px;
        justify-content: flex-end;
    }
`;

export const ContainerTitle = styled.h3`
    font-family: "Lato";
    font-weight: 300;
    font-size: 20px;
    color: #707070;
`;

export const LinkInput = styled.input`
    background-color: #EFEFEF;
    border: none;
    border-radius: 5px;
    height: 30px;
`;

export const DescriptionInput = styled.input`
    background-color: #EFEFEF;
    border: none;
    border-radius: 5px;
    height: 60px;
`;

export const Button = styled.button`
    background-color: #1877F2;
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
    color: #FFFFFF;
    font-family: "Lato";
    font-weight: 700;
    font-size: 14px;
`;

export const PostContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;