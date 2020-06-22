import React, { Component } from 'react';
import Task from './Task';

import { connect } from 'react-redux';

class TaskList extends Component {
  render() {
    return (
      <div>
        <h2 className="TaskList__title">Incomplete Tasks</h2>
        {this.props.tasks.map((task, i) => {
          if (!task.complete) {
            return (
              <Task
                task={task}
                key={i}
                toggleCompleteStatus={() => {
                  this.props.toggleCompleteStatus(i);
                }}
                deleteTask={() => {
                  this.props.deleteTask(i);
                }}
              />
            );
          }
          return '';
        })}
        <h2 className="TaskList__title">Complete Tasks</h2>
        {this.props.tasks.map((task, i) => {
          if (task.complete) {
            return (
              <Task
                task={task}
                key={i}
                toggleCompleteStatus={() => {
                  this.props.toggleCompleteStatus(i);
                }}
                deleteTask={() => {
                  this.props.deleteTask(i);
                }}
              />
            );
          }
          return '';
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks
  }
}

export default connect(
  mapStateToProps,
  null
)(TaskList)
