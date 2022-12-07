const Models = require("../models");

const getLikes = (res) => {
  Models.Like.findAll({})
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

const createLike = (data, res) => {
  Models.Like.create(data)
    .then(function (data) {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = {
  getLikes,
  createLike,
};
