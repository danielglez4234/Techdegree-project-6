const express = require('express');
const router = express.Router();
const project = require('../data.json').projects;

router.get('/', (req, res) => {
  const indexTemplateData = { project: project }
  res.render('index', indexTemplateData);
});

module.exports = router;
