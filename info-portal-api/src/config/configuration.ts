export default () => ({
    port: parseInt(process.env.PORT, 10) || 3000,
    weatherApiKey: process.env.WEATHER_API_KEY,
    weatherApiUrl: process.env.WEATHER_API_URL,
    exchangeRatesApiUrl: process.env.EXCHANGE_RATES_API_URL,
});
