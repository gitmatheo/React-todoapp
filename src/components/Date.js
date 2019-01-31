import React from "react";
import styled from "styled-components";

const Main = styled.div`
  position: absolute;
  top: 5%;
  width: 10%;
  height: 80%;
  right: calc(-10% + 5%);
  background-color: #800080;
  color: white;
  z-index: -1;
  border-radius: 0 5px 5px 0;
  p {
    font-size: 0.8em;
    padding: 10px;
    span {
      font-size: 40px;
      font-weight: bold;
    }
  }

  @media (max-width: 1440px) {
    width: 15%;
    right: calc(-15% + 5%);
  }
  @media (max-width: 1024px) {
    width: 20%;
    right: calc(-20% + 5%);
  }

  @media (max-width: 768px) {
    width: 25%;
    right: calc(-25% + 5%);
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const Date = () => {
  return (
    <Main>
      <p>
        <span>02</span> Feb 2018 Monday
      </p>
    </Main>
  );
};

export default Date;
