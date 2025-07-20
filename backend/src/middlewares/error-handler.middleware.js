const errorHandler = (err, _req, res, _next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    stack: err.stack,
  });
};

module.exports = errorHandler;
