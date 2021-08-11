import React, { useState, useEffect } from 'react';

const TaskEditor = ({ setTaskList, tasks, taskToBeEdited, newDescription, setNewDescription }) => {
    // const [newDescription, setNewDescription] = useState(taskToBeEdited.description);
    
    useEffect(() => {
        const modal = document.querySelector('.modal');
        const overlay = document.querySelector('.overlay');
        const modalClose = document.querySelector('.modal__close');
        const buttonEditor = document.querySelector('.button--editor');
        
        function closeModal() {
            modal.classList.add('hidden');
            overlay.classList.add('hidden');
        };
        modalClose.addEventListener('click', closeModal);
        overlay.addEventListener('click', closeModal);
        buttonEditor.addEventListener('click', closeModal);
        

        // return () => {
        //     editButton.removeEventListener('click', showModal);
        //     modalClose.removeEventListener('click', closeModal);
        //     overlay.removeEventListener('click', closeModal);
        //     buttonEditor.removeEventListener('click', closeModal);
        // };
    }, []);

    const handleEdit = (event) => {
        setNewDescription(event.target.value);
    }

    const editDescription = (event) => {
        event.preventDefault();
        
        // const newTasks = tasks.map(task => {
        //     if (task.id === taskToBeEdited.id) {
        //         task.description = newDescription;
        //     }
        //     return task;
        // });
        setTaskList(tasks.map(task => {
            if (task.id === taskToBeEdited.id) {
                task.description = newDescription;
            }
            return task;
        }));
    }
    return (
        <>
            <div className="modal hidden">
                <button className="modal__close">&times;</button>
                <form className="editor">
                    <div className="input-container">
                        <label htmlFor="edit-task">Edit</label>
                        <input type="text" name="edit-task" id="edit-task" defaultValue={newDescription} onChange={handleEdit}></input>
                        <button className="button submit-button button--add button--editor" type="submit" onClick={editDescription}>Edit Task</button>
                    </div>
                </form>
            </div>
            <div className="overlay hidden"></div>
        </>
    );
};

export default TaskEditor;