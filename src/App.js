import React, { useState } from 'react';

import TaskAdder from './Components/TaskAdder';
import TaskEditor from './Components/TaskEditor';

import './App.css';

function App() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState('');
  const [taskToBeEdited, setTaskToBeEdited] = useState({});
  const [newDescription, setNewDescription] = useState('');
  
  return (
    <>
      <h1 className="heading heading--main">To Do App</h1>
      <TaskAdder taskList={taskList} setTaskList={setTaskList} task={task} setTask={setTask} taskToBeEdited={taskToBeEdited} setTaskToBeEdited={setTaskToBeEdited} newDescription={newDescription} setNewDescription={setNewDescription}/>
      <TaskEditor setTaskList={setTaskList} tasks={taskList} taskToBeEdited={taskToBeEdited} newDescription={newDescription} setNewDescription={setNewDescription}/>
    </>
  );
}

export default App;
