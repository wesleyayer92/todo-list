import React, { Component } from 'react';
import Task from './Task';

export default class TaskList extends Component {
  render() {
    return (
      <div className="TaskList">
        <h2 className="TaskList__title">{this.props.name}</h2>
        {this.props.tasks.map((task, i) => {
          if (
            (this.props.display === 'complete' && task.complete) ||
            (this.props.display === 'incomplete' && !task.complete)
          ) {
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
