import React, {useState} from 'react';
import check from "./icon-check.svg"
import { Draggable } from "react-beautiful-dnd";


const Card = ({taskObj, index, deleteTask, updateListArray}) => {
  const [Status, setStatus] = useState(false);
  
  const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(taskObj.id)
    }

    const handleCheck = () => {
        setStatus(!Status);
        taskObj.status = !Status
    }

    return (
        <div className='card'>
            {Status ? <img src= {check} className="checked logo" onClick={handleCheck} /> : <span className="status" onClick={handleCheck} />}
            <p style = {{
                 cursor : "pointer",
                 textDecoration: taskObj.status ? "line-through" : "none",
                 color: taskObj.status ? "grey" : "white" 
                 }} id="desc" className='description' onClick={updateTask}>{taskObj.description}</p>
            <button style = {{ "cursor" : "pointer"}} onClick = {handleDelete}> X </button>
        </div>
    );
};

export default Card;