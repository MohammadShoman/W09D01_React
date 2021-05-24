import React from 'react';

const Task = (props) => {
  return (
    <>
      <div className="Task">
        <input type="checkbox" name="" id="" />
        <span> {props.order}- </span>
        <span>{props.taskTitle}</span>
        <button>X</button>
      </div>
    </>
  );
};

export default Task;
