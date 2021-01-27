import React, { useState } from "react";
import "./App.css";

function App() {
  const [showHeader, setShowHeader] = useState(false);

  const [name, setName] = useState("");
  const [listOfNames, setListOfNames] = useState([]);

  return (
    <div className="App">
      <div>
        <h1>Ejemplo 1</h1>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <button
          onClick={() => {
            setListOfNames([...listOfNames, name]);
            setName("");
            console.log(listOfNames);
          }}
        >
          Add name
        </button>
        {listOfNames.map((value, key) => (
          <h1 key={key}> {value} </h1>
        ))}
      </div>

      <br />
      <br />

      <div>
        <h1>Ejemplo 2</h1>
        <button onClick={() => setShowHeader(!showHeader)}>
          Change header
        </button>
        {showHeader ? <h1>Hello</h1> : <h1>No Hello</h1>}
      </div>
    </div>
  );
}

export default App;
