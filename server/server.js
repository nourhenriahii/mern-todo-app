const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../mern-client/dist")));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected successfully"))
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
});

const Task = mongoose.model("Task", taskSchema);

app.get("/api/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post("/api/tasks", async (req, res) => {
  try {
    const newTask = new Task({ title: req.body.title });
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete("/api/tasks/:id", async (req, res) => {
  try {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/{*splat}", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../mern-client/dist", "index.html"));
});

const PORT = process.env.PORT || 8007;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
