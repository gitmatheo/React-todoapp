import React from "react";
import styled from "styled-components";
import {
  faCheckCircle,
  faMinusCircle,
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const Main = styled.li`
  display: flex;
  justify-content: space-between;
  .buttons,
  .todo {
    display: flex;
    align-items: center;
    font-size: 1.3em;
    .check,
    .delete {
      cursor: pointer;
      border: 2px solid #800080;
      border-radius: 50px;
      width: 32px;
      height: 32px;
      color: #800080;
      background: white;
      transition: 0.3s;
      &:hover {
        color: white;
        background: #800080;
      }
    }
  }
  .todo {
    flex-basis: 85%;
    p {
      padding: 10px;
    }
  }
  .buttons {
    flex-basis: 15%;
    justify-content: space-around;
    * {
      margin: 0 3px;
    }
  }
`;

const Task = props => {
  const { id, todo, complete } = props.task;
  return (
    <Main>
      <TransitionGroup>
        <CSSTransition
          key={id}
          in={true}
          appear
          classNames="slide"
          timeout={600}
        >
          <div
            className="todo"
            style={{
              textDecoration: complete ? "line-through" : ""
            }}
          >
            <p>{todo}</p>
          </div>
        </CSSTransition>
      </TransitionGroup>
      <div className="buttons">
        {complete ? (
          <FontAwesomeIcon
            onClick={() => props.toggleComplete(id)}
            className="check"
            icon={faMinusCircle}
            size="lg"
          />
        ) : (
          <FontAwesomeIcon
            onClick={() => props.toggleComplete(id)}
            className="check"
            icon={faCheckCircle}
            size="lg"
          />
        )}

        {complete ? (
          <FontAwesomeIcon
            className="delete"
            icon={faTimesCircle}
            size="lg"
            onClick={() => props.onDelete(id)}
          />
        ) : null}
      </div>
    </Main>
  );
};

export default Task;
