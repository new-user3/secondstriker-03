var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const morgan = require('morgan');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var matchRoomRouter = require('./routes/matchRoom');

var app = express();


const frontendProxy = createProxyMiddleware({
  target: 'http://localhost:5173', 
  changeOrigin: true,
  pathRewrite: { '^/frontend': '' },

  onProxyReq: (proxyReq, req, res) => {
    // Set CORS headers
    proxyReq.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    proxyReq.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    proxyReq.setHeader('Access-Control-Allow-Headers', 'content-type');
  },
});

app.use('/frontend', frontendProxy);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/matchroom', matchRoomRouter);

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

module.exports = app;
