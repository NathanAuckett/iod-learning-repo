
const User = require('../models/user');

function createUser(req, res){
    console.log(req);
    User.createUser(req, res);
}

function authenticateUser(req, res){
    console.log(req);
    User.authenticateUser(req, res);
}

function getUsers(res){
    User.getAll(res);
}

module.exports = {
    createUser,
    authenticateUser,
    getUsers
}