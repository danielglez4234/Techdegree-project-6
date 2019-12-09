const express = require('express');
const router = express.Router();
const project = require('../data.json').projects;

router.get('/', (req, res) => {
  console.log('hola paco');
  res.render('about');
});

module.exports = router;
