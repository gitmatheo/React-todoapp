import React from "react";
import styled from "styled-components";
import img from "../assets/images/bg2.jpg";

const HeroImg = styled.div`
  position: fixed;
  top: 0;
  z-index: -1;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* filter: blur(3px); */
  width: 100vw;
  height: 100vh;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    opacity: 0.3;
  }
`;
const HeroImage = () => {
  return <HeroImg />;
};

export default HeroImage;
