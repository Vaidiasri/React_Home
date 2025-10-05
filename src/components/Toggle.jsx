import { useState } from "react"

export default function  Toggle(){
  const [change,setChange]=useState("ON")
  const go=()=>{
    setChange("OFF")
    if (change==="OFF"){
      setChange("ON")
    }
    
  }
  return(
    <>
    <h1>{change}</h1>
    <button onClick={go}>Change</button>
    </>
  )
}
  
