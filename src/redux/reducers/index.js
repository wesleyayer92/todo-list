const initialState = {
  tasks: [
    {
      name: 'Test Redux Task',
      completed: false,
    }
  ],
}

function todoReducer(state = initialState, action) {

  return state;
}

export default todoReducer;