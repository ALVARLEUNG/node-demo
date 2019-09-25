let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let indexRouter = require('./controller/index');
let usersRouter = require('./controller/users');
let studentsRouter = require('./controller/students.controller');
let mongoose = require('mongoose');

let app = express();

// let MongoClient = require('mongodb').MongoClient;
// let url = "mongodb://localhost:27017/test";

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/students', studentsRouter);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//
// MongoClient.connect(url, { useNewUrlParser: true }, function(err, db) {
//   if (err) throw err;
//   let dbo = db.db("students");
//   // dbo.collection("students"). find({}).toArray(function(err, result) {
//   //   if (err) throw err;
//   //   console.log(result);
//   //   db.close();
//   // });
// });



mongoose.connect('mongodb://localhost:27017/students')

let db = mongoose.connection;

// 连接成功
db.on('open', function(){
  console.log('MongoDB Connection Successed');
});
// 连接失败
db.on('error', function(){
  console.log('MongoDB Connection Error');
});

module.exports = app;
