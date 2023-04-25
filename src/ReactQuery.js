import { useQuery } from "@tanstack/react-query";
import Axios from "axios"
import {useFetch} from "./Customhooks"
// import {client} from './App'
export function Reactquery(){
    const {data,loading} = useFetch('https://api.quotable.io/quotes/random')

    const {data:quotes,isLoading,error,refetch} = useQuery(['quote'],()=>{
        return Axios.get('https://api.quotable.io/quotes/random').then((res)=>res?.data[0]?.content)
    })

    if(isLoading) return <h3>Loading... <br/>Please Wait</h3>
    if(error) return <h1>Something went wrong... Try Again</h1>
    if(loading) return <h1>The page is Loading....</h1>
    return(
        <>
             <h1>Random Quote:{quotes}</h1>
        <button className="btn" onClick={refetch}>New Quote</button>
        <h1>New Quote:{data}</h1>
        </>
   
    )
}

