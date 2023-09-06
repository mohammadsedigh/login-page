import React from "react";
import logo from "../assets/img/logo.png";

export default function SignUpForm({ toggle, setToggle }) {
  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        autocomplete="off"
        className="sign-up-form"
      >
        <div className="logo">
          <img src={logo} alt="easyclass" />
          <h4>easyclass</h4>
        </div>

        <div className="heading">
          <h2>Get Started</h2>
          <h6>Already have an account?</h6>
          <a
            href="#"
            className="toggle"
            onClick={(e) => {
              e.preventDefault();
              setToggle(!toggle);
            }}
          >
            Sign in
          </a>
        </div>

        <div className="actual-form">
          <div className="input-wrap">
            <input
              type="text"
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
            <label>Name</label>
          </div>

          <div className="input-wrap">
            <input
              type="email"
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
            <label>Email</label>
          </div>

          <div className="input-wrap">
            <input
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
            <label>Password</label>
          </div>

          <input type="submit" value="Sign Up" className="sign-btn" />

          <p className="text">
            By signing up, I agree to the
            <a onClick={(e) => e.preventDefault()} href="#">
              Terms of Services
            </a>{" "}
            and
            <a onClick={(e) => e.preventDefault()} href="#">
              Privacy Policy
            </a>
          </p>
        </div>
      </form>
    </>
  );
}
