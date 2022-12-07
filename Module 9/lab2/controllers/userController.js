const Models = require("../models");

const getUsers = (res) => {
  Models.Users.find({}, {}, {}, (err, data) => {
    if (err) throw err;
    res.send({ result: 200, data: data });
  });
};

const getUser = (req, res) => {
  console.log(req.query);
  Models.Users.find(req.query, (err, data) => {
    if (err) throw err;
    res.send({ result: 200, data: data });
  });
};

const createUsers = (data, res) => {
  new Models.Users(data).save((err, data) => {
    if (err) throw err;
    res.send({ result: 200, data: data });
  });
};

module.exports = {
  getUsers,
  getUser,
  createUsers,
};
