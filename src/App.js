import './App.css';
import { useState } from 'react';
import { Learnings } from './Learnings'
import {Taskscheduler} from './Taskscheduler'
import { Quotes } from './Axios';


export default function App() {
  const [islearn,setLearn] = useState(false)
  const  [istask,setTask] = useState(false)
  const [isquote,setQuote] = useState(false)
  return (
    <div>
      <center>
    <button className='btn btn-pro' onClick={()=>(setTask(!istask))}><b>Task scheduler</b></button>{istask && <Taskscheduler/>}
    <button className='btn btn-pro' onClick={()=>(setLearn(!islearn))}><b>Learnings</b></button>{islearn && <Learnings/>}
    <button className='btn btn-pro' onClick={()=>(setQuote(!isquote))}><b>Pet Zone</b></button>{isquote&& <Quotes/>}
      </center>

    </div>

  );
}


