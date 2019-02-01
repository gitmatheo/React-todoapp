import React from "react";
import Task from "./Task";

const ListOfTasks = props => {
  return (
    <>
      {props.tasks.map(task => (
        <Task
          task={task}
          key={task.id}
          toggleComplete={props.toggleComplete}
          onDelete={props.onDelete}
        />
      ))}
    </>
  );
};

export default ListOfTasks;
