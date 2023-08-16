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
    function submitDetails(){
        let color = (Input.length===0)?'red':'green'
        focusState.current.style.border = `${Input.length+2}px solid ${color}`//just like document.getElementById(focusfield)
        console.log(document.getElementById('focusfield'))
    }
    useEffect(() => {
        count.current = count.current + 1
    })
    useEffect(()=>{
        prevstate.current = Input
    },[Input])

    return(<>
        <input ref={focusState}type='text'  onChange={changeInput} id="focusfield"></input>
        <button onClick={submitDetails}>Submit</button>
        <h1>{count.current}</h1>
        <h1>CurrentState:{Input}</h1>
        <h1>Previous state:{prevstate.current}</h1>

        </>)
}