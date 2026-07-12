import { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="container">
      <div className="card">

        <h1>Login Form</h1>

        <div className="tabs">
          <button
            className={activeTab === "login" ? "active" : ""}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>

          <button
            className={activeTab === "signup" ? "active" : ""}
            onClick={() => setActiveTab("signup")}
          >
            Signup
          </button>
        </div>

        {activeTab === "login" ? (
          <form>
            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="password"
              placeholder="Password"
            />

            <a href="#">Forgot password?</a>

            <button className="loginBtn">
              Login
            </button>

            <p>
              Not a member?
              <span> Signup now</span>
            </p>
          </form>
        ) : (
          <form>
            <input
              type="text"
              placeholder="Full Name"
            />

            <input
              type="email"
              placeholder="Email Address"
            />

            <input
              type="password"
              placeholder="Password"
            />

            <button className="loginBtn">
              Signup
            </button>

            <p>
              Already have an account?
              <span> Login</span>
            </p>
          </form>
        )}

      </div>
    </div>
  );
}

export default LoginForm;