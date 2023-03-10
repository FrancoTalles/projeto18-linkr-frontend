import styled from "styled-components";

export const HeaderStyled = styled.div`
  width: 100%;
  height: 72px;
  position: absolute;
  left: 0px;
  top: 0px;

  display: flex;
  justify-content: space-between;

  padding: 10px 18px;

  background: #151515;

  h1 {
    font-family: "Passion One", cursive;
    font-weight: 700;
    font-size: 49px;
    color: #ffffff;
  }
  
  input{

    width: 563px;
    height: 45px;
    border-radius: 8px;
    border: none;
    padding: 0 16px;
    font-size: 16px;
    font-weight:400 ;
    background-color: #FFFFFF;
    &::placeholder {
      color: #c6c6c6;
      font-family: 'Lato', sans-serif;
    }
    @media (max-width: 425px) {
      display: none;
    }
    @media (max-width: 800px) {
      width: 100%;
      
    }
  }

  img {
    width: 53px;
    height: 53px;
    border-radius: 26.5px;

    @media (max-width: 460px) {
      width: 44px;
      height: 44px;
    }
  }
  .logout{
    cursor: pointer;
    position: fixed;
    top: 70px;
    right: 0;
    width: 150px;
    height: 43px;
    background-color: #171717;
    border-radius: 0px 0px 0px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    button{
      cursor: pointer;
      border: none;
      background-color: #171717;
      font-family: 'Lato';
      font-style: normal;
      font-weight: 700;
      font-size: 15px;

      color: #FFFFFF;
    }
  }

  @media (max-width: 800px) {
    gap: 10px;
  }
`;

export const SuggestionsWrapper = styled.div`
  position: absolute;
  top: 50px;
  width: 563px;
  background-color: #e7e7e7;

  border-radius: 0 0 8px 8px;

  overflow: hidden;
  @media (max-width: 800px) {
    width: 239px;
  }
  @media (max-width: 465px){
    display: none;
  }
`;

export const SuggestionsList = styled.ul`
  width: 100%;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const SuggestionItem = styled.li`
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #c7c7c7;
  }
`;

export const Logout = styled.div`
  gap : 3px;
  display: flex;
  align-items: center;
  cursor: pointer;

`;
