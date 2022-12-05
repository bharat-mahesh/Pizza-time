import React,{useState,useEffect} from "react";
import {useParams } from 'react-router-dom'
import axios from "axios";

const Status=()=>{

    const {id} = useParams()

    const[status,setStatus]=useState("unconfirmed")
    useEffect(()=>{

       async function fetchdata(){
        const data=await axios.get(`http://localhost:5000/status/${id}`)
        // console.log(data.data)
        setStatus(data.data)
    }
       fetchdata()
    },[])
    return(
    <div>
       Order status:{status}
    </div>
    )
}

export default Status