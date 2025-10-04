import { useState } from "react"

export default function Dropdown(){
  const [selected,setSelected]=useState("delhi")
  return(
    <>
<h1>Dropdown Component</h1>
<select value={selected} onChange={(e)=>setSelected(e.target.value)}>
  <option value="delhi">Delhi</option>
  <option value="mumbai">Mumbai</option>
  <option value="bangalore">Bangalore</option>
</select>
<h2>Selected City: {selected}</h2>
    </>
  )
}