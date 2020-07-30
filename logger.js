const winston = require("winston");

const logger = winston.createLogger({
  level: "debug",
  format: winston.format.json(),
  // defaultMeta: { service: "bilibili-live-hls" },
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log", level: "info" }),
  ],
});

logger.add(new winston.transports.Console({
  format: winston.format.simple(),
}));

module.exports = logger;