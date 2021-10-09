import React, { useState, useEffect } from "react";

// to get the data from localStorage
const getdata = () => {
  let list = localStorage.getItem("lists");
  console.log(list);
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};
function TodoApp() {
  // using state
  const [text, setText] = useState("");
  const [Items, setItems] = useState(getdata());

  // taking data from input funtion and showing to jsx
  const setValue = () => {
    // change first letter to upperCase
    let firstChar = text.slice(0, 1);
    let secondChar = text.slice(1);
    firstChar = firstChar.toUpperCase();
    secondChar = secondChar.toLowerCase();
    let changeText = firstChar + secondChar;
    if (!text) {
    } else {
      // giving old value and new value to state
      setItems([...Items, changeText]);
      setText("");
    }
  };
  // passing data to jsx using input with the help of getValue funtion
  const getValue = (event) => {
    setText(event.target.value);
  };

  // del item
  const deleteItems = (id) => {
    console.log(id);
    const update = Items.filter((elem, index) => {
      return index != id;
    });
    setItems(update);
  };
  // dee all items
  const deleteAll = () => {
    setItems([]);
  };

  // to set the data in local storage
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(Items));
  }, [Items]);

  return (
    // jsx
    <>
      {/* its showing mutilples li using map */}
      {Items.map((elem, index) => {
        return (
          <ul key={index}>
            <li>
              {elem}
              <i
                onClick={() => deleteItems(index)}
                className="fas fa-trash-alt"
              ></i>
            </li>
          </ul>
        );
      })}
      <div className="input-text">
        <i onClick={deleteAll} className="fas fa-trash-alt"></i>
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
