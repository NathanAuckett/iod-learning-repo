const express = require("express");
const router = express.Router();
const controller = require('../controllers/userController');

router.get("/", (req, res) => {
  controller.getUsers(res);
});

module.exports = router;
