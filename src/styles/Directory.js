import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;

export const PageTitle = styled.h1`
  font-size: 4vw;
  padding: 0;
  @media (max-width: 767px) {
    font-size: 7vw;
  }
`;

export const UserWrapper = styled.h3`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Card = styled.h3`
  width: 70vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 20px;
  padding-left: 20px;
  font-size: 1.9vw;
  margin: auto;
  border-radius: 10px;
  border: 1px solid black;
  cursor: pointer;
  &:hover {
    border-color: blue;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5), 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 767px) {
    height: 10vh;
    font-size: 4vw;
    div {
      max-width: 130px;
    }
  }
`;
