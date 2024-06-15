const Queue = require('../models/queue');

const fifoQueue = new Queue();

exports.enqueueRequest = (req, res) => {
  fifoQueue.enqueue(req.body);
  res.send('Request enqueued');
};

exports.processRequest = (req, res) => {
  if (!fifoQueue.isEmpty()) {
    const request = fifoQueue.dequeue();
    // Process request (for demonstration, we just log it)
    console.log(`Processing request: ${JSON.stringify(request)}`);
    res.send('Request processed');
  } else {
    res.send('Queue is empty');
  }
};
