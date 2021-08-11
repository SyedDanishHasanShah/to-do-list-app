
import React from 'react';

import Task from './Task';

const TaskList = ({ tasks, setTaskList, taskToBeEdited, setTaskToBeEdited, newDescription, setNewDescription }) => {
    return (
        <div className="tasks-container">
            {tasks.map(task => <Task description={task.description} key={task.id} tasks={tasks} setTaskList={setTaskList} id={task.id} taskToBeEdited={taskToBeEdited} setTaskToBeEdited={setTaskToBeEdited} newDescription={newDescription} setNewDescription={setNewDescription}/>)}
        </div>
    );
}

export default TaskList;