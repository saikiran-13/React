import './App.css';
import { useState } from 'react';
import { useContext } from 'react';
import { Appcontext } from './App';
import { Name } from './Avengers';



export function Taskscheduler() {
    // chartreuse
    const [newTask, setnewTask] = useState("")
    const [taskList, setTaskList] = useState([])
    const [editTask,setEditTask] = useState(null)
 
    const {name} = useContext(Appcontext)

    const eventChange = (event,taskName="") => {
        setnewTask(taskName || event.target.value)
    }

    const addTasks = () => {
            const task = {
                id:editTask?editTask.id:(taskList.length===0?1:taskList[taskList.length - 1].id+1),
                taskName:newTask,
                taskDone:"white"
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
    }
    
   
        const doneTasks = (task) =>{
            const updatedTask = {...task, taskDone: task.taskDone === "white"?"chartreuse":"white"};
            const updatedTaskList = taskList.map((t) => (t.id === task.id ? updatedTask : t));
            setTaskList(updatedTaskList);
        }
        

    return (<div className='TaskSchdeuler'>
        <div className='Tasklist'>
            {/* <Name/> */}
            <h1>{name}</h1>
            <input type='text' className = "textbox-clicked" onChange={eventChange} value = {newTask}/>
            <button className = "btn" onClick={addTasks}>Add Task</button>
            <ul>{taskList.map((task) => {
                return <li key = {task} style={{listStyle:'none'}}><div className='task btn' style = {{backgroundColor:task.taskDone}}>
                    <h3>{task.id}</h3>
                    <input type="checkbox" onClick={()=>doneTasks(task)}></input>
                    <h3 className="space">{task.taskName}</h3>
                    <button className = "btn" onClick={()=>editTasks(task)}><b>Edit</b></button>
                    <button className = "btn" onClick={()=>deleteTasks(task)}><b>Delete</b></button></div></li>
            })}</ul>


        </div>

    </div>

    )
}