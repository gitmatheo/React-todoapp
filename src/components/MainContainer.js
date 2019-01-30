import React from "react";
import styled from "styled-components";
import List from "./List.js";
import Header from "./Header.js";
import DateContainer from "./DateContainer.js";
import "../assets/images/avatar.png";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(255, 255, 255, 0.9);
  border-radius: 5px;
  box-shadow: 0 10px 20px -8px rgba(0, 0, 0, 0.8),
    10px 0px 20px -8px rgba(0, 0, 0, 0.5);
  width: 70vw;
`;

const InsideContainer = styled.div`
  width: 95%;
  box-shadow: 10px 0px 20px -12px rgba(0, 0, 0, 0.5);
`;

const MainContainer = () => {
  return (
    <Container>
      <InsideContainer>
        <Header />
        <List />
      </InsideContainer>
      <DateContainer />
    </Container>
  );
};

export default MainContainer;
