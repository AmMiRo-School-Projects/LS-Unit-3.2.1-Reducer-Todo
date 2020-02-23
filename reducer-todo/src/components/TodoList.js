import React from "react";
import Todo from "./Todo";
import styled from "styled-components";

const ListDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 1% auto;
`;

const TodoList = props => {
  return (
    <ListDiv>
      <ListDiv>
        {props.state.tasks.map(task => (
          <Todo key={task.id} task={task} dispatch={props.dispatch} />
        ))}
      </ListDiv>
      <button
        onClick={() => {
          props.dispatch({ type: "FILTER_COMPLETED" });
        }}
      >
        Clear Completed Tasks
      </button>
    </ListDiv>
  );
};

export default TodoList;
