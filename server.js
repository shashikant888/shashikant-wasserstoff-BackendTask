const express = require('express');
const config = require('./config/config');
const apiRoutes = require('./routes/apiRoutes');
const queueRoutes = require('./routes/queueRoutes');
const logger = require('./utils/logger');

const app = express();

app.use(express.json());
app.use(logger);

// Mock APIs
app.get(config.apiEndpoints.fast, (req, res) => {
  setTimeout(() => res.send('Fast response'), 100);
});

app.get(config.apiEndpoints.slow, (req, res) => {
  setTimeout(() => res.send('Slow response'), 2000);
});

app.get(config.apiEndpoints.random, (req, res) => {
  const delay = Math.random() * 3000;
  setTimeout(() => res.send(`Response after ${delay.toFixed(0)} ms`), delay);
});

app.use('/api', apiRoutes);
app.use('/queue', queueRoutes);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
