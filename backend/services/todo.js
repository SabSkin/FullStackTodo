const fs = require("fs");
const path = require("path");

const todosFile = path.join(__dirname, "../data/todos.json");

const postNewTodo = (req, res) => {
  const newTodo = req.body;

  if (!newTodo.text) {
    res.stausCode = 200;
    res.send("Error reading todo file");
  }

  fs.readFile(todosFile, "utf-8", (err, data) => {
    if (err) return res.status(500).send("Error reading todo file");

    let todos = [];
    try {
      todos = JSON.parse(data);
    } catch (e) {
      todos = [];
    }

    newTodo.id = Date.now();
    todos.push(newTodo);

    fs.writeFile(todosFile, JSON.stringify(todos, null, 2), "utf-8", (err) => {
      if (err) return res.status(500).send("Error writing todos file");

      res.status(200).json(newTodo);
    });
  });
};

const patchTodos = (req, res) => {
  fs.readFile(todosFile, "utf-8", (err, data) => {
    if (err) return res.status(500).send("Error reading todos file");

    const todos = JSON.parse(data);
    const { id } = req.params;
    const { isCompleted } = req.body;

    const todo = todos.find((t) => t.id.toString() === id);
    if (!todo) return res.status(404).send("Todo not found");

    todo.isCompleted = isCompleted;

    fs.writeFile(todosFile, JSON.stringify(todos, null, 2), "utf-8", (err) => {
      if (err) return res.status(500).send("Error writing todos file");
      res.status(200).json(todo);
    });
  });
};

const getTodos = (req, res) => {
  fs.readFile(todosFile, "utf-8", (err, data) => {
    if (err) {
      res.statusCode = 500;
      return res.send("Error reading todos file");
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.send(data || "[]");
  });
};

module.exports = { postNewTodo, getTodos, patchTodos };
