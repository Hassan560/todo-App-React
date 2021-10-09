import React, { useState, useEffect } from "react";
import "./signUp.css";
import LogIn from "../Login.js/logIn";

// to get the data from localStorage

const getData = () => {
  let data = localStorage.getItem("data");
  // console.log(data);
  if (data) {
    return JSON.parse(localStorage.getItem("data"));
  } else {
    return [];
  }
};

function SignUp({ submitForm }) {
  // using usestate
  const [userRegistration, setuserRegistration] = useState({
    username: "",
    email: "",
    password: "",
  });

  // using usestate with empty array
  const [newRecords, setnewRecords] = useState(getData());

  // passing data to jsx using input with the help of handleChange funtion
  const handleChange = (e) => {
    //   const name = e.target.name
    //   const value = e.target.value
    //   console.log(name, value);
    setuserRegistration({
      ...userRegistration,
      [e.target.name]: e.target.value,
    });
  };
  // store in empty usestate with handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    setnewRecords([...newRecords, userRegistration]);
    setuserRegistration({
      username: "",
      email: "",
      password: "",
    });
    submitForm(true);
  };

  // to set the data in local storage
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(newRecords));
  }, [newRecords]);

  return (
    <>
      <div id="container">
        <div id="card">
          <h1 className="head">
            <span>Surprise</span>htmlForm
          </h1>
          <form className="box">
            <label className="lab" htmlFor="username">
              Username:
            </label>
            <input
              type="text"
              autoComplete="off"
              name="username"
              id="username"
              className="input"
              placeholder="Username"
              value={userRegistration.username}
              onChange={handleChange}
            />
          
            <label className="lab" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              autoComplete="off"
              name="email"
              id="email"
              className="input"
              placeholder="Email"
              value={userRegistration.email}
              onChange={handleChange}
            />
           
            <label className="lab" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              autoComplete="off"
              name="password"
              id="password"
              className="input"
              placeholder="Password"
              value={userRegistration.password}
              onChange={handleChange}
            />
           
            <label className="lab1">
              <input type="checkbox" name="policy" /> Accept the term and
              policies
            </label>

            <button onClick={handleSubmit} className="btn" type="button">
              SIGN UP
            </button>
            <br />
            <p>Already have an account?</p>
            <button className="btn1">SIGNIN</button>
          </form>
        </div>
      </div>
    </>
  );
}
export default SignUp;
