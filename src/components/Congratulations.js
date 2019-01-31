import React from "react";

const h1Style = {
  margin: "0 auto",
  textAlign: "center"
};

const Congratulations = props => {
  return (
    <h3 style={h1Style}>
      {props.tasks.filter(task => !task.complete).length === 0
        ? "You have no more tasks to do."
        : null}
    </h3>
  );
};

export default Congratulations;
