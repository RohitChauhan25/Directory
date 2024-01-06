import { useEffect } from "react";
import {
  Close,
  Container,
  ModalContent,
  ModalWrapper,
  PostTitle,
  Title,
} from "../styles/modal";
import { Label } from "../styles/userProfile";
import { IoClose } from "react-icons/io5";

export const Modal = ({ content, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "scroll";
    };
  }, []);
  return (
    <Container onClick={onClose}>
      <ModalWrapper>
        <Close onClick={onClose}>
          <IoClose size={30} />
        </Close>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <Title>Post Detail</Title>
          <PostTitle>
            <Label>Title :</Label> <span> {content?.title}</span>
          </PostTitle>

          <PostTitle>
            <Label>Body :</Label> <span> {content?.body}</span>
          </PostTitle>
        </ModalContent>
      </ModalWrapper>
    </Container>
  );
};
