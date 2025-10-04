import { useState } from "react"

export default function Radio(){
  const [checked,setChecked]=useState("Female")
  return(
    
    <>
      <h1>Radio Component</h1>
      <input type="radio" name="gender" value={"Male"} onChange={(e)=>setChecked(e.target.value)} checked={checked==="Male"}/>
      <label>Male</label>
      <br/>
      <input type="radio" name="gender" value={"Female"} onChange={(e)=>setChecked(e.target.value)} checked={checked==="Female"}/>
      <label>Female</label>
      <br/>
      <h2>Selected Gender: {checked}</h2>
    </>
  )
}