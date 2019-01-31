import React from "react";
import styled from "styled-components";
import {
  faCheckCircle,
  faMinusCircle,
  faTimesCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Transition } from "react-transition-group";

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
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid violet;
      border-radius: 50px;
      width: 32px;
      height: 32px;
      cursor: pointer;

      * {
        border-radius: 50px;
        color: violet;
        background: white;
        transition: 0.3s;
        &:hover {
          color: white;
          background: violet;
        }
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
  }
`;

const List = props => {
  return (
    <Transition timeout={1000} in={true} appear>
      <Main>
        <div
          className="todo"
          style={{
            textDecoration: props.complete ? "line-through" : ""
          }}
        >
          <p>{props.task}</p>
        </div>
        <div className="buttons">
          <div className="check" onClick={props.toggleComplete}>
            {props.complete ? (
              <FontAwesomeIcon icon={faMinusCircle} size="lg" />
            ) : (
              <FontAwesomeIcon icon={faCheckCircle} size="lg" />
            )}
          </div>
          <div className="delete">
            {props.complete ? (
              <FontAwesomeIcon
                icon={faTimesCircle}
                size="lg"
                onClick={props.onDelete}
              />
            ) : null}
          </div>
        </div>
      </Main>
    </Transition>
  );
};

export default List;
