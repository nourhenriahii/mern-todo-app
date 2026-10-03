# MERN To-Do App

A simple full-stack to-do application built with the MERN stack (MongoDB, Express, React, Node.js). Users can add and delete tasks, which are stored in a MongoDB database.

**Live demo:** [https://mern-todo-app-1-1o9i.onrender.com](https://mern-todo-app-1-1o9i.onrender.com)

## Features

- Add a new task
- View the list of tasks
- Delete a task
- Data persisted in MongoDB Atlas

## Tech Stack

- **Frontend:** React (Vite)
- **Backend:** Node.js, Express
- **Database:** MongoDB Atlas (Mongoose)
- **Deployment:** Render

## Project Structure

```
MERN/
├── mern-client/   # React frontend
├── server/        # Express backend
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- A MongoDB Atlas account and connection string

### 1. Clone the repository

```bash
git clone https://github.com/nourhenriahii/mern-todo-app.git
cd mern-todo-app
```

### 2. Set up the server

```bash
cd server
npm install
```

Create a `.env` file inside `server/`:

```
MONGO_URI=your_mongodb_connection_string
PORT=8007
```

### 3. Set up the client

```bash
cd ../mern-client
npm install
npm run build
```

### 4. Run the app

```bash
cd ../server
npm start
```

Open `http://localhost:8007` in your browser.

## API Endpoints

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| GET    | `/api/tasks`     | Get all tasks     |
| POST   | `/api/tasks`     | Create a new task |
| DELETE | `/api/tasks/:id` | Delete a task     |

## Environment Variables

| Variable    | Description                                  |
| ----------- | -------------------------------------------- |
| `MONGO_URI` | MongoDB Atlas connection string              |
| `PORT`      | Server port (set automatically on Render)    |

## Deployment

The app is deployed on Render as a single Web Service (Express serves both the API and the built React app):

- **Build Command:** `cd mern-client && npm install && npm run build && cd ../server && npm install`
- **Start Command:** `cd server && npm start`
- **Environment variable:** `MONGO_URI` (MongoDB Atlas connection string)
- MongoDB Atlas **Network Access** allows connections from Render (`0.0.0.0/0`)

## Author

[nourhenriahii](https://github.com/nourhenriahii)
