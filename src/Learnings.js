import { Avengers } from './Avengers';
import image from './react.png';
import './App.css';
import { useState } from 'react';

const heros = [
  { rank: 1, name: "ROBERT DOWNEY JR", role: "IRON MAN" },
  { rank: 2, name: "CHRIS EVANS", role: "CAPTAIN AMERICA" },
  { rank: 3, name: "CHRIS HEMSWORTH", role: "THOR ODINSON" }
]

//component
function Learn() {
  return (<>
    <h4> ===== React to the magic of React =====</h4>
    <img className='react' src={image} style={{
      // display:"none"
    }} alt="not found" />
  </>
  )
}

//props
function Employee(props) {
  return (
    <pre style={{ fontSize: 20 }}><b>Name:{props.name}     Postition:{props.position}      Company:{props.company}     Salary:{props.salary}</b></pre>
  )
}

//conditional rendering
function Ontime(props) {
  const time = props.time
  return (
    time === 8 ? <h4 style={{ color: 'beige' }}>ONTIME</h4> : (time > 8 ? <h4 style={{ color: 'green' }}>OVERTIME</h4> : <h4 style={{ color: 'red' }}>UNDERTIME</h4>)
  )
}

export function Learnings() {

  const [count, setCount] = useState(0)
  const [userData, setUserData] = useState("")
  const [btndata, setBtndata] = useState("Hide Details")
  const [showinfo, setShowInfo] = useState(true) 
  const [color,setColor] = useState('red')
 

  function click() {
    //Though count gets incremented in setCount the value doesn't reflect inside the function 
    setCount(count + 1)
    alert(`You have reacted ${count + 1} times!!!`)
  }

  function unclick() {
    //Though count gets decremented in setCount the value doesn't reflect inside the function 
    setCount(count - 1)
    alert(`You have reacted ${count - 1} times!!!`)
  }


  function setData(event) {
    setUserData(event.target.value)
  }

  const employeeInfo = () => {
    setBtndata(showinfo ? "Show Details" : "Hide Details")
    setColor(showinfo?"chartreuse":"orangered")
    setShowInfo(!showinfo)
  }

  return (<div>
    <center>
      <h1>REACT LEARNINGS</h1>
      <Learn />
      <br /><br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button className="btn" onClick={click} ><b>React Now</b> </button><br />
        <button className="btn" onClick={unclick}><b>Unreact Now</b></button>
      </div>
      <input type="text" onChange={setData} />{userData}<br />
      <button className="btn" style={{ marginTop: 20, backgroundColor: `${color}` }} onClick={employeeInfo}><b>{btndata}</b></button>
      {showinfo && <div >
        <Employee name="Sai kiran" position="Trainee" company="Simform" salary={0} />
        <Employee name="Vedant soni" position="Senior SDE" company="Google" salary={1000000} />
        <Employee name="Lakshmi Shreya" position="Project Coordinator" company="Amazon" salary={10000000} />
        <Employee name="Vivek kadvani" position="Team Manager" company="Tesla" salary={100000000} />
      </div>}
      <Ontime time={10} />
      <div>{heros.map((avenger) => {
        return <Avengers rank={avenger.rank} name={avenger.name} role={avenger.role} />
      })}</div>

    </center>
  </div>
  );
}


