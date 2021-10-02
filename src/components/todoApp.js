import React, { useState } from "react";
import Todolist from "./todolist";
function TodoApp() {
  // using state
  const [text, setText] = useState("");
  const [Items, setItems] = useState([]);

  // taking data from input funtion and showing to jsx
  const setValue = () => {
    // change first letter to upperCase
    let firstChar = text.slice(0, 1);
    let secondChar = text.slice(1);
    firstChar = firstChar.toUpperCase();
    secondChar = secondChar.toLowerCase();
    let changeText = firstChar + secondChar;

    // giving old value and new value to state
    setItems((oldItems) => {
      return [...oldItems, changeText];
    });
    setText("");
  };
  // passing data to jsx using input with the help of getValue funtion
  const getValue = (event) => {
    setText(event.target.value);
  };
  return (
    // jsx
    <>
      {/* its showing mutilples li using map */}
      <ul>
        {Items.map((itemval) => {
          return <Todolist text={itemval} /> ;
        })}
        
      </ul>
      <div className="input-text">
        <input
          type="text"
          name="text"
          onChange={getValue}
          placeholder="Type a message"
          value={text}
        />
        <span onClick={setValue}>
          <i className="fas fa-paper-plane"></i>
        </span>
      </div>
    </>
  );
}
export default TodoApp;
