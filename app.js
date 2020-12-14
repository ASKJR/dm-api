// 3rd party packages
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');

// helpers
const AppError = require('./src/common/appError');
const globalErrHandler = require('./src/common/errorController');
const routes = require('./src/routes/routes');

let path = '';
if (process.env.NODE_ENV === 'dev') {
  path = 'config.env';
} else {
  path = 'config.production.env';
}
dotenv.config({
  path,
});

const app = express();

const corsOpts = {
  origin: '*',
  methods: ['GET', 'PUT', 'POST', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOpts));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// healthcheck
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'DM API v1.0.0',
  });
});

app.use('/', routes);

app.all('*', (req, res, next) => {
  next(
    new AppError(404, 'fail', `Can't find ${req.originalUrl} on this server!`)
  );
});

app.use(globalErrHandler);

// Start the server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Application is running on port ${port}`);
});

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION!!!  shutting down ...');
  console.log(err.name, err.message);
  process.exit(1);
});
