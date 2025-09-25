import { useState } from "react";

export default function Auth() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password,setPassword]=useState("")
  const [save, setSave] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !email) {
      alert("Please fill in all fields!");
      return;
    }

    if (!email.includes("@")) {
      alert("Please enter a valid email address!");
      return;
    }
    if (password.length<6){
      alert("Password must be at least 6 characters long!");
      return;
    }

    const data = { id: Date.now(), name, email }; // unique id
    setSave([...save, data]);
    setName("");
    setEmail("");
  };

  return (
    <>
      <h1>Auth Component</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
         <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <h2>Submitted Data:</h2>
      <ul>
        {save.map((item) => (
          <li key={item.id}>
            <strong>{item.name}</strong> - {item.email}
          </li>
        ))}
      </ul>
    </>
  );
}
