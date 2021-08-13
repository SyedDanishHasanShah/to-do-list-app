import React, { useState, useContext } from 'react';

import TaskList from './TaskList';

import WrapperContext from '../contexts/WrapperContext';
import TaskAdderAndEditorContext from '../contexts/TaskAdderAndEditorContext';

import Form from '../utils/styled-components/Form';
import InputContainer from '../utils/styled-components/InputContainer';
import Label from '../utils/styled-components/Label';
import Input from '../utils/styled-components/Input';
import Button from '../utils/styled-components/Button';

const TaskAdderAndEditor = () => {
  const { taskList, setTaskList, isEdit, setIsEdit } = useContext(WrapperContext);
  const [taskDescription, setTaskDescription] = useState('');
  const handleTaskDescription = (event) => {
    setTaskDescription(event.target.value);
  };

  const handleSubmission = (event) => {
    event.preventDefault();
    if (isEdit) {
      setTaskList(taskList.map(task => {
        if (task.isEditable) {
          task.description = taskDescription;
          task.isEditable = false;
        }
        return task;
      }));
      setIsEdit(false);
    }
    else {
      if (taskDescription) {
        const newTask = {description: taskDescription, id: new Date().getTime().toString(), isEditable: false}
        setTaskList([...taskList, newTask]);
      }
    }
    setTaskDescription('');
  };

  return (
    <>
      <Form onSubmit={handleSubmission}>
        <InputContainer>
          <Label htmlFor="task_add">Enter Task</Label>
          <Input type="text" id="task_add" value={taskDescription} onChange={handleTaskDescription}></Input>
        </InputContainer>
        <Button type="submit" button button__add>{isEdit ? "Edit Task" : "Add Task"}</Button>
      </Form>
      <TaskAdderAndEditorContext.Provider value={{
        setTaskDescription
      }}>
        {taskList ? <TaskList /> : null}
      </TaskAdderAndEditorContext.Provider>
    </>
  );
};

export default TaskAdderAndEditor;