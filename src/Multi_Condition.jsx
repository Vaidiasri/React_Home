import { useState } from "react"
export default function Multi_Condition({users={}}){
  const [counter,setCounter]=useState(0)
  return(
    <>
    <h1>Name: {users.name}</h1>
      <h1>Age: {users.age}</h1>
      <h1>City: {users.city}</h1>
      <h1>Counter: {counter}</h1>
      <button onClick={()=>setCounter(counter+1)}>Increment</button>
      <button onClick={()=>setCounter(counter-1)}>Decrement</button>
      {
        counter==0?<h1>Condition 0</h1>
        :counter==1?<h1>Condition 1</h1>
        :counter==2?<h1>Condition 2</h1>
        :counter==3?<h1>Condition 3</h1>
        :counter==4?<h1>Condition 4</h1>
        :counter==5?<h1>Condition 5</h1>
        :null
      }
    </>
  )
}