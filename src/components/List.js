import React from "react";
import styled from "styled-components";

const Main = styled.ul`
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
      padding: 15px;
      margin: 10px;
      border: 3px solid white;
      border-radius: 50px;
      background-color: violet;
      width: 10px;
      height: 10px;
      color: white;
      cursor: pointer;
    }
  }
  .todo {
    flex-basis: 80%;
    align-items: center;
    p {
      padding: 10px;
    }
  }
`;

const List = props => {
  return (
    <Main
      onClick={props.toggleComplete}
      style={{
        textDecoration: props.complete ? "line-through" : ""
      }}
    >
      <div className="todo">
        <p>{props.task}</p>
      </div>
      <div className="buttons">
        <div className="check">+</div>
        <div className="delete" onClick={props.onDelete}>
          x
        </div>
      </div>
    </Main>
  );
};

export default List;
