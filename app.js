const express = require('express');
const data = require('./data.json').projects;

const app = express();
app.set('view engine', 'pug'); // setting view engine to pug
app.use('/static', express.static('public')); // using the public folder at the address /static

// require all javascript pages
const mainRoutes = require('./routes');
const aboutRoutes = require('./routes/about');
const projectsRoutes = require('./routes/projects');

// use all javascript pages with its respective route
app.use(mainRoutes);
app.use('/about', aboutRoutes);
app.use('/projects', projectsRoutes);


// create an error message for when the user tries to enter an unknown page
app.use((req, res, next) => {
  const err = new Error('Not found');
  err.status = 404;
  console.log(err);
  next(err);
});

// rendering the error page
app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});

// setting the port to 3000
app.listen(3000, () => {
  console.log('The aplication is runnig in the localhost:3000');
});
