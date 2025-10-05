import { useState } from "react"

export default function Live(){
  const [input,setInput]=useState("")
const test=(e)=>{
   setInput(e.target.value)
   console.log(e.target.value);
}
  return(
    <>
    <h1>Live</h1>
    <input type="text" onChange={test} value={input}></input>
    <h2>{input}</h2>
    </>
  )
}