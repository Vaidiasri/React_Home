import { useState, useEffect } from "react";

export default function Time_Update() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const update_per_sec = setInterval(() => {
      setTime((prev) => prev + 1); // ✅ functional update (best practice)
    }, 1000);

    // Cleanup function — jab component unmount ho ya re-render ho to interval band kar do
    return () => clearInterval(update_per_sec);
  }, []); // ✅ empty dependency means run once (on mount)

  return (
    <>
      <h1>Per second time update</h1>
      <h2>{time}</h2>
    </>
  );
}
