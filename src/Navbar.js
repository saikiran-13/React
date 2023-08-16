import { Link } from "react-router-dom"
import './App.css';
export const Navbar = () =>{
    return (
        <div>
            <Link  className='btn btn-pro' to="/learn">Learnings</Link>
            <Link  className='btn btn-pro' to="/tasks">Taskscheduler</Link>
            <Link  className='btn btn-pro' to="/pets">Pet Finder</Link>
            <Link  className='btn btn-pro' to="/avengers">Avengers</Link>
            <Link  className='btn btn-pro' to="/avengers/cat">Cat</Link>
            <Link  className='btn btn-pro' to="/reactquery">ReactQuery</Link>
            <Link  className='btn btn-pro' to="/forms">Form</Link>
            <Link  className='btn btn-pro' to="/refhook">RefHOOk</Link>
            <Link  className='btn btn-pro' to="/reducerhook">ReducerHOOk</Link>
            <Link  className='btn btn-pro' to="/memohook">MemoHOOk</Link>
            <Link  className='btn btn-pro' to="/callbackhook">CallbackHOOk</Link>
        </div>
    )
}