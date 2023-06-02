'use strict';

const apiKey = 'd08762f93d957958a59bd2cb6bc90bf0'
const city = 'Kathmandu'
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const temp = data.main.temp - 273.15
    const humidity = data.main.humidity
    const windSpeed = data.wind.speed

    console.log(temp)
    console.log(humidity)
    console.log(windSpeed)
}).catch(error => {
  console.log("Error, Please refresh or come back later", error)
})