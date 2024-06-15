const fs = require('fs');
const logFile = fs.createWriteStream('logs/logs.txt', { flags: 'a' });

module.exports = (req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    const logEntry = `Method: ${req.method}, URL: ${req.originalUrl}, Duration: ${duration} ms\n`;
    logFile.write(logEntry);
    console.log(logEntry);
  });
  next();
};
