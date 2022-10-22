const express = require('express');
const router = express.Router();

const calculatorController = require("../controllers/calculatorController.js");

router.get('/add', (req, res) => {
    calculatorController.add(req, res);
});

router.get('/subtract', (req, res) => {
    calculatorController.subtract(req, res);
});

router.get('/multiply', (req, res) => {
    calculatorController.multiply(req, res);
});

router.get('/divide', (req, res) => {
    calculatorController.divide(req, res);
});

router.get('/calculate', (req, res) => {
    calculatorController.calculate(req, res);
});

module.exports = router;