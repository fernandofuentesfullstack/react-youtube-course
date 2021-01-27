import React from "react";
import "./Task.css";

export default function Task({ taskName, time }) {
  return (
    <div className="Task">
      <h1>Nombre de la Tarea: {taskName}</h1>
      <h1>Tiempo para la tarea: {time}</h1>
    </div>
  );
}
