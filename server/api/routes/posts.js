const express = require('express');
const router = express.Router();
const Post = require('../models/Posts');
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');

//Get all Posts
//.exec() is async which could be used in place of try/catch. Will need to test
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find({
      //A workaround to filtering out posts by id using the exclude query key
      $and: [{ _id: { $ne: req.query.exclude } }],
    }).setOptions({
      limit: parseInt(req.query.limit),
      sort: req.query.sort,
    });
    res.json({ status: 'success', data: posts });
  } catch (err) {
    console.log(err);
    res.json({ status: 'fail', message: err.message });
  }
});

//Get post by id
router.get('/:postid', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postid);
    await post.validate();
    res.json({ status: 'success', data: [post] });
  } catch (err) {
    res.json({ status: 'fail', message: err.message });
  }
});

//Add a Post
//Route Needs to be locked down
router.post('/publish', async (req, res) => {
  const {
    status,
    timeToRead,
    author,
    title,
    subTitle,
    content,
    src,
  } = req.body;
  const post = new Post({
    status,
    timeToRead,
    author,
    title,
    subTitle,
    content,
    src,
  });

  try {
    await post.validate();
    post.save();
    res.json({
      status: 'success',
      data: post,
    });
  } catch (err) {
    console.log(err);
    res.json({ status: 'fail', message: err.message });
  }
});

module.exports = router;
