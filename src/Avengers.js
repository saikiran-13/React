import { useContext,useState } from "react"
import { Appcontext } from "./App"

export function Avengers(props){
    

   
    return (
        <div>
           <h3 style = {{color:'dodgerblue'}}>{props.rank} || {props.name} || {props.role}</h3> 
        </div>
    )
}

export function Name(){
    const {setName} = useContext(Appcontext)
    const [newName,setnewName] = useState("")
    function nameChange(event){
        setnewName(event.target.value)
    }

    return (
        <div>
            <input className = "textbox-clicked"onChange = {(event)=>nameChange(event)}></input>
           <button className = "btn" style={{marginTop:30}} onClick={()=>{setName(newName)}}>Change Name</button>
           <h1>{newName}</h1>
        </div>
    )
}