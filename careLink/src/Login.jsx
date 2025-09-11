// import { useState } from "react";

// export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await fetch("http://localhost:5000/api/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await res.json();

//       if (res.ok) {
//         alert("✅ User registered successfully!");
//         console.log("User registered:", data);
//         setError("");
//       } else {
//         setError(data.message || "Something went wrong");
//       }
//     } catch (err) {
//       console.error("Error:", err);
//       setError("Server not reachable");
//     }
//   };

  // return (
  //   <div style={styles.container}>
  //     <div style={styles.card}>
  //       <h1 style={styles.title}>Login</h1>
  //       <form onSubmit={handleSubmit} style={styles.form}>
  //         <input
  //           type="email"
  //           placeholder="Email"
  //           value={email}
  //           onChange={(e) => setEmail(e.target.value)}
  //           style={styles.input}
  //           required
  //         />
  //         <input
  //           type="password"
  //           placeholder="Password"
  //           value={password}
  //           onChange={(e) => setPassword(e.target.value)}
  //           style={styles.input}
  //           required
  //         />
  //         {error && <p style={styles.error}>{error}</p>}
  //         <button type="submit" style={styles.button}>Login</button>
  //       </form>
  //     </div>
  //   </div>
//   );
// }

import React from "react";
import "./Login.css";

function Login() {
  return (
    <div className="login-container">
      <h1 className="login-title">Choose Your Login Role</h1>
      <div className="card-grid">
        <div className="login-card">
          <div className="icon">👤</div>
          <h2>Worker Login</h2>
          <p>Access your health card using ID/DOB or QR code.</p>
          <button onClick={() => (window.location.href = "/worker-login")}>
            Continue
          </button>
        </div>

        <div className="login-card">
          <div className="icon">🩺</div>
          <h2>Doctor Login</h2>
          <p>Login securely to access and update patient records.</p>
          <button onClick={() => (window.location.href = "/doctor-login")}>
            Continue
          </button>
        </div>

        <div className="login-card">
          <div className="icon">🛡️</div>
          <h2>Official Login</h2>
          <p>Government officials can monitor health surveillance.</p>
          <button onClick={() => (window.location.href = "/official-login")}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;


const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  card: {
    backgroundColor: "white",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    width: "320px",
  },
  title: {
    textAlign: "center",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  input: {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "8px",
  },
  button: {
    backgroundColor: "#2563eb",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
  error: {
    color: "red",
    fontSize: "14px",
    textAlign: "center",
  },
};