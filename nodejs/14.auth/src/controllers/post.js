const posts = require('../models/post');

function getPosts(req, res) { res.json(posts); } // 게시물 데이터를 반환

module.exports = {getPosts};