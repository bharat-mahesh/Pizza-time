import React,{useState,useEffect} from "react";
import {useParams } from 'react-router-dom'
import axios from "axios";

const Status=()=>{

    const {id} = useParams()

    const[status,setStatus]=useState("unconfirmed")
    const [msg, setMsg] = useState("")
    useEffect(async ()=>{

       async function fetchdata(){
        const data=await axios.get(`http://localhost:5000/status/${id}`)
        setStatus(data.data)
        return data.data
        
        
    }
       const data = await fetchdata()
       console.log(data)
       if (data == "confirmed"){
         setMsg("Order has been confirmed")
        }
        else if (data== "outfordelivery"){
         setMsg("Food is on the way")
        }
        else if (data == "delivered"){
         setMsg("Enjoy your meal")
        }
        else{
         setMsg("Waiting for confirmation")
        }
    },[])

    return(
    <div>
       {msg}
    </div>
    )
}

export default Status
