import React, { useState } from "react";
import Item from "./Item";

function ToDoList() {
  const [input, setInput] = useState("");
  const [tasks, setTask] = useState([]);

  function handleTextChange(event) {
    const newText = event.target.value;
    setInput(newText);
  }

  function addTask() {
    setTask((prevItems) => {
      return [...prevItems, input];
    });

    setInput("");
  }

  function deleteTask(deleteIndex) {
    setTask((prevTasks) => {
      return prevTasks.filter((item, index) => {
        return index !== deleteIndex;
      });
    });
  }

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>

      <div className="input-task">
        <input
          type="text"
          placeholder="New Task"
          value={input}
          onChange={handleTextChange}
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="task-list">
        <ul>
          {tasks.map((task, index) => (
            <Item key={index} id={index} text={task} onChecked={deleteTask} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ToDoList;
