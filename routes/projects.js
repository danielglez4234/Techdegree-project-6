const express = require('express');
const router = express.Router();
const project = require('../data.json').projects;

// requesting the id sent from index.pug
router.get('/:id', (req, res) => {

  const { id } = req.params;
  const { project_name } = project[id];
  const { description } = project[id];
  const { technologies } = project[id];
  const { live_link } = project[id];
  const { github_link } = project[id];
  const { image_urls } = project[id];
  // sending the data to project.pug
  const projectTemplateData = { id, project_name, description, technologies, live_link, github_link, image_urls};
  res.render('project', projectTemplateData);
});



module.exports = router;
