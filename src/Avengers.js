import { useContext,useState } from "react"
import { Appcontext } from "./App"
import { useCatFetch, useId } from "./Customhooks"
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
    const [state1,Increment1] = useId(1)
    function nameChange(event){
        setnewName(event.target.value)
        {Increment1(event.target.value.length-1)}  
    }

    return (
        <div>
            <h1>{state1}</h1>
            <input className = "textbox-clicked"onChange = {(event)=>nameChange(event)}></input>
           <button className = "btn" style={{marginTop:30}} onClick={()=>{setName(newName)}}>Change Name</button>
            <h1>{state1}</h1>
        </div>
    )
}

export function Cat(){
    const {catData,refetchData,isLoading} = useCatFetch()
    if(isLoading) return <h1>Loading...</h1>
    return(<>
    <h1>{catData.fact}</h1>
    <button onClick={refetchData}>Refetch Cat</button>
    </>)
}
