const express = require('express');
const dotenv = require('dotenv');
// Routes
const weather = require('./routes/weather');

dotenv.config({
  path: './config/config.env',
});

const app = express();
const PORT = process.env.PORT || 5000;
const WeatherKey = process.env.APPID;
app.use('/api/v1/weather', weather);

app.listen(
  PORT,
  console.log(
    `Server is running on ${process.env.NODE_ENV} mode on PORT: ${PORT}`
  )
);
