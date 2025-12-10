import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    // For local development: http://localhost:8080/api/hello
    // For Render production: replace with your backend URL after deployment
    const backendURL = process.env.REACT_APP_BACKEND_URL || "http://localhost:8080";
    
    fetch(`${backendURL}/api/hello`)
      .then((res) => {
        if (!res.ok) throw new Error("Network response was not ok");
        return res.json();
      })
      .then((data) => setMessage(data.message))
      .catch((err) => setMessage("Error: " + err.message));
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>{message}</h1>
    </div>
  );
}

export default App;
