import React from "react";
import styled from "styled-components";

const Div = styled.div`
  text-align: center;
  padding: 10px;
`;
const NumberOfTasksToDo = props => {
  return (
    <Div className="number-of-tasks">
      Number of tasks todo:&nbsp;
      <strong>{props.tasks.filter(task => !task.complete).length}</strong>
    </Div>
  );
};

export default NumberOfTasksToDo;
