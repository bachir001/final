var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var express = require('express');
var multer = require('multer')
var path = require('path');


const multerStorage = multer.diskStorage({
  destination: path.join(__dirname, './public/uploads'),
  filename: (req, file, cb) => {
      const date = Date.now();
      const profilepic = date + path.extname(file.originalname)
      cb(null, profilepic);
  }
})

const upload = multer({ storage: multerStorage });

    

require('dotenv').config()
var mongoose = require('mongoose');
var bodyParser = require('body-parser');




mongoose.connect(process.env.connectionString, {
  dbName: process.env.dbnam,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,

}, () => {
  console.log("connected")
});



var usersRouter = require('./routes/users')(upload);
var shopsRouter = require('./routes/shops');
var subsRouter = require('./routes/subscribers');
var contactRouter= require('./routes/contacts');
var reviewRouter= require('./routes/reviews');
// const { Console } = require('console');

var app = express();



var cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/shops', shopsRouter);

app.use('/subs', subsRouter);

app.use('/contact', contactRouter);

app.use('/review',reviewRouter);

app.use('/users', usersRouter);


app.get('/', function (req, res) {
  res.send("hi express");

})



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;