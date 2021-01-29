import React from "react";
import { ButtonBlue, ButtonGreen, ButtonRed } from "./Components/ButtonColor";
import { Button } from "./Components/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Button color={"blue"} darkColor={"darkblue"} large>
        This is a button with props
      </Button>
      <ButtonRed>This is a styled button Red</ButtonRed>
      <ButtonBlue>This is a styled button Blue</ButtonBlue>
      <ButtonGreen>This is a styled button Green</ButtonGreen>
    </div>
  );
}

export default App;

// yarn add styled-components
// npm i styled-components
