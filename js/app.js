'use strict';

const apiKey = 'd08762f93d957958a59bd2cb6bc90bf0'
const city = 'Kathmandu'
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

const para = document.querySelector('.primary-para')
const heading = document.querySelector('.primary-heading')
const sec_head = document.querySelector('.secondary-heading')

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const temp = Math.round((data.main.temp - 273.15) * 10 ) / 10 
    const humidity = data.main.humidity
    const windSpeed = data.wind.speed

    heading.textContent = city
    para.textContent = `The temperature is ${temp} °C with ${humidity}% humidty and the windspeed ${windSpeed}`
    
}).catch(error => {
  console.log("Error, Please refresh or come back later", error)
})

sec_head.textContent = new Date().getFullYear()

if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
} else {
  alert("Error, Please update your browser")
}

function successCallback(position) {
  let latitude = position.coords.latitude
  let longitude = position.coords.longitude
}

function errorCallback(error) {
  alert("An error occured while retrieving location. Try again", error.message)
}