const express = require("express");
const { postNewTodo } = require("../services/todo");
const router = express.Router();

router.post("/addTodo", postNewTodo);

module.exports = router;
