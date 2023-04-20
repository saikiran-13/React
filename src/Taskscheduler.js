import './App.css';
import { useState } from 'react';

export function Taskscheduler() {
    const [newTask, setnewTask] = useState("")
    const [taskList, setTaskList] = useState([])
    const [editTask,setEditTask] = useState(null)

    const eventChange = (event,taskName="") => {
        setnewTask(taskName || event.target.value)
      
    }

    const addTasks = () => {
            const task = {
                id:editTask?editTask.id:(taskList.length===0?1:taskList[taskList.length - 1].id+1),
                taskName:newTask
            }
            const newTaskList = editTask?taskList.map((t)=>(t.id===editTask.id)?task:t):[...taskList,task]
            setTaskList(newTaskList)
            setnewTask("")
            setEditTask(null)
    
    }

    const deleteTasks = (task) =>{
        setTaskList(taskList.filter((Task)=> task.id!==Task.id))
    }


    const editTasks = (task) =>{
        setEditTask(task)
        eventChange(null,task.taskName)
        setnewTask(task.taskName)
       
        // setTaskList(taskList.filter((Task)=> task.id!==Task.id?task:(task = {id:task.id,taskName:newTask})))
    }

    return (<div className='TaskSchdeuler'>
        <div className='Tasklist'>
            <input type='text' onChange={eventChange} value = {newTask}/>
            <button onClick={addTasks}>Add Task</button>
            <ul>{taskList.map((task) => {
                return <li key = {task} style={{listStyle:'none'}}><div className='task btn'>
                    <h3>{task.id}</h3>
                    <h3 className="space">{task.taskName}</h3>
                    <button onClick={()=>editTasks(task)}>Edit</button>
                    <button onClick={()=>deleteTasks(task)}>Delete</button></div></li>
            })}</ul>


        </div>

    </div>

    )
}