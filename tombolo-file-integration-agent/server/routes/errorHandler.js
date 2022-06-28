const logger = require('../config/logger');

const errorHandler = (error, req, res, next) => {
  const log = `message - ${error.message}, stack trace - ${error.stack} | originalUrl: ${req.originalUrl} - method: ${req.method} - ip: ${req.ip}`;
  logger.error(log);
  res.status(error.status || 500).send({ message: error.message });
};

const routeNotFound = (req, res) => {
  logger.error(`Route does not exist; originalUrl: ${req.originalUrl} - method: ${req.method} - ip: ${req.ip}`);
  res.status(404).json({ message: `${req.originalUrl} Not found` });
};

module.exports = { errorHandler, routeNotFound };
