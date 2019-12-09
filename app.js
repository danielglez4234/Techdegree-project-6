const express = require('express');
const data = require('./data.json').projects;

const app = express();
app.set('view engine', 'pug');
app.use('/static', express.static('public'));
// app.use(express.static('img'));


const mainRoutes = require('./routes');
const aboutRoutes = require('./routes/about');
const projectsRoutes = require('./routes/projects');

app.use(mainRoutes);
app.use('/about', aboutRoutes);
app.use('/projects', projectsRoutes);



app.use((req, res, next) => {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});

app.listen(3000, () => {
  console.log('The aplication is runnig in the localhost:3000');
});
