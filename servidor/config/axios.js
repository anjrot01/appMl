const axios = require("axios");

const axiosServer = axios.create({
  baseURL: "https://api.mercadolibre.com"
});

module.exports = { axiosServer };
