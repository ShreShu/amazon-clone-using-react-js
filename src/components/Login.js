import "./Login.css";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (props) => (event) => {
    setInput({ ...input, [props]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, input.email, input.password)
      .then((auth) => {
        navigate("/");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, input.email, input.password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
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
