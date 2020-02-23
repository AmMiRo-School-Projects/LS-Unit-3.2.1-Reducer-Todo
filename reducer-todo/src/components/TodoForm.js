import React, { useState } from "react";

const TodoForm = props => {
  const [newTodoText, setNewTodoText] = useState("");
  console.log(newTodoText);

  const handleChanges = e => {
    setNewTodoText(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.dispatch({ type: "ADD_NEW_TASK", payload: newTodoText });
    setNewTodoText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        required
        type="text"
        autoComplete="off"
        value={newTodoText}
        onChange={handleChanges}
        placeholder="Add new task"
      />
      <button onClick={handleSubmit}>Add Task</button>
    </form>
  );
};

export default TodoForm;
