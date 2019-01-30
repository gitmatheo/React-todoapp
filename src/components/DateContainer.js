import React from "react";
import styled from "styled-components";

const Main = styled.div`
  width: 10%;
  background-color: violet;
  height: 80%;
  position: absolute;
  top: 5%;
  right: calc(-10% + 5%);
  z-index: -1;
  border-radius: 0 5px 5px 0;
  color: white;
  p {
    font-size: 0.8em;
    padding: 10px;
    span {
      font-size: 40px;
      font-weight: bold;
    }
  }
`;

const MainContainer = () => {
  return (
    <Main>
      <p>
        <span>02</span> Feb 2018 Monday
      </p>
    </Main>
  );
};

export default MainContainer;
