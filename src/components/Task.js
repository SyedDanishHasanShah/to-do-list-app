import React, { useState, useContext } from 'react';

import WrapperContext from '../contexts/WrapperContext';
import TaskAdderAndEditorContext from '../contexts/TaskAdderAndEditorContext';

import TaskStyle from '../utils/styled-components/TaskStyle';
import TaskDescription from '../utils/styled-components/TaskDescription';
import Button from '../utils/styled-components/Button';

const Task = ({ 
  description, 
  id, 
 }) => {
  const { taskList, setTaskList, setIsEdit } = useContext(WrapperContext);
  const { setTaskDescription } = useContext(TaskAdderAndEditorContext);
  const [isDone, setIsDone] = useState(false);

  const removeTask = (id) => {
    setTaskList(taskList.filter(task => task.id !== id))
  };

  const handleEditButton = () => {
    setIsEdit(true);
    const taskToBeEdited = taskList.find(task => {
      if (task.id === id) {
        task.isEditable = true;
        return task;
      }
      return null;
    })
    setTaskDescription(taskToBeEdited.description);
  };

  return (
    <>
      <TaskStyle>
        <TaskDescription>{isDone ? <strike>{description}</strike> : description}</TaskDescription>
        <div>
          <Button task__button button__done onClick={() => setIsDone(!isDone)}>Done</Button>
          <Button task__button button__delete onClick={() => removeTask(id)}>Delete</Button>
          <Button task__button button__edit onClick={handleEditButton}>Edit</Button>
        </div>
      </TaskStyle>
    </>
  );
};

export default Task;