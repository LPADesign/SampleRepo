import { useState } from "react";

function App() {
  const [result, setResult] = useState<number | null>(null);

  const callApi = async () => {
    const res = await fetch("api/add/?a=5&b=7");
    const data = await res.json();
    setResult(data.result);
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h1>React + Vite + Django</h1>
      <button onClick={callApi}>Call Django API</button>
      {result !== null && <p>Result from API: {result}</p>}
    </div>
  );
}

export default App;
