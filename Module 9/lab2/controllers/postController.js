const Models = require("../models");

const getPosts = (res) => {
  Models.Posts.find({}, {}, {}, (err, data) => {
    if (err) throw err;
    res.send({ result: 200, data: data });
  });
};

const getPost = (req, res) => {
  console.log(req.query);
  Models.Posts.find(req.query, (err, data) => {
    if (err) throw err;
    res.send({ result: 200, data: data });
  });
};

const createPost = (data, res) => {
  new Models.Posts(data).save((err, data) => {
    if (err) throw err;
    res.send({ result: 200, data: data });
  });
};

module.exports = {
  getPosts,
  getPost,
  createPost,
};
