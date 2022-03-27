import React, {useEffect, useState} from 'react';
import { Checkbox } from '@mui/material';

const CreateTask = ({save}) => {
    const [description, setDescription] = useState('');
    const [status,setStatus] = useState('')

    const handleChange = (e) => {
        const {value} = e.target
        setDescription(value)
    }

    const handleSave = () => {
        save(description)
    }
    const handleEnter = e => {
        if(e.key === "Enter"){
            save(description)
        }
    }

    return (
        <div className='card first'>
            <span className="status" onClick={handleSave}/>
            <input className='newtask' placeholder='Type Somthing...' type="text" id="name"
             name="name" required minlength="5" maxlength="50" size="40"
             value={description} onChange={handleChange}
             onKeyDown={handleEnter}></input>
        </div>
    );
};

export default CreateTask;