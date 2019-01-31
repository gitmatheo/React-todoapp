import React from "react";
import styled from "styled-components";
import { faHeart, faGithub } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

const MyFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  color: rgba(255, 255, 255, 0.9);
  @media (max-width: 1024px) {
    font-size: 14px;
  }
  @media (max-width: 768px) {
    font-size: 10px;
  }
`;

const Footer = () => {
  return (
    <MyFooter>
      <h2>
        Created with
        <FontAwesomeIcon icon={faHeart} size="sm" />
        by Mateusz Dominiak
        <a href="https://github.com/gitmatheo">
          {/* <FontAwesomeIcon icon={faGithub} size="lg" /> */}
        </a>
      </h2>
    </MyFooter>
  );
};

export default Footer;
