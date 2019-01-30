import React from "react";
import styled from "styled-components";

const Main = styled.ul`
  list-style: none;
  padding: 20px;
  li {
    border-bottom: 1px solid rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: space-between;

    .buttons,
    .todo {
      display: flex;

      font-size: 1.3em;

      .check,
      .delete {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        margin: 10px;
        border: 3px solid white;
        border-radius: 50px;
        background-color: violet;
        width: 10px;
        height: 10px;
        color: white;
      }
    }
    .todo {
      flex-basis: 80%;
      align-items: center;
      p {
        padding: 10px;
      }
    }
  }
`;

const List = () => {
  return (
    <Main>
      <li>
        <div className="todo">
          <p>09:27</p>
          <p>Check emails</p>
        </div>
        <div className="buttons">
          <div className="check">+</div>
          <div className="delete">-</div>
        </div>
      </li>
      <li>Item2</li>
      <li>Item3</li>
      <li>Item3</li>
    </Main>
  );
};

export default List;
