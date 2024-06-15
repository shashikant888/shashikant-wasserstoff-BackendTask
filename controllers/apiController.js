const axios = require('axios');
const config = require('../config/config');

exports.handleRequest = async (req, res) => {
  try {
    const response = await axios.get(`http://localhost:${config.port}${req.targetUrl}`);
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Error routing request');
  }
};
