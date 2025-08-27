const express = require("express");
const { postNewTodo, getTodos, patchTodos } = require("../services/todo");
const router = express.Router();

router.post("/todos", postNewTodo);
router.get("/todos", getTodos);
router.patch("/todos/:id", patchTodos);

module.exports = router;
