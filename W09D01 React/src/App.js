import React from 'react';
import Task from './components/Task';
import Header from './components/Header';

import './App.css';

// import { a, b, c } from './components/Multi';
// console.log(c);

const App = () => {
  const str = 'Hello';
  const tasks = ['eat', 'sleep', 'coding'];
  const parTasks = tasks.map((elem, i) => {
    // return <p key={i}> {elem} </p>
    return <Task key={i} taskTitle={elem} order={i} />;
  });

  const name = 'moh';
  const age = 25;

  const handleClickMe = () => {
    console.log('clicked !!!');
  };
  const handleChange = (e) => {
    console.log(' !!!');
    console.log(e.target.value);
    // input.value
  };

  return (
    <>
      <div className="App">
        {/* props */}
        <Header myName={name} myAge={age} a={7} />

        <button onClick={handleClickMe}>click me</button>
        <input onChange={handleChange} />
        <input onChange={handleChange} />

        <h3>Tasks:</h3>
        {parTasks}
        {/* {str} */}
        {/* {tasks} */}
      </div>
    </>
  );
};

export default App;
