import React from "react";
import styled from "styled-components";

const Main = styled.div`
  position: absolute;
  top: 50px;
  width: 10%;
  height: 80%;
  right: calc(-10% + 5%);
  background-color: #800080;
  color: white;
  border-radius: 0 5px 5px 0;
  p {
    font-size: 1.1em;
    padding: 10px;
    span {
      font-size: 45px;
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
    width: 15%;
    right: calc(-15% + 5%);
    p {
      font-size: 0.9em;
      padding: 10px;
      span {
        font-size: 35px;
        font-weight: bold;
      }
    }
    /* display: none; */
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

const d = new window.Date();
const monthName = monthNames[d.getMonth()];
const dayName = dayNames[d.getDay()];

const dayToShow = d.getDate();
const dateToShow = `${monthName} ${d.getFullYear()} ${dayName}`;

const Date = () => {
  return (
    <Main>
      <p>
        <span>{dayToShow}</span>
      </p>
      <p> {dateToShow}</p>
    </Main>
  );
};

export default Date;
