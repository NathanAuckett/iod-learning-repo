const Models = require("../models");

const getComments = (res) => {
  Models.Comments.find({}, {}, {}, (err, data) => {
    if (err) throw err;
    res.send({ result: 200, data: data });
  });
};

const getComment = (req, res) => {
  console.log(req.query);
  Models.Comments.find(req.query, (err, data) => {
    if (err) throw err;
    res.send({ result: 200, data: data });
  });
};

const createComment = (data, res) => {
  new Models.Comments(data).save((err, data) => {
    if (err) throw err;
    res.send({ result: 200, data: data });
  });
};

module.exports = {
  getComments,
  getComment,
  createComment,
};
