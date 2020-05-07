const express = require('express');
const morgan = require('morgan')

const routes = require('./routes.js');

const app = express();

app.use(morgan('dev'));
app.set('view engine','pug');
app.use(routes);

module.exports = app;

// const port = 8080;
// app.listen(port,()=>console.log(`Listening on port ${port}...`))
