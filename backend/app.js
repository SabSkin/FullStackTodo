const express = require("express");
const router = require("./routes/auth");
const cors = require("cors");

const PORT = 5000;
const app = express();

// чтобы принимать JSON из fetch
app.use(express.json());

// разрешаем фронтенду подключаться
app.use(cors());

// подключаем роуты
app.use(router);

app.listen(PORT, () => {
  console.log(`Server started on ${PORT} port`);
});
