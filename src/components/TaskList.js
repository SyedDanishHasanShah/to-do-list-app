import React from 'react';

import Task from './Task';

const TaskList = ({ 
  tasks, 
  setTaskList, 
  setTaskToBeEdited, 
  setIsEdit,
  setTask
}) => {
  return (
    <div className="tasks-container">
      {tasks ? tasks.map(task => <Task 
        description={task.description} 
        key={task.id} 
        tasks={tasks} 
        setTaskList={setTaskList} 
        id={task.id} 
        setTaskToBeEdited={setTaskToBeEdited} 
        setIsEdit={setIsEdit}
        setTask={setTask}
      />): null}
    </div>
  );
}

export default TaskList;