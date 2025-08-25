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

module.exports = { postNewTodo };
