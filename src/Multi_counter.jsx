import { useState } from "react"

export default function Multi_counter(){
  const [counter,setCounter]=useState(0)
  const update=()=>{
    setCounter(counter+1)
    setCounter(counter+1)
    setCounter(counter+1)
  }
  return(
    <>
      <h1>Multi_counter:{counter}</h1>
      <button onClick={update}>Update</button>
    </>
  )
}