// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  // eslint-disable-next-line no-param-reassign
  err.statusCode = err.statusCode || 500;
  // eslint-disable-next-line no-param-reassign
  err.status = err.status || 'error';
  //   stack: err.stack,
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
  });
};
