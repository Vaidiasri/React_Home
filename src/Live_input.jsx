import { useState } from "react"

export default function Live_input(){
  const [text,setText]=useState("")
  const live=(event)=>{
    setText(event.target.value)
  }
  return(
    <>
    <input type="text" onChange={live} />
    <p>{text}</p>

    </>
  )
}