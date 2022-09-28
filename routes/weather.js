const express = require('express');
const router = express.Router();

const APPID = require('../config/secret');

router.get('/', async (req, res) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=Sydney,au&APPID=${APPID}`
  );

  const weatherData = await response.json();

  res.status(200).json({
    status: true,
    data: weatherData,
  });
});

module.exports = router;
