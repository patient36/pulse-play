import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="form-wrapper">
      <div className="form-container ">
        <div className="slider login"></div>
        <form action="" method="post" className="login-form">
          <h1>Welcome back!</h1>
          <div className="form-input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              required
            />
          </div>
          <div className="form-input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              required
            />
          </div>
          <div className="form-input-group">
            <button type="submit">Login</button>
            <p>
              Don't have an account ? <a href="/register">Sign up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
