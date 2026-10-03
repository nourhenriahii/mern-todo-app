import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [taskInput, setTaskInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const API_URL = "/api/tasks";

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setTasks(data);
    } catch (err) {
      console.error("Error fetching tasks:", err);
    }
  };

  const handleAddTask = async () => {
    if (taskInput.trim() === "") return;

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: taskInput }),
      });
      const newTask = await res.json();

      setTasks([...tasks, newTask]);
      setTaskInput("");
    } catch (err) {
      console.error("Error adding task:", err);
    }
  };

  const handleDeleteTask = async (idToDelete) => {
    try {
      await fetch(`${API_URL}/${idToDelete}`, {
        method: "DELETE",
      });

      setTasks(tasks.filter((task) => task._id !== idToDelete));
    } catch (err) {
      console.error("Error deleting task:", err);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h1>MERN To-Do App</h1>
      </header>

      <section>
        <input
          style={{
            width: "250px",
            padding: "10px",
            textAlign: "center",
            border: "2px solid pink",
            borderRadius: "60px",
            outline: "none",
          }}
          type="text"
          placeholder="What do you want to do today?"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />

        <button
          className="btn1"
          onClick={handleAddTask}
          style={{
            marginLeft: "10px",
            padding: "10px 20px",
            borderRadius: "60px",
            cursor: "pointer",
          }}
        >
          Ajout
        </button>

        <ul
          style={{
            width: "300px",
            margin: "20px auto",
            textAlign: "left",
            listStyleType: "none",
            padding: "0",
          }}
        >
          {tasks.map((task) => (
            <li
              key={task._id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px 15px",
                margin: "5px 0",
                border: "1px solid #ddd",
                borderRadius: "10px",
              }}
            >
              <span>{task.title}</span>
              <button
                onClick={() => handleDeleteTask(task._id)}
                style={{
                  background: "red",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  padding: "4px 8px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default App;
