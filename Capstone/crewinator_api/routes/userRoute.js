const express = require("express");
const router = express.Router();
const Controllers = require('../controllers');

router.post("/create", (req, res) => {
  Controllers.userController.createUser(req.body, res);
});

router.post("/authenticate", (req, res) => {
  Controllers.userController.authenticateUser(req.body, res);
});

router.get("/", (req, res) => {
  Controllers.userController.getUsers(res);
});

module.exports = router;
