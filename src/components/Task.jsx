import React from 'react'
import { CgClose } from 'react-icons/cg';
import './Task.css'


const Task = ({task, handleTaskClick, handleTaskDelete}) => {
    return ( 

        <div className="task-container" 
            style={task.completed ? { border: "2px solid  chartreuse" } : {}}
        >
            <div className="task-title" 
                onClick={() => handleTaskClick(task.id)}
            >
                {task.title}
            </div>
            <div className="buttons-container">
                <button className="remove-task-button" 
                    onClick={() => handleTaskDelete(task.id)}
                >
                    <CgClose />
                </button>
            </div>
        </div>
    );
};
// <div className="task-container">
//     {task.title}
// </div>

export default Task;