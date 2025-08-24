const express = require("express");
const router = require("./routes/auth");

const PORT = 5000;
const app = express();
app.use(router);

app.listen(5000, () => {
  console.log(`Server started on ${PORT} port`);
});
