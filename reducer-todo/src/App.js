import React, { useReducer } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { reducer, initialState } from "./reducers/reducer";
import styled from "styled-components";

const AppDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 1% auto;
`;

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppDiv className="App">
      <h1>Task App!</h1>
      <TodoForm dispatch={dispatch} />
      <TodoList state={state} dispatch={dispatch} />
    </AppDiv>
  );
}

export default App;
