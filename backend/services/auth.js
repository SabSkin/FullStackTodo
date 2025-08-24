const fs = require("fs");
const path = require("path");

const usersFile = path.join(__dirname, "../data/users.json");

// POST /create-account
const postNewUser = (req, res) => {
  const newUser = req.body; // express.json() уже парсит JSON

  if (!newUser || !newUser.email || !newUser.password || !newUser.userName) {
    return res.status(400).json({ error: "Invalid form data" });
  }

  fs.readFile(usersFile, "utf-8", (err, data) => {
    if (err) return res.status(500).send("Error reading users file");

    let users = [];
    try {
      users = JSON.parse(data);
    } catch (e) {
      users = [];
    }

    newUser.id = Date.now();
    users.push(newUser);

    fs.writeFile(usersFile, JSON.stringify(users, null, 2), "utf-8", (err) => {
      if (err) return res.status(500).send("Error writing users file");

      res.status(200).json(newUser);
    });
  });
};

// GET /authorization
const getUser = (req, res) => {
  fs.readFile(usersFile, "utf-8", (err, data) => {
    if (err) return res.status(500).send("Server error");

    let users = [];
    try {
      users = JSON.parse(data);
    } catch (e) {
      users = [];
    }

    res.status(200).json(users);
  });
};

module.exports = { postNewUser, getUser };
