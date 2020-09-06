const axios = require('axios')

const client = axios.create({
  baseURL: 'https://api-v3.idwall.co/'
});

module.exports = client