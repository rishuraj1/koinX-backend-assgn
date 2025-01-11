import axios from "axios";

const fetchCryptoData = async (coinId) => {
  try {
    const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=inr&include_market_cap=true&include_24hr_change=true`;
    const response = await axios.get(url);

    if (response.status !== 200) {
      throw new Error(
        `Failed to fetch data for ${coinId}. Status code: ${response.status}`,
      );
    }

    const data = response.data[coinId];
    if (!data) {
      throw new Error(`No data found for ${coinId}`);
    }

    return data;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch data for ${coinId}`);
  }
};

export { fetchCryptoData };
