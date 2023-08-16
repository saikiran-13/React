import './App.css';
import { useState, useReducer } from 'react';
import { ThreeDots } from "react-loader-spinner";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//Just like useState hook but to perform complex actions use this 
//It stores the current state and based on the actions provided returns the new state
export function Arithmetic() {
    //Reducer function is used for state managemet and takes 2 parameters state and action 
    const [loading, isLoading] = useState(false)
    const reducer = (state, action) => {
        console.log("state", state)
        console.log("action", action)
        isLoading(false)
        switch (action.type) {
            case ('ADD'):
                toast.success("Addition Perfomed successfully")
                return state + Number(num)

            case ('SUB'):
                toast.success("Subtraction Perfomed successfully")
                return state - Number(num)

            case ('MUL'):
                toast.success("Multiplication Perfomed successfully")
                return state * Number(num)

            case ('DIV'):
                toast.success("Division Perfomed successfully")
                return state / Number(num)
            case ('FAIL'):
                toast.error("Error Occured")
            default:
                return state


        }
    }
    const eventHandler = (event) => {
        setNum(event.target.value)
        isLoading(true)
    }
    const [num, setNum] = useState(0)
    const [state, dispatch] = useReducer(reducer, 0)//Takes 2 parameters one reducer function and intial state
    //If we useState then for every operation u externally need to create a separate function
    return (<>
        <ToastContainer />
        <input className="textbox-clicked" onChange={(event) => { eventHandler(event) }} placeholder='Enter a value'  ></input>
    
        <div>{loading && <div className="loader">
            <ThreeDots />
        </div>}
        </div>
        <h1>Output:{state}</h1>
        <button className="btn" onClick={() => dispatch({ type: 'ADD' })}>Add</button>
        <button className="btn" onClick={() => dispatch({ type: 'SUB' })}>Subtract</button>
        <button className="btn" onClick={() => dispatch({ type: 'MUL' })}>Multiply</button>
        <button className="btn" onClick={() => dispatch({ type: 'DIV' })}>Divide</button>
        <button className="btn" onClick={() => dispatch({ type: 'FAIL' })}>Fail</button>
        
    </>)
}