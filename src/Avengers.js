export function Avengers(props){
    return (
        <div>
           <h3 style = {{color:'dodgerblue'}}>{props.rank} || {props.name} || {props.role}</h3> 
        </div>
    )
}