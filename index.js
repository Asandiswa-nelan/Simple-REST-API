const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Sample in-memory database
const tasks = [];

// Routes
app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const newTask = req.body;
    tasks.push(newTask);
    res.status(201).json(newTask);
});

app.put('/tasks/:id', (req, res) => {
    const taskId = req.params.id;
    const updatedTask = req.body;
    tasks[taskId] = updatedTask;
    res.json(updatedTask);
});

app.delete('/tasks/:id', (req, res) => {
    const taskId = req.params.id;
    const deletedTask = tasks.splice(taskId, 1);
    res.json(deletedTask);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
