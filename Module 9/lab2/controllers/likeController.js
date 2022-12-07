const Models = require("../models");

const getLikes = (res) => {
  Models.Likes.find({}, {}, {}, (err, data) => {
    if (err) throw err;
    res.send({ result: 200, data: data });
  });
};

const getLike = (req, res) => {
  console.log(req.query);
  Models.Likes.find(req.query, (err, data) => {
    if (err) throw err;
    res.send({ result: 200, data: data });
  });
};

const createLike = (data, res) => {
  new Models.Likes(data).save((err, data) => {
    if (err) throw err;
    res.send({ result: 200, data: data });
  });
};

module.exports = {
  getLike,
  getLikes,
  createLike,
};
