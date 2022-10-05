import "./styles.css";
import React, { useState } from "react";

export default function App() {
  const [list, setList] = useState("");
  function actionClickHandler() {
    var list = ["Mission Impossible ", "4⭐", "Top Gun", "5⭐", "War", "3.5⭐"];
    setList(list);
  }

  function romanceClickHandler() {
    var list = [
      "Kuch Kuch Hota Hai ",
      "5⭐",
      "Arjun Reddy",
      "4.5⭐",
      "DDLJ",
      "5⭐"
    ];
    setList(list);
  }

  function comedyClickHandler() {
    var list = ["3 idiot", "4.5⭐", "Dhamaal", "4⭐", "Hera Pheri", "5⭐"];
    setList(list);
  }

  return (
    <div className="App">
      <h1>GreatMovies</h1>
      <h2>List of my all time favourites👇</h2>

      <button onClick={actionClickHandler}>🤜🤛 Action</button>
      <button onClick={romanceClickHandler}>💌 Romance</button>
      <button onClick={comedyClickHandler}>😂🤣😂 Comedy</button>

      <hr></hr>
      <div class="optionOne">
        <h3>{list[0]}</h3>
        <p>{list[1]}</p>
      </div>
      <div class="optionTwo">
        <h3>{list[2]}</h3>
        <p>{list[3]}</p>
      </div>
      <div class="optionTwo">
        <h3>{list[4]}</h3>
        <p>{list[5]}</p>
      </div>
    </div>
  );
}
