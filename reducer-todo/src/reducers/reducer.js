export const initialState = {
  tasks: [
    {
      item: "Learn about reducers",
      completed: false,
      id: 0
    }
  ]
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_COMPLETED":
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === action.payload) {
            return { ...task, completed: !task.completed };
          } else {
            return task;
          }
        })
      };
    case "FILTER_COMPLETED":
      return {
        ...state,
        tasks: state.tasks.filter(task => task.completed === false)
      };
    case "ADD_NEW_TASK":
      return {
        ...state,
        tasks: [
          ...state.tasks,
          { item: action.payload, completed: false, id: Date.now() }
        ]
      };
    default:
      return state;
  }
};
