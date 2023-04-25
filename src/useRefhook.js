import './App.css';
import { useEffect, useRef, useState } from 'react';


export function  Counter() {
    const [Input, setInput] = useState("f")
    const count = useRef(0)
    const prevstate = useRef("")
    const focusState = useRef()
    function changeInput(e){
        setInput(e.target.value)
    }
    useEffect(() => {
        count.current = count.current + 1
    })
    useEffect(()=>{
        prevstate.current = Input
    },[Input])
    return(<>
        <input ref={focusState}type='text'  onClick={changeInput} ></input>
        <h1>{count.current}</h1>
        <h1>CurrentState:{Input}</h1>
        <h1>Previous state:{prevstate.current}</h1>

        </>)
}