const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');
const routingMiddleware = require('../middlewares/routingMiddleware');

router.post('/route', routingMiddleware, apiController.handleRequest);

module.exports = router;
