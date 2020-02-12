import React from 'react';
import { Switch, Route, NavLink } from 'react-router-dom';

import './App.css';
import Home from './Home';
import TaskList from './TaskList';
import TodoForm from './TodoForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      tasks: []
    };

    this.addNewTask = this.addNewTask.bind(this);
    this.handleTaskToggle = this.handleTaskToggle.bind(this);
    this.handleTaskDelete = this.handleTaskDelete.bind(this);
  }

  addNewTask(taskName) {
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          name: taskName,
          complete: false
        }
      ]
    });
  }

  handleTaskToggle(indexOfTaskToToggle) {
    const newTasks = this.state.tasks.map((task, currentIndex) => {
      if (currentIndex === indexOfTaskToToggle) {
        return {
          ...task,
          complete: !task.complete
        };
      }
      return task;
    });
    this.setState({ tasks: newTasks });
  }

  handleTaskDelete(indexOfTaskToDelete) {
    const newTasks = this.state.tasks.filter((task, currentIndex) => {
      if (currentIndex === indexOfTaskToDelete) {
        return false;
      }
      return true;
    });
    this.setState({ tasks: newTasks });
  }

  render() {
    return (
      <div className="App">
        <TodoForm onNewTask={this.addNewTask} />
        <div className="App__links">
          <NavLink exact className="App__link" to="/">
            Home
          </NavLink>
          <NavLink className="App__link" to="/incomplete">
            To-dos
          </NavLink>
          <NavLink className="App__link" to="/complete">
            To-dones
          </NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/incomplete">
            <TaskList
              name="To-dos"
              tasks={this.state.tasks}
              display="incomplete"
              toggleCompleteStatus={this.handleTaskToggle}
              deleteTask={this.handleTaskDelete}
            />
          </Route>
          <Route path="/complete">
            <TaskList
              name="To-dones"
              tasks={this.state.tasks}
              display="complete"
              toggleCompleteStatus={this.handleTaskToggle}
              deleteTask={this.handleTaskDelete}
            />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
