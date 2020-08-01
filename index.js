const { isLive } = require("./api");
const { startRecord } = require("./record");
const logger = require("./logger");
const config = require("./config");

async function loop() {
  let live = await isLive(config.roomId);
  if (!live) {
    logger.debug("Not live");
    return;
  }

  logger.info("Live, starting record");
  await startRecord(config.roomId);
}

async function main() {
  let fn = async () => {
    try {
      await loop();
    } catch (error) {
      logger.error("Check failed", error);
    }
    setTimeout(fn, config.checkInterval + Math.round(Math.random() * 30) * 1000);
  };
  fn();
}

main();
