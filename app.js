// app.js
const express = require('express');
const axios = require('axios');
const app = express();

const apiKey = "3a5c43c386d9d196fce3ca1caacb0ebe";

app.get('/weather', (req, res) => {
  const { lat, lon } = req.query;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

  axios.get(url)
    .then(response => {
      res.json(response.data);
    })
    .catch(error => {
      res.json({ error: error.message });
    });
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
