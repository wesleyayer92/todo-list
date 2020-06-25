const initialState = {
  tasks: [
    {
      name: 'Test Redux Task',
      complete: false,
    }
  ],
}

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            name: action.content,
            completed: false,
          }
        ]
      }
    
    case 'TOGGLE_TODO':
      console.log(action);
      // find task to update
      const newTask = {...state.tasks[action.index]};
      // flip completed status of task
      newTask.complete = !newTask.complete;

      // insert new task into array at position of original
      const newTasks = state.tasks.map((task, index) => {
        if (index === action.index) {
          return newTask
        }
        return task;
      });
      console.log(newTasks);

      // return a new state object with the updated details
      return {
        ...state,
        tasks: newTasks,
      }

    case 'DELETE_TODO':
      const remainingTasks = state.tasks.filter((task, index) => {
        if (index !== action.index) {
          return true
        }
        return false;
      });
      return {
        ...state,
        tasks: remainingTasks
      }
  
    default:
      return state;
  }
}

export default todoReducer;