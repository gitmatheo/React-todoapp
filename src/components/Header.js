import React from "react";
import styled from "styled-components";
import img from "../assets/images/avatar.png";

const Main = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 20px;
  color: rgba(0, 0, 0, 0.8);
  .info {
    padding-left: 20px;
  }
`;

const Avatar = styled.div`
  background-image: url(${img});
  background-position: center;
  background-size: cover;
  width: 80px;
  height: 80px;
  z-index: 50000;
  border-radius: 50%;
`;

const List = () => {
  return (
    <Main>
      <Avatar />
      <div className="info">
        <h2>John Doe</h2>
        <p> Front-End Developer</p>
      </div>
    </Main>
  );
};

export default List;
