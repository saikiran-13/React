import './App.css';
import { useMemo, useState } from 'react';

export function Memohook(){
    const [num,setNum] = useState(0)

    const expensiveCalc = (number) =>{
        for(let i=0;i<1000000;i++){}
        console.log(number)
        return number
    }

    const output = useMemo(()=>{
        expensiveCalc(num)
    },[num])

    
    return(<>
    <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>{num}</h1>
        <button className="btn" onClick={()=>setNum(num+1)} ><b>Increment</b> </button><br />
        <button className="btn" onClick={()=>setNum(num-1)}><b>Decrement</b></button>
      </div>
    </>)
}