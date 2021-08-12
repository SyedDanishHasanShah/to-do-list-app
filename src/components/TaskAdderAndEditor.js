import React from 'react';

import TaskList from './TaskList';

const TaskAdderAndEditor = ({ 
  taskList, 
  setTaskList, 
  taskDescription, 
  setTask, 
  taskToBeEdited, 
  setTaskToBeEdited, 
  isEdit,
  setIsEdit
 }) => {

  const handleTaskDescription = (event) => {
    setTask(event.target.value);
  };

  const handleSubmission = (event) => {
    event.preventDefault();
    if (isEdit) {
      setTaskList(taskList.map(task => {
        if (task.id === taskToBeEdited.id) {
          task.description = taskDescription;
        }
        return task;
      }));
      setIsEdit(false);
    }
    else {
      if (taskDescription) {
        const newTask = {description: taskDescription, id: new Date().getTime().toString()}
        setTaskList([...taskList, newTask]);
      }
    }
    setTask('');
  };

  return (
    <>
      <form onSubmit={handleSubmission}>
        <div className="input-container">
          <label htmlFor="task_add">Enter Task</label>
          <input type="text" id="task_add" value={taskDescription} onChange={handleTaskDescription}></input>
        </div>
        <button type="submit" className="button button__add">{isEdit ? "Edit Task" : "Add Task"}</button>
      </form>
      {taskList ? <TaskList 
        tasks={taskList} 
        setTaskList={setTaskList} 
        setTaskToBeEdited={setTaskToBeEdited} 
        setIsEdit={setIsEdit}
        setTask={setTask}
      /> : null}
    </>
  );
};

export default TaskAdderAndEditor;