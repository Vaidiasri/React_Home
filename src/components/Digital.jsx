import { useEffect, useState } from "react";
import "../style/Time.css"
export default function Digital() {
  const [drop,setDrop]=useState("Green")
  const [time,setTime]=useState(new Date().toLocaleTimeString())
  useEffect(()=>{
    const interval=setInterval(()=>{
      setTime(new Date().toLocaleTimeString())
    },1000)
    return()=>{clearInterval(interval)}
  })
  const color=(e)=>{
    setDrop(e.target.value)
    console.log(e.target.value);
  }
  return (
    <>
      <div className="main">
        <main className="clock">
          <select name="timezone" id="timezone" className="timezone" onChange={color} value={drop}>
            <option value="Green">Green</option>
            <option value="Blue">Blue</option>
            <option value="Red">Red</option>
          </select>
          <div className="time" >
            {time}
          </div>
        </main>
      </div>
    </>
  );
}
