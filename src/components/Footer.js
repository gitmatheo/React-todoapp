import React from "react";
import styled from "styled-components";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/fontawesome-free-brands";
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
  color: rgba(255, 255, 255, 0.8);
  font-size: 25px;
  * {
    color: rgba(255, 255, 255, 0.8);
  }
  .heart {
    font-size: 35px;
    animation: heartbeat 0.6s ease-out infinite alternate;
  }
  a {
    cursor: pointer;
    transition: 0.3s;
    :hover {
      color: white;
      transform: scale(1.2);
    }
  }
  @media (max-width: 1024px) {
    font-size: 20px;
    .heart {
      font-size: 30px;
    }
  }
  @media (max-width: 768px) {
    font-size: 16px;
    .heart {
      font-size: 26px;
    }
  }

  @keyframes heartbeat {
    from {
      transform: scale(0.9);
    }
    to {
      transform: scale(1.1);
    }
  }
`;

const Footer = () => {
  return (
    <MyFooter>
      Created with &nbsp;
      <FontAwesomeIcon className="heart" icon={faHeart} size="sm" /> &nbsp; by
      Mateusz Dominiak &nbsp;
      <a href="https://github.com/gitmatheo">
        <FontAwesomeIcon icon={faGithub} size="lg" />
      </a>
    </MyFooter>
  );
};

export default Footer;
