const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');

dotenv.config({
  path: './config/config.env',
});

const WeatherKey = process.env.APPID;

router.get('/', async (req, res) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=${WeatherKey}`
  );

  const weatherData = await response.json();
  res.status(200).json({
    status: true,
    data: weatherData,
  });
});

module.exports = router;
