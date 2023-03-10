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
`;

export const SuggestionsList = styled.ul`
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
