
const User = require('../models/user');

function getUsers(res){
    res.send(User.getAll());
}

module.exports = {
    getUsers
}