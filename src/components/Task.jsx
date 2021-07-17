import React from 'react'
import { CgClose, CgInfo } from 'react-icons/cg';
import { useHistory } from 'react-router-dom';

import './Task.css'


const Task = ({task, handleTaskClick, handleTaskDelete}) => {
    const history = useHistory();
    const handleTaskDetailsClick = () => {
        history.push(`/${task.title}`)
    }
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
                    <button className="taskInfo-button" onClick={handleTaskDetailsClick}>
                        <CgInfo />
                    </button>
            </div>
        </div>
    );
};


export default Task;