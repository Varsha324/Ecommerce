import React from 'react'
import './CSS/Login.css'

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <h1>Sign Up</h1>
        <div className="fields">
          <input type="text" placeholder="Your name" />
          <input type="text" placeholder="Email ID" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="login-login">
          Already have an account? <span className="login-link">Login</span>
        </p>
        <div className="login-agree">
          <input type="checkbox"/>
          <p>
            By continuing, I agree to the terms of use & privacy policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
