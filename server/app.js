var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var admin = require("firebase-admin");

// Fetch the service account key JSON file contents

// Initialize the app with a service account, granting admin privileges


require('./models/db');
var routes = require('./api/routes');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

const port = process.env.PORT || 9000;
const env = process.env.NODE_ENV || 'development';

app.listen(port, function() {
  console.log('Listening on ' + port);
});

// As an admin, the app has access to read and write all data, regardless of Security Rules

module.exports = app;
