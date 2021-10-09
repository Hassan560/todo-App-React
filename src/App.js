import "./App.css";
import React, { useState } from "react";
import TodoApp from "./components/todoApp";
import SignUp from "./components/SignUp.js/signUp";
import LogIn from "./components/Login.js/logIn";
function App() {
  const [formIsSubmitted, setformIsSubmitted] = useState(false);

  const submitform = () => {
    setformIsSubmitted(true);
  };
  return (
    <>
      {/* <h1>Todo <span>App</span> </h1> */}
      <div className="container">
        {formIsSubmitted ? <LogIn /> : <SignUp submitForm={submitform} />}
        {/* <TodoApp/> */}
      </div>
    </>
  );
}

export default App;
