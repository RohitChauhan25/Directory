import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: transparent;
  align-items: center;
  justify-content: center;
  margin: auto;
  position: fixed;
  z-index: 3;
`;

export const Spinner = styled.div`
  width: 56px;
  height: 56px;
  --c: radial-gradient(farthest-side, blue 92%, #0000);
  background: var(--c) 50% 0, var(--c) 50% 100%, var(--c) 100% 50%,
    var(--c) 0 50%;
  background-size: 13.4px 13.4px;
  background-repeat: no-repeat;
  animation: spinner-kh173p 1s infinite;

  @keyframes spinner-kh173p {
    to {
      transform: rotate(0.5turn);
    }
  }
`;
