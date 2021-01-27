import React, { useRef } from "react";
import "./App.css";

function App() {
  const input = useRef(null);

  const changePlaceholder = () => {
    input.current.placeholder = "fullstack";
    console.log(input.current.placeholder);
    input.current.focus();
  };

  return (
    <div className="App">
      <input type="text" placeholder="wassup" ref={input} />
      <button onClick={changePlaceholder}>Change Placeholder</button>
    </div>
  );
}

export default App;
