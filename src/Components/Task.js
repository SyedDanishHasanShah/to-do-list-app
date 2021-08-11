import React, { useEffect, useState } from 'react';

const Task = ({ description, setTaskList, tasks, id, setTaskToBeEdited, setNewDescription }) => {
    const [isStrikeThrough, setStrikeThrough] = useState(false);

    const removeTask = (id) => {
        return setTaskList(tasks.filter(task => task.id !== id))
    };

    useEffect(() => {
        const modal = document.querySelector('.modal');
        const overlay = document.querySelector('.overlay');
        const editButtons = Array.from(document.querySelectorAll('.button__edit'));
        
        function showModal() {
            modal.classList.remove('hidden');
            overlay.classList.remove('hidden');
        }

        editButtons.forEach(editButton => editButton.addEventListener('click', showModal));
    }, []);
    
    const showTaskEditor = (event) => {
        event = event || window.event;
        let src = event.target || event.srcElement;
        const paragraph = src.closest('.task').firstChild.innerHTML;
        tasks.forEach(task => {
            if (task.description === paragraph) {
                setTaskToBeEdited(task);
                setNewDescription(task.description);
            }
        })
        const modal = document.querySelector('.modal');
        const overlay = document.querySelector('.overlay');
        const editButtons = Array.from(document.querySelectorAll('.button__edit'));
        
        function showModal() {
            modal.classList.remove('hidden');
            overlay.classList.remove('hidden');
        }

        editButtons.forEach(editButton => editButton.addEventListener('click', showModal));
    }


    return (
        <>
            <div className="task">
                {isStrikeThrough ? <p className="task__description strikethrough">{description}</p> : <p className="task__description">{description}</p>}
                <div className="task__buttons">
                    <button className="button task__button button__done" onClick={() => setStrikeThrough(!isStrikeThrough)}>✅️</button>
                    <button className="button task__button button__delete" onClick={() => removeTask(id)}>❌️</button>
                    <button className="button task__button button__edit" onClick={(event) => showTaskEditor(event)}>✏️</button>
                </div>
            </div>
        </>
    );
};

export default Task;