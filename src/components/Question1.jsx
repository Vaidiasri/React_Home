import { useState } from "react";

export default function Question1() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      if (!response.ok) throw new Error("Failed to fetch data");
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1>Question 1</h1>
      <button onClick={fetchData} disabled={loading}>
        {loading ? "Loading..." : "Get Data"}
      </button>

      <ul>
        {data.map((value) => (
          <li key={value.id}>
            <strong>{value.title}</strong>
            <p>{value.body}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
