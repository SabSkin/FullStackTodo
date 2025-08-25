const express = require("express");
const routerUser = require("./routes/auth");
const routerTodos = require("./routes/todo");
const cors = require("cors");

const PORT = 5000;
const app = express();

app.use(express.json());

app.use(cors());

app.use(routerUser, routerTodos);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT} port`);
});
