const express = require('express');
const router = express.Router();
const project = require('../data.json').projects;

//rendering about.pug with the data
router.get('/', (req, res) => {
  res.render('about');
});

module.exports = router;
