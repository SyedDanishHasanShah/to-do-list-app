import React from 'react';

import TaskList from './TaskList';

const TaskAdder = ({ taskList, setTaskList, task, setTask, taskToBeEdited, setTaskToBeEdited, newDescription, setNewDescription }) => {
    
    const handleTask = (event) => {
        const newTask = event.target.value;
        setTask(newTask);
    };

    const handleSubmission = (event) => {
        event.preventDefault();
        if (task) {
            const newTask = {description: task, id: new Date().getTime().toString()}
            setTaskList([...taskList, newTask]);
            setTask('');
        }
    };

    return (
        <>
            <form>
                <div className="input-container">
                    <label htmlFor="task_add">Enter Task</label>
                    <input type="text" id="task_add" name="task_add" value={task} onChange={handleTask}></input>
                </div>
                <button type="submit" className="button button--add" onClick={handleSubmission}>Add Task</button>
            </form>
            {taskList ? <TaskList tasks={taskList} setTaskList={setTaskList} taskToBeEited={taskToBeEdited} setTaskToBeEdited={setTaskToBeEdited} newDescription={newDescription} setNewDescription={setNewDescription}/> : null}
        </>
    );
};

export default TaskAdder;