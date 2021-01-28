import React, { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitForm = () => {
    var user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    console.log(user);
  };

  return (
    <div className="App">
      <form onSubmit={submitForm}>
        <label htmlFor="firstName">First name</label>
        <input
          type="text"
          id="firstName"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <label htmlFor="lastName">Last name</label>
        <input
          type="text"
          id="lastName"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
