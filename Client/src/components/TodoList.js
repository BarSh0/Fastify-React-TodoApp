import { Sort } from '@mui/icons-material';
import React, {useEffect, useState} from 'react';
import CreateTask from '../functions/CreateTask';
import Card from './Card';
import Sorter from './Sorter';

export const TodoList = () => {
    const [taskList, setTaskList] = useState([])

    useEffect( async () => {
        fetch("http://127.0.0.1:5000/tasks",{
            method: "GET",
        }).then((response) => response.json())
        .then((data) => setTaskList(data));
      }, [])

    const deleteTask = (index) => {
        console.log(index)
        fetch("http://127.0.0.1:5000/tasks/"+index,{
            method: "DELETE",
        }).then((response) => response.json())
        .then((data) => setTaskList(data));
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = taskList
        tempList[index] = obj
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }

    const saveTask = (taskObj) => {
        console.log(taskObj)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description: taskObj })
    };
    fetch('http://127.0.0.1:5000/tasks', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data.id));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
        window.location.reload()
    }

    return (
        <div className='container'>
            <CreateTask save = {saveTask}/>
            {taskList && taskList.map((obj,index)=>
            <Card taskObj = {obj} index = {index} deleteTask = {deleteTask}
                updateListArray = {updateListArray}/> )}
            <Sorter taskList={taskList}/>
            <p>Drag and drop to record list</p>
        </div>
    );
};

export default TodoList;