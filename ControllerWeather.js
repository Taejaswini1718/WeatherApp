const request = require('request');
const config = require('../config');

function getWeatherData(lat, lon) {
  return new Promise((resolve, reject) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${config.openWeatherMapApiKey}`;
    request(url, (err, response, body) => {
      if (err) {
        reject(err);
      } else {
        const data = JSON.parse(body);
        resolve(data);
      }
    });
  });
}

module.exports = {
  getWeatherData,
};
