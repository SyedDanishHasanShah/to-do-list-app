import React, { useContext } from 'react';

import TaskList from './TaskList';

import { withWrapperContext, WrapperContext } from '../contexts/WrapperContext';
import { withTaskAdderAndEditorContext, TaskAdderAndEditorContext } from '../contexts/TaskAdderAndEditorContext';

import Form from '../utils/styled-components/Form';
import InputContainer from '../utils/styled-components/InputContainer';
import Label from '../utils/styled-components/Label';
import Input from '../utils/styled-components/Input';
import Button from '../utils/styled-components/Button';

const TaskAdderAndEditor = () => {
  const { taskList, setTaskList, isEdit, setIsEdit } = useContext(WrapperContext);
  const { taskDescription, setTaskDescription } = useContext(TaskAdderAndEditorContext);

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
          <Label htmlFor="taskAdd">Enter Task</Label>
          <Input type="text" id="taskAdd" value={taskDescription} onChange={handleTaskDescription}></Input>
        </InputContainer>
        <Button type="submit" addButton>{isEdit ? "Edit Task" : "Add Task"}</Button>
      </Form>
        {taskList ? <TaskList /> : null}
    </>
  );
};

export default withWrapperContext(withTaskAdderAndEditorContext(TaskAdderAndEditor));