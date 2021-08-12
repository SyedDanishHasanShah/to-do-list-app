import React, { useState } from 'react';

const Task = ({ 
  description, 
  setTaskList, 
  tasks, 
  id, 
  setTaskToBeEdited, 
  setIsEdit,
  setTask 
 }) => {
  const [isDone, setIsDone] = useState(false);

  const removeTask = (id) => {
    setTaskList(tasks.filter(task => task.id !== id))
  };

  const handleEditButton = () => {
    setIsEdit(true);
    const taskToBeEdited = tasks.find(task => {
      if (task.id === id) {
        return task;
      }
      return null;
    })
    setTask(taskToBeEdited.description);
    setTaskToBeEdited(taskToBeEdited);
  };

  return (
    <>
      <div className="task">
        <p className="task__description">{isDone ? <strike>{description}</strike> : description}</p>
        <div className="task__buttons">
          <button className="button task__button button__done" onClick={() => setIsDone(!isDone)}>Done</button>
          <button className="button task__button button__delete" onClick={() => removeTask(id)}>Delete</button>
          <button className="button task__button button__edit" onClick={handleEditButton}>Edit</button>
        </div>
      </div>
    </>
  );
};

export default Task;