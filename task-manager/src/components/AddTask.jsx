import React, { useState  } from 'react'
import './AddTask.css'
import Button from './Button'




const AddTask = (handleTaskAdd) => {
    const[inputData, setInputData] = useState('')
    const handleInputChange = (e) => {
        setInputData(e.target.value);
    };

    const handleAddTaskClick = () => {
        handleTaskAdd(inputData);
    }
    return ( 
    <div className="add-task-container">
        <input 
        onChange={handleInputChange}
        value={inputData}
        className="add-task-input" 
        type="text" />
        <div className="Add-task-button-container">
        <Button onClick={handleAddTaskClick}>Adicionar</Button>
        </div>
    </div>
    );
}

export default AddTask;