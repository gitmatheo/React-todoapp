import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  button {
    padding: 10px 5%;
    background: transparent;
    border: 2px solid violet;
    border-radius: 4px;
    margin: 20px 0;
    cursor: pointer;
    outline: none;
    transition: 0.3s;
    &:hover {
      background: violet;
      color: white;
    }
    &.active {
      background: violet;
      color: white;
    }
  }
`;

const Buttons = props => {
  console.log(props.tasksToShow);
  console.log(props.tasksToShow === "all");
  return (
    <Container>
      <button
        className={props.tasksToShow === "all" ? "active" : null}
        onClick={props.all}
      >
        ALL
      </button>
      <button
        className={props.tasksToShow === "active" ? "active" : null}
        onClick={props.active}
      >
        ACTIVE
      </button>
      <button
        className={props.tasksToShow === "complete" ? "active" : null}
        onClick={props.complete}
      >
        COMPLETE
      </button>
      {props.tasks.some(task => task.complete) ? (
        <button onClick={props.deleteCompleteTasks}>DELETE ALL</button>
      ) : null}
      <button onClick={props.toggleAll}>toggle all complete</button>
    </Container>
  );
};

export default Buttons;
