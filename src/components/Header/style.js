import styled from "styled-components";

export const HeaderStyled = styled.div`
    width: 100%;
    height: 72px;
    position: absolute;
    left: 0px;
    top: 0px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 18px;

    background: #151515;

    h1{
        font-family: 'Passion One', cursive;
        font-weight: 700;
        font-size: 49px;
        color: #FFFFFF;
    }
    input{
        height: 45px;
        width: 563px;
        border:none;
        padding:10px 14px;
        border-radius: 8px;

        font-family: 'Lato', sans-serif;
        font-weight: 400;
        font-size: 19px;
    
        ::placeholder{
            color:#C6C6C6;
        }

    }
    img{
        width: 53px;
        height: 53px;
        border-radius: 26.5px;
    }

`;