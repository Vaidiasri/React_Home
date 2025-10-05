import { useState } from "react"

export default function Counter(){
  const [count,setCount]=useState(0)
  const bada=()=>{
    setCount(count+1)
    alert("Count Baad raha hai bhai ")
  }
  return(<>
    <h1>Counter App</h1>
    <button onClick={bada}>Bada</button>
    <h2>{count}</h2>

  </>)
}