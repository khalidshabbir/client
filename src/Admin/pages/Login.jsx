import { React, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();

    const response = await fetch("/login/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.user) {
      localStorage.setItem("token", data.user);
      localStorage.setItem("usernames", data.username);
      localStorage.setItem("isAuthenticated", data.user);
      alert("Login successful");
      window.location.href = "/Admin/dashboard";
    } else {
      alert("Please check your username and password");
    }
  };

  return (
    <>
      <section className="login">
        <div className="wrapper bg-white">
          <div className="h2 text-center">Creativity</div>
          <div className="h4 text-muted text-center pt-2">
            Enter your login details
          </div>
          <form className=" pt-3" onSubmit={loginUser}>
            <div className="form-group py-2 mt-2">
              <div className="input-field">
                {" "}
                <span className="far fa-user p-2"></span>{" "}
                <input
                  type="text"
                  placeholder="Username or Email Address"
                  required
                  className=""
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />{" "}
              </div>
            </div>
            <div className="form-group py-1 pb-2">
              <div className="input-field mt-3">
                {" "}
                <span className="fas fa-lock p-2"></span>{" "}
                <input
                  type="password"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className=""
                />{" "}
                <button className="btn bg-white text-muted">
                  {" "}
                  <span className="far fa-eye-slash"></span>{" "}
                </button>{" "}
              </div>
            </div>
            <div className="d-flex align-items-start">
              <div className="ml-auto mt-3">
                {" "}
                <a href="#" id="forgot">
                  Forgot Password?
                </a>{" "}
              </div>
            </div>{" "}
            <input type="submit" className="btn btn-block mt-5" value="Login" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
