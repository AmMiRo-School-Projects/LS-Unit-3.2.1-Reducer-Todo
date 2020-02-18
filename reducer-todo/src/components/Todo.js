import React from "react";

const Todo = props => {
  return (
    <div
      onClick={() =>
        props.dispatch({ type: "TOGGLE_COMPLETED", payload: props.task.id })
      }
      className={`task${props.task.completed ? " completed" : ""}`}
    >
      <p>{props.task.item}</p>
    </div>
  );
};

export default Todo;
