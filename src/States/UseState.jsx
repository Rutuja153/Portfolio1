import React, { useState, useRef } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const userRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "Admin" && password === "admin@123") {
      alert("Login Successful");
    } else {
      alert("Invalid Username or Password");
      userRef.current.focus();
    }
  };

  return (
    <div>
      <h2>Login Form</h2>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter Username"
          ref={userRef}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <br /><br />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br /><br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;