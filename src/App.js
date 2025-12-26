import React, { useState } from "react";

const API_BASE = process.env.REACT_APP_API_BASE_URL || "http://localhost:8000";

export default function App() {
  const [name, setName] = useState("Arres");
  const [msg, setMsg] = useState("");
  const [err, setErr] = useState("");

  async function callApi() {
    setErr("");
    setMsg("");
    try {
      const url = `${API_BASE}/greet?name=${encodeURIComponent(name)}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setMsg(data.message);
    } catch (e) {
      setErr(String(e));
    }
  }

  return (
    <div style={{ fontFamily: "sans-serif", padding: 20 }}>
      <h1>mock_frontend</h1>
      <p>Calls: <code>{API_BASE}</code></p>

      <label>
        Name:{" "}
        <input value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <button onClick={callApi} style={{ marginLeft: 8 }}>Call API</button>

      {msg && <p><strong>Response:</strong> {msg}</p>}
      {err && <p style={{ color: "crimson" }}><strong>Error:</strong> {err}</p>}
    </div>
  );
}
