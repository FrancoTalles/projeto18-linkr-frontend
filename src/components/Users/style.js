import styled from "styled-components";

export const UsersContainer = styled.li`
    padding: 5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    gap: 15px;

    &:hover {
        background-color: #c7c7c7;
    }


    img{
        width: 39px;
        height: 39px;
        border-radius: 70%;
    }

    h1{
        font-family: "Lato", sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 19px;

        color: #515151;
    }


`;