import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  div {
    display: flex;
    justify-content: center;
    align-content: center;
    margin: 0 auto;
    width: 90%;
    button {
      flex-basis: 33.3333%;
    }
  }
  button {
    padding: 5px 5%;
    background: transparent;
    border: 2px solid #800080;
    margin: 5px 0;
    cursor: pointer;
    outline: none;
    transition: 0.3s;
    &:hover {
      background: #800080;
      color: white;
    }
    &.active {
      background: #800080;
      color: white;
    }
  }
`;

const Buttons = props => {
  return (
    <Container>
      <div>
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
      </div>
      <div>
        <button onClick={props.toggleAll}>TOGGLE ALL COMPLETE</button>
        {props.tasks.some(task => task.complete) ? (
          <button onClick={props.deleteCompleteTasks}>
            DELETE ALL COMPLETED
          </button>
        ) : null}
      </div>
    </Container>
  );
};

export default Buttons;
