import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InnerContainer = styled.div`
  margin-top: 70px;
  width: 80vw;
  @media (max-width: 767px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const TopSection = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-between;
  @media (max-width: 767px) {
    width: 98vw;
  }
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 10px;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

export const BackButton = styled.button`
  display: flex;
  padding: 0 20px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 100px;
  height: 40px;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    border-color: blue;
    font-weight: bold;
    /* background-color: lightgray; */
  }

  @media (max-width: 767px) {
    padding: 0;
    width: 70px;
    height: 5vh;
  }
`;

export const BackText = styled.div`
  padding: 0;
`;

export const PauseButton = styled.div`
  cursor: pointer;
`;

export const DigitalClock = styled.div`
  min-height: 50px;
  width: 135px;
  padding: 0;
`;

export const ClockWrapper = styled.div`
  border: 1px solid black;
  font-weight: 700;

  align-items: center;
  border-radius: 10px;
  justify-content: center;
  gap: 10px;
  display: flex;
  @media (max-width: 767px) {
    padding: 1px 1px;
    border-radius: 5px;
    justify-content: space-evenly;
  }
`;

export const DateWrapper = styled.div`
  width: 100%;
  text-align: center;
  border-radius: 5px;
  font-size: 10px;
`;

export const Wrapper = styled.div``;
export const Time = styled.div`
  border-radius: 5px;
  font-weight: 700;
  font-size: 1.8vw;
  font-family: "Orbitro";
  @media (max-width: 767px) {
    font-size: 4.8vw;
  }
`;

export const SelectWrapper = styled.div`
  border: 1px solid black;
  border-radius: 10px;
  padding: 1px 11px;
  @media (max-width: 767px) {
    padding: 1px 1px;
    border-radius: 5px;
  }
`;
export const Select = styled.select`
  padding: 10px;
  width: 10vw;
  border-radius: 5px;
  cursor: pointer;
  background-color: #a0b4c8;
  border: none;
  outline: none;
  @media (max-width: 767px) {
    width: 20vw;
    padding: 5px;
  }
`;

export const MidSection = styled.div`
  width: 80vw;
  margin-top: 50px;
  border: 1px solid black;
  border-radius: 15px;
  padding: 20px 0px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5), 0 8px 16px rgba(0, 0, 0, 0.1);
  @media (max-width: 767px) {
    width: 98vw;
  }
`;

export const DetailWrapper = styled.div`
  width: 80vw;
  display: flex;
  justify-content: space-between;
  padding: 20px 0px;
  @media (max-width: 767px) {
    width: 90vw;
    flex-direction: column;
    gap: 10px;
  }
`;
export const Title = styled.div``;

export const NameWrapper = styled.div`
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const ContactWrapper = styled.div`
  padding-right: 20px;
  display: flex;
  gap: 10px;
  flex-direction: column;
  max-width: 350px;
  @media (max-width: 767px) {
    padding-right: 0;
    padding-left: 20px;
    max-width: 100vw;
  }
`;
export const NameLabel = styled.span`
  font-weight: normal;
`;
export const NameText = styled.div``;

export const UsernameWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Username = styled.span``;
export const CatchPhrase = styled.span``;
export const AddressText = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  max-width: 500px;
`;

export const Label = styled.span`
  font-weight: bold;
`;

export const ContactText = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  max-width: 500px;
`;

export const BottomSection = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 80vw;
  border-radius: 10px;
`;

export const Card = styled.div`
  width: 30%;
  margin-top: 20px;
  margin-bottom: 20px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
  &:hover {
    border-color: blue;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5), 0 8px 16px rgba(0, 0, 0, 0.1);
  }
  @media (max-width: 767px) {
    width: 100%;
  }
`;

export const PostTitle = styled.h3`
  padding: 0;
`;

export const Body = styled.div``;
export const SectionTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-weight: bold;
`;
