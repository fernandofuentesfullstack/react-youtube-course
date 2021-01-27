import React, { useState } from "react";
import "./App.css";
import Task from "./Components/Task";

function App() {
  const [taskName, setTaskName] = useState("");
  const [time, setTime] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = () => {
    setTaskList([...taskList, { task: taskName, time: time }]);
    setTaskName("");
    setTime("");
  };

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <label>Nombre tarea</label>
      <input
        type="text"
        id="task"
        onChange={(e) => {
          setTaskName(e.target.value);
        }}
      />
      <label>Tiempo tarea</label>
      <input
        type="text"
        id="time"
        onChange={(e) => {
          setTime(e.target.value);
        }}
      />

      <button onClick={addTask}>Añadir Tarea</button>

      {taskList.map((task) => {
        return <Task taskName={task.task} time={task.time} />;
      })}
    </div>
  );
}

export default App;
