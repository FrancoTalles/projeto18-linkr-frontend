import styled from "styled-components";

export const FollowButtonDiv = styled.button`
    height: 31px;
    width: 112px;
    background-color: ${props => props.loadingButton ? "#808080" : (props => props.follow ? "#ffffff" : "#1877f2")};
    /* background-color: ${props => props.follow ? "#ffffff" : "#1877f2"}; */
    color: ${props => props.loadingButton ? "#000000" : (props => props.follow ? "#1877f2" : "#ffffff")};
    /* color: ${props => props.follow ? "#1877f2": "#ffffff"}; */
    border-radius: 5px;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 14px;
    line-height: 16.8px;
    cursor: pointer;
    border: none;
    pointer-events: ${props => props.loadingButton ? "none" : "auto"};

`