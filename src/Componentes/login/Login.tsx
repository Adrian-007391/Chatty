import React from "react";
import "./Login.css";
import { AiFillGoogleCircle, AiFillGithub } from "react-icons/ai";
function Login(props: any) {
  return (
    <div className="Login">
      <div className="Login__div">
        <h2>login</h2>
        <button
          className="Login__button"
          onClick={() => {
            props.login("google");
          }}
        >
          log in with google
          <AiFillGoogleCircle className="Login__icon" />
        </button>
        <button
          className="Login__button"
          onClick={() => {
            props.login("github");
          }}
        >
          log in with github
          <AiFillGithub className="Login__icon" />
        </button>
      </div>
    </div>
  );
}
export default Login;
