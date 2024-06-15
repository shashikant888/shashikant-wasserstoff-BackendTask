const config = require('../config/config');

module.exports = (req, res, next) => {
  const { apiType } = req.body;

  if (apiType === 'fast') {
    req.targetUrl = config.apiEndpoints.fast;
  } else if (apiType === 'slow') {
    req.targetUrl = config.apiEndpoints.slow;
  } else {
    req.targetUrl = config.apiEndpoints.random;
  }

  // Log routing decision
  console.log(`Routing to ${req.targetUrl}`);
  next();
};
