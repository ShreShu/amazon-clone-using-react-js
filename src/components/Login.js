import "./Login.css";

import React, { useState } from "react";

export const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (props) => (event) => {
    setInput({ ...input, [props]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(input);
  };

  const register = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <div className="login_container">
        <h1>Sign in</h1>
        <form onSubmit={submitHandler}>
          <h5>Email</h5>
          <input type="text" name="email" onChange={changeHandler("email")} />
          <h5>Password</h5>
          <input
            type="password"
            name="password"
            onChange={changeHandler("password")}
          />
          <button type="submit" className="signIn_button">
            Sign in
          </button>
        </form>
        <p>
          By Signing in you agree to AMAZON-CLONE conditions of use and sale
        </p>
        <button onClick={register} className="login_registerButton">
          Create your amazon account now
        </button>
      </div>
    </div>
  );
};
