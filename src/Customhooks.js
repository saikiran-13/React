import { useQuery } from '@tanstack/react-query'
import {useState,useEffect} from 'react'
import { Axios } from 'axios'

//Fetch Hook
export function useFetch(url){
    const [data,setData] = useState("")
    const [loading,isLoading] = useState(true)

    useEffect(()=>{
        async function getData(){
            const response = await fetch(url)
            const data = await response.json()
            setData(data[0].content)
            console.log(data,"hi")
            isLoading(false)
        }
        getData()
    },[url])

    return {data,loading}
}

//Id hook
export const useId = (intialval = 0)=>{
    const [id,setId] = useState(intialval)

    function ChangeId(){
        setId(id+1)
    }
    return [id,ChangeId]
}

//CatFetch hook
export const useCatFetch = ()=>{
    const {data:catData,isLoading,refetch,error} = useQuery(['cat'],async ()=>{
        const res = await fetch('https://catfact.ninja/fact')
        const data = await res.json()
        return data
    })
    function refetchData(){
        alert('Cat Data Refetched!!!')
        refetch()
    }
    if(error) return <h1>Error:No cat Quote found... </h1>
    return {catData,refetchData,isLoading,error}
}