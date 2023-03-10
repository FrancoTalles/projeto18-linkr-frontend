import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
`

export const BiggerPart = styled.div`
    background-color:#151515;
    width:65vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items:flex-start;    
    justify-content: center;
    h1{
        font-family: 'Passion One', sans-serif;
        font-weight:700;
        font-size: 106px;
        margin-left: 16%;
    }
    h3{
        font-family: 'Oswald', sans-serif;
        font-weight:700;
        font-size: 43px;
        margin-left: 16%;
    }
    @media(max-width: 667px){
        width:100vw;
        height:26vh;
        align-items:center;
        position:fixed;
        top:0;
        left:0;
        z-index:0.1;

        h1{
            font-size:76px;
            margin-left: 0;
        }
        h3{
            font-size:23px;
            margin-left:0;
        }
    }
`

export const FormsPart = styled.div`
    background-color:#333333;
    width:35vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items:center;    
    justify-content: center;
    form{
        display: flex;
        flex-direction: column;
        align-items:center;    
        justify-content: center;
    }
    input{
        height: 8vh;
        width:20vw;
        border:none;
        padding:10px;
        border-radius:6px;
        font-family: 'Oswald', sans-serif;
        font-weight:700;
        font-size:27px;
        color:#9f9f9f;
        margin-bottom:2.5vh;
    }
    button{
        height: 10vh;
        width:20vw;
        border:none;
        font-family: 'Oswald', sans-serif;
        font-weight:700;
        font-size:27px;
        color:#ffffff;
        border-radius:6px;
        background-color:#1877f2;
    }
    @media(max-width: 667px){
        width:100vw;
        height:74vh;
        align-items:center;
        position:fixed;
        bottom:0;
        left:0;
        z-index:0.1;
        input,button{
            font-size:22px;
            width:80vw;
        }
    }

`

export const LinkToRedirect = styled.a`
    color: #ffffff;
    text-decoration: underline;
    font-family: 'Lato', sans-serif;
    font-weight:400;
    font-size: 20px;
    margin-top: 2.5vh;
    @media(max-width: 667px){
        font-size:17px;
    }
`