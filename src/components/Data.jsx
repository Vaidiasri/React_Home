import { useState, useEffect } from "react";

export default function Users() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/users"); // API call
    const result = await response.json();// API response
    console.log(result);
    setUsers(result);// set state
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Users List</h1>
      {loading ? <h2>Loading...</h2> : null}

      <ul>
        {users &&
          users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> <br />
              Username: {user.username} <br />
              Email: {user.email}
            </li>
          ))}
      </ul>
    </>
  );
}
