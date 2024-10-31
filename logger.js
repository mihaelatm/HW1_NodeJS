const fs = require("fs");

function logMessage(message) {
  const logEntry = `${new Date().toISOString()} - ${message}\n`;
  fs.appendFile("log.txt", logEntry, (err) => {
    if (err) {
      console.log("Error writing to log file:", err);
    } else {
      console.log("Message logged successfully");
    }
  });
}

module.exports = logMessage;
