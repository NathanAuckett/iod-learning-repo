const express = require("express");
const router = express.Router();
const Controllers = require("../controllers");

router.get("/", (req, res) => {
  Controllers.userController.getUsers(res);
});

router.get("/user", (req, res) => {
  Controllers.userController.getUser(req, res);
});

router.post("/create", (req, res) => {
  Controllers.userController.createUsers(req.body, res);
});

module.exports = router;
