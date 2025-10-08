import { useState, useEffect } from "react";

export default function Filter() {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    setLoading(true);
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const result = await response.json();
    setData(result);
    setFiltered(result); // Initially show all
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const find = (e) => {
    const value = e.target.value;
    setSearch(value);
    const updated = data.filter((user) =>
      user.name.toLowerCase().includes(value.toLowerCase())
    );
    setFiltered(updated);
  };

  return (
    <>
      <h1>Filter</h1>
      <input
        type="text"
        value={search}
        onChange={find}
        placeholder="Search..."
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {filtered.map((val) => (
            <li key={val.id}>{val.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}
