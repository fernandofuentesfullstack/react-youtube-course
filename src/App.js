import { useState } from "react";
import Form from "./Components/Form";

function App() {
  const [firstName, setFirstName] = useState('FullStack');
  const [age, setAge] = useState(0);

  return (
    <div className="App">
      {firstName} <button onClick={() => setFirstName('Fernando')}>Change Name</button>
      <br />
      {age} <button onClick={() => setAge(age + 1)}>Increase Age</button>

      <Form firstName={"Fernando"} lastName={"Fuentes"} email={"f@gmail.com"} />
      <Form />
    </div>
  );
}

export default App;
