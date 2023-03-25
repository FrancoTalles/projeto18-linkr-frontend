import Modal from "react-modal";
import styled from "styled-components";

export const Container = styled(Modal)`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 9999;
`;

export const InnerContainer = styled.div`
  width: 597px;
  height: 262px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #333333;
  border-radius: 50px;  
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 650px) {
      width: 100%;
    }
`;

export const Title = styled.h1`
  width: 65%;
  font-family: "Lato";
  font-weight: 700;
  font-size: 34px;
  line-height: 40px;
  text-align: center;
  color: #ffffff;

  @media (max-width: 500px) {
      width: 100%;
      font-size: 28px;
    }
`;

export const ButtonContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-around;
  margin-top: 40px;

  @media (max-width: 500px) {
      width: 100%;
    }
`;

export const CancelButton = styled.button`
  width: 134px;
  height: 37px;
  font-family: "Lato";
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  background-color: #ffffff;
  color: #1877f2;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const ConfirmButton = styled.button`
  width: 134px;
  height: 37px;  
  background-color: #1877f2;  
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.p`
font-family: "Lato";
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
`;
