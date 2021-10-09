import React from "react";

import "./signUp.css";
function LogIn() {
  return (
    <>
      <div id="container">
        <div id="card">
          <form className="box1">
            <h1>LOG IN</h1>
            <label className="lab" for="emailaddress">
              Email:
            </label>
            <input
              className="input"
              type="email"
              name="email"
              id="email"
              placeholder="Email"
            />
            <label className="lab" for="password">
              Password
            </label>
            <input
              className="input"
              type="password"
              name="password"
              id="pass"
              placeholder="Password"
            />
            <button className="btn1" type="button">
              LOG IN
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default LogIn;
