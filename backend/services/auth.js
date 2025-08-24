const fs = require("fs");
const path = require("path");

const usersFile = path.join(__dirname, "../data/users.json");

const postNewUser = (req, res) => {
  let body = "";
  req.on("data", (chunk) => {
    body += chunk.toString();
  });

  req.on("end", () => {
    try {
      const newUser = JSON.parse(body);
      fs.readFile(usersFile, "utf-8", (err, data) => {
        if (err) {
          res.statusCode = 500;
          return res.end("Error reading users file");
        }

        let users = [];
        try {
          users = JSON.parse(data);
        } catch (e) {
          users = [];
        }
        newUser.id = Date.now();
        users.push(newUser);
        fs.writeFile(
          usersFile,
          JSON.stringify(users, null, 2),
          "utf-8",
          (err) => {
            if (err) {
              res.statusCode = 500;
              return res.end("Error writing users file");
            }

            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify(newUser));
          }
        );
      });
    } catch (error) {
      res.statusCode = 400;
      res.end("Invalid form data");
    }
  });
};

const getUser = (req, res) => {
  fs.readFile(usersFile, "utf-8", (err, data) => {
    if (err) {
      res.statusCode = 500;
      return res.end("Server error");
    }

    let users = [];
    try {
      users = JSON.parse(data);
    } catch (e) {
      users = [];
    }

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(users));
  });
};

module.exports = { postNewUser, getUser };
