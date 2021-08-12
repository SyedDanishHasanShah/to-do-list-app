import React, { useState } from 'react';

import TaskAdderAndEditor from './components/TaskAdderAndEditor';

import './App.css';

const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState('');
  const [taskToBeEdited, setTaskToBeEdited] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  
  return (
    <>
      <h1 className="heading heading--main">To Do App</h1>
      <TaskAdderAndEditor 
        taskList={taskList} 
        setTaskList={setTaskList} 
        taskDescription={task} 
        setTask={setTask} 
        taskToBeEdited={taskToBeEdited} 
        setTaskToBeEdited={setTaskToBeEdited} 
        isEdit={isEdit}
        setIsEdit={setIsEdit}
      />
    </>
  );
}

export default App;
