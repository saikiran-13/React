// import logo from './logo.svg';
import { Avengers } from './Avengers';
import image from './react.png';
import './App.css';

const heros = [
  {rank:1,name:"ROBERT DOWNEY JR", role:"IRON MAN"},
  {rank:2,name:"CHRIS EVANS", role:"CAPTAIN AMERICA"},
  {rank:3,name:"CHRIS HEMSWORTH", role:"THOR ODINSON"}
]

//component
function Learn(){
  return (<>
      <h4> ===== React to the magic of React =====</h4>
      <img className='react' src={image} style = {{
      // display:"none"
    }}alt="not found"/>
    </>
  )
}

//props
function Employee(props){
  return(
    <pre style = {{fontSize:20}}><b>Name:{props.name}     Postition:{props.position}      Company:{props.company}     Salary:{props.salary}</b></pre>
  )
}

//conditional rendering
function Ontime(props){
  const time = props.time
    return(
      time === 8?<h4 style={{color:'beige'}}>ONTIME</h4>:(time>8?<h4 style={{color:'green'}}>OVERTIME</h4>:<h4 style={{color:'red'}}>UNDERTIME</h4>)
    )
}

export default function App() {
  

  function click(){
    alert("You have reacted!!!")
    // document.getElementById('demo').innerHTML = "The button was clicked"
  }
  
  return (<div>
  <center>
  <h1>REACT LEARNINGS</h1>
    <Learn/>
    <br/><br/>
    <button onClick={click}>React Now</button><br/>
    <Employee name = "Sai kiran" position = "Trainee" company = "Simform" salary = {0}/>
    <Employee name = "Vedant soni" position = "Senior SDE" company = "Google" salary = {1000000}/>
    <Employee name = "Lakshmi Shreya" position = "Project Coordinator" company = "Amazon" salary = {10000000}/>
    <Employee name = "Vivek kadvani" position = "Team Manager" company = "Tesla" salary = {100000000}/>
    <Ontime time = {10}/>
    <div>{heros.map((avenger)=>{
      return <Avengers rank = {avenger.rank} name = {avenger.name} role = {avenger.role}/>
    })}</div>

  </center>
  </div>
  );
}


