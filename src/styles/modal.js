import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const ModalWrapper = styled.div`
  background: #fff;
  padding: 20px;
  position: relative;
  border-radius: 8px;
`;

export const ModalContent = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 400px;
  gap: 20px;
  flex-direction: column;
  @media (max-width: 767px) {
    min-width: 100px;
    max-width: 250px;
  }
`;

export const Title = styled.div`
  font-size: 25px;
  font-weight: bold;
`;

export const PostTitle = styled.div`
  width: 100%;
  font-size: 20px;
  max-width: 400px;
`;

export const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 15px;
  cursor: pointer;
`;
