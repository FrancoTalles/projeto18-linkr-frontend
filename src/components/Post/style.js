import styled from "styled-components";

export const PostStyled = styled.div`
    width: 100%;
    height: 276px;

    background-color: #171717;
    border-radius: 16px;
    
    padding: 0px 18px;

    display: flex;
`;

export const PostLeftPart = styled.div`
    width: 50px;
    height: 100%;
    display: flex;
    flex-direction: column;

    align-items: center;

    padding: 17px 0px;

    gap: 5px;

    img{
        width: 50px;
        height: 50px;
        border-radius: 26.5px;
        margin-bottom: 15px;
    }
    ion-icon{
        width: 20px;
        height: 20px;
        background-color: red;
    }
    p{
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        font-size: 11px;
    }
`;

export const PostRightPart = styled.div`
    width: 100%;
    height: 100%;

    padding: 17px 18px;
    
    h1{
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        font-size: 19px;
        margin-bottom: 10px;
    }

    p{
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        font-size: 17px;
        color: #B7B7B7;
        margin-bottom: 10px;
    }

    div{
        width: 100%;
        height: 170px;
        border: 1px solid #4D4D4D;
        border-radius: 11px;
    }
`;