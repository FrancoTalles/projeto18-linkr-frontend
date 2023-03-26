import { ThreeDots } from "react-loader-spinner";
import {
  Container,
  InnerContainer,
  Title,
  ButtonContainer,
  CancelButton,
  ConfirmButton,
  ButtonText,
} from "./styles";

export function Modal({
  title,
  cancelText,
  confirmText,
  isModalOpen,
  handleCloseModal,
  handleConfirm,
  isLoading,
}) {
  return (
    <Container
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      ariaHideApp={false}
    >
      <InnerContainer>
        <Title>{title}</Title>

        <ButtonContainer>
          <CancelButton onClick={handleCloseModal} disabled={isLoading} data-test="cancel">
            {cancelText}
          </CancelButton>

          <ConfirmButton onClick={handleConfirm} disabled={isLoading} data-test="confirm">
            {isLoading ? (
              <ThreeDots color="#FFFFFF" width={30} />
            ) : (
              <ButtonText>{confirmText}</ButtonText>
            )}
          </ConfirmButton>
        </ButtonContainer>
      </InnerContainer>
    </Container>
  );
}
