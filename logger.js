const fs = require("fs");

function logMessage(message) {
  const logEntry = `${new Date().toISOString()}: ${message}\n`;
  fs.appendFile("log.txt", logEntry, (err) => {
    if (err) {
      console.error("Error writing to log file:", err);
    }
  });
}

module.exports = { logMessage };
