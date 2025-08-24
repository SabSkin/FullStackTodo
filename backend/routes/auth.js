const express = require("express");

const { postNewUser, getUser } = require("../services/auth");

const router = express.Router();

router.get("/authorization", getUser);
router.post("/create-account", postNewUser);

module.exports = router;
