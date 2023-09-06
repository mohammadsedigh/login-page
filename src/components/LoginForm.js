import React from "react";
import logo from "../assets/img/logo.png";

export default function LoginForm({ toggle, setToggle }) {
  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        autocomplete="off"
        className="sign-in-form"
      >
        <div className="logo">
          <img src={logo} alt="easyclass" />
          <h4>easyclass</h4>
        </div>

        <div className="heading">
          <h2>welcome Back</h2>
          <h6>Not registered yet?</h6>
          <a
            href="#"
            className="toggle"
            onClick={(e) => {
              e.preventDefault();
              setToggle(!toggle);
            }}
          >
            Sign up
          </a>
        </div>

        <div className="actual-form">
          <div className="input-wrap">
            <input
              id="name"
              type="text"
              className="input-field"
              onFocus={(e) => {
                e.preventDefault();
                e.target.classList.add("action");
              }}
              onBlur={(e) => {
                if (e.target.value != "") return;
                e.target.classList.remove("action");
              }}
              minlength="4"
              autocomplete="off"
              required
            />
            <label for="name">Name</label>
          </div>

          <div className="input-wrap">
            <input
              id="pass"
              type="password"
              className="input-field"
              onFocus={(e) => {
                e.target.classList.add("action");
              }}
              onBlur={(e) => {
                if (e.target.value != "") return;
                e.target.classList.remove("action");
              }}
              minlength="4"
              autocomplete="off"
              required
            />
            <label for="pass">Password</label>
          </div>

          <input type="submit" value="Sign In" className="sign-btn" />

          <p className="text">
            Forgotten your password or you login datails?
            <a onClick={(e) => e.preventDefault()} href="#">
              Get help
            </a>{" "}
            sign in
          </p>
        </div>
      </form>
    </>
  );
}
