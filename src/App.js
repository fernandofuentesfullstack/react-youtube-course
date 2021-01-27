import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log('page rendered')
  }, [number])

  return (
    <div className="App" style={{ fontSize: 30 }}>
      {number}
      <button
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        {" "}
        Increase Number
      </button>

    </div>
  );
}

export default App;
