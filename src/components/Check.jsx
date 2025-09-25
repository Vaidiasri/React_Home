import { useState } from "react"
export default function Check(){
  const [checked,setChecked]=useState(false)
  const handleCheck=()=>{
    setChecked(!checked)
    console.log(!checked)
    if(!checked){
      alert("You have accepted the terms and conditions")
    }
    else{
      alert("You have not accepted the terms and conditions")
    }
  }
  return(
    <>
      <h1>Check Component</h1>
      <input type="checkbox" onChange={handleCheck} checked={checked} value={checked}/>
      <label>Accept Terms and Conditions</label>
    </>
  )
}