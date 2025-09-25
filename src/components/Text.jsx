import React, { useState } from 'react';

export default function TextBox() {
  const [val, setVal] = useState("Vaibhav");
  const[save,setSave]=useState([])
  return (
    <>
      <input
        type="text"
        aria-label="text-box"
        onClick={() => setVal("")}
        onChange={(e) => setVal(e.target.value)}
        value={val}
      />
      <h1>{val}</h1>
      <button onClick={()=>setSave([...save,val])}>Save</button>
      <h1>{save}</h1>

    </>
  );
}