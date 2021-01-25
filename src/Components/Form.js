import React, { useState } from "react";
import "./Form.css";

export default function Form() {
  const username = "FernandoFuentesFullStack";
  const password = "Subscribe";

  const [usernameState, setUsernameState] = useState("");
  const [passwordState, setPasswordState] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  function login () {
      if (usernameState === username && passwordState === password) {
          setLoggedIn(true);
      }
  }

  return (
    <div className="Form">
      <h1>Login</h1>
      <input
        type="text"
        onChange={(event) => {
          setUsernameState(event.target.value);
          console.log(event.target.value);
          console.log(usernameState);
        }}
      />
      <input
        type="password"
        onChange={(event) => {
          setPasswordState(event.target.value);
          console.log(event.target.value);
          console.log(passwordState);
        }}
      />
      <button onClick={login}>Submit</button>

      {loggedIn && <h1>Logged In</h1>}
    </div>
  );
}
