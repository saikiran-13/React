import Axios from "axios"
import { useEffect, useState } from "react"



export function Quotes() {
    const [fact,setfact] = useState("")
    const [image,setimage] = useState("")
    const [status,setStatus] = useState("")
    const [name,setName] = useState("")
    const [num,setNum] = useState(0)

    function getquotes(){
        Axios.get('https://api.quotable.io/quotes/random')//This returns a set of quotes 
        .then((res)=>setfact(res.data[0].content))

        //Rendering the screen once by passing empty array
    }
    function setImage(){
        Axios.get(' https://dog.ceo/api/breeds/image/random/3')//This returns a set of quotes 
         .then((res)=>setimage(res.data.message))
 
         //Rendering the screen once by passing empty array
     }
    function luckynumber(username){
        Axios.get(`https://api.agify.io?name=${username}`)//This returns a set of quotes 
        .then((res)=>{setNum(res.data.age)
            console.log(res.data)})
        // console.log(res.date.age)

    }
    useEffect(()=>{
           getquotes()
           setImage()
    },[])

  
   

return (<>
<h3 style={{fontSize:30}}>CHOOSE YOUR FAVOURITE PET</h3>
<div className = "container">
<b><img onClick={()=>{setStatus("Congrats,You got your favourite dog")}} className = "img_cont"  src={image[0]} alt="imagee not found"/></b>
<b><img onClick={()=>{setStatus("Congrats,You got your favourite dog")}} className = "img_cont"  src={image[1]} alt="imagee not found"/></b>
<b><img onClick={()=>{setStatus("Congrats,You got your favourite dog")}} className = "img_cont"  src={image[2]} alt="imagee not found"/></b>
</div>
<h1>{status}</h1><br/>
<b style={{fontSize:25,backgroundColor:"aqua"}}><cite>{fact}</cite></b><br/><hr/>
<h1 style={{margin:5,backgroundColor:"gold",borderRadius:5}}>LUCKY NUMBER PREDICTOR</h1>
<div style = {{marginTop:35,fontSize:20}}><b>Enter Your Name:  </b>
<input type = "text" onChange={(event)=>setName(event.target.value)}className="textbox-clicked" ></input></div>
<button className="btn" onClick={()=>luckynumber(name)}>Get Lucky Number</button><h3>{num}</h3>

</>
)
}

