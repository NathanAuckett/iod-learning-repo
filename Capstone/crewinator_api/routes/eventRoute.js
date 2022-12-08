const express = require("express");
const router = express.Router();
const Controllers = require('../controllers');

router.post("/create", (req, res) => {
  Controllers.EventController.createEvent(req.body, res);
});

router.get("/", (req, res) => {
  Controllers.EventController.getEvents(res);
});

module.exports = router;
