const express = require('express');
const router = express.Router();
const queueController = require('../controllers/queueController');

router.post('/enqueue', queueController.enqueueRequest);
router.get('/process', queueController.processRequest);

module.exports = router;
