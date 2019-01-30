import React from "react";

const NumberOfTasksToDo = props => {
  return (
    <div>
      Number of tasks todo: {props.tasks.filter(task => !task.complete).length}
    </div>
  );
};

export default NumberOfTasksToDo;
