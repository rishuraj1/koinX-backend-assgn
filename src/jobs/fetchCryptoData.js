import { CronJob } from "cron";
import Crypto from "../models/crypto.js";
import { fetchCryptoData } from "../services/coinGeckoService.js";
import logger from "../utils/logger.js";

const coins = ["bitcoin", "ethereum", "matic-network"];

const fetchAndStoreCryptoData = async () => {
  try {
    for (const coin of coins) {
      const data = await fetchCryptoData(coin);
      logger.info(`Fetched data for ${coin}`);
      //   const record = new Crypto({
      //     coin,
      //     price: data.inr,
      //     marketCap: data.inr_market_cap,
      //     change24h: data.inr_24h_change,
      //   });
      //   await record.save()
    }
    logger.info("Data saved successfully");
  } catch (error) {
    logger.error(
      `Error occurred while fetching/storing data: ${error.message}`,
    );
  }
};

const job = new CronJob("0 */2 * * *", fetchAndStoreCryptoData);
