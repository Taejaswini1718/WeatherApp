const express = require('express');
const request = require('request');
const config = require('../config');

const router = express.Router();

router.get('/weather', (req, res) => {
  const { lat, lon } = req.query;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${config.openWeatherMapApiKey}`;
  request(url, (err, response, body) => {
    if (err) {
      res.status(500).json({ error: err });
    } else {
      const data = JSON.parse(body);
      res.json(data);
    }
  });
});

module.exports = router;
