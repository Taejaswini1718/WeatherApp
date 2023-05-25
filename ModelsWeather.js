const Weather = require('../controllers/weather');

function getWeather(lat, lon) {
  return Weather.getWeatherData(lat, lon);
}

module.exports = {
  getWeather,
};
