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
    cursor: pointer;
    outline: none;
    transition: 0.3s;
    &:hover {
      background: violet;
      color: white;
    }
  }
`;

const Buttons = props => {
  return (
    <Container>
      <button onClick={props.all}>ALL</button>
      <button onClick={props.active}>ACTIVE</button>
      <button onClick={props.complete}>COMPLETE</button>
      {props.tasks.some(task => task.complete) ? (
        <button onClick={props.deleteCompleteTasks}>DELETE ALL</button>
      ) : null}
      <button onClick={props.toggleAll}>toggle all complete</button>
    </Container>
  );
};

export default Buttons;
