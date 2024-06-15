// const fs = require('fs');
// const path = require('path');

// const logFilePath = path.join(__dirname, '../logs/logs.txt');
// const logFile = fs.createWriteStream(logFilePath, { flags: 'a' });

// module.exports = (req, res, next) => {
//   const start = Date.now();
//   res.on('finish', () => {
//     const duration = Date.now() - start;
//     const logEntry = `Method: ${req.method}, URL: ${req.originalUrl}, Duration: ${duration} ms\n`;
//     logFile.write(logEntry, (err) => {
//       if (err) {
//         console.error('Error writing to log file:', err);
//       }
//     });
//     console.log(logEntry);
//   });
//   next();
// };