import React, { useContext } from 'react';

import  { WrapperContext } from '../contexts/WrapperContext';

import Task from './Task';

const TaskList = () => {
  const { taskList } = useContext(WrapperContext);
  return (
    <div>
      {taskList ? taskList.map(task => <Task 
        description={task.description} 
        key={task.id} 
        id={task.id} 
      />): null}
    </div>
  );
}

export default TaskList;