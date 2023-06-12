'use strict';

const body = document.querySelector('body')

body.classList.add('blur')

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback)
} else {
  alert("Error, Please update your browser")
}

const apiKey = 'd08762f93d957958a59bd2cb6bc90bf0'
const city = 'Kathmandu'
let lat;
let long

// Success
function successCallback(position) {
  lat = position.coords.latitude
  long = position.coords.longitude


  const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${apiKey}`;
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const temp = Math.round((data.current.temp - 273.15) * 10) / 10
      const humidity = data.current.humidity
      const windSpeed = data.current.wind_speed
      console.log(data)
      heading.textContent = data.timezone.split('/' ).join(', ')
      para.textContent = `The temperature is ${temp} °C with ${humidity}% humidty and the windspeed ${windSpeed} m/s`

      body.classList.remove('blur')
    }).catch(error => {
      console.log("Error, Please refresh or come back later", error)
      body.classList.remove('blur')
    })
}

// Error

function errorCallback(error) {
  alert("An error occured while retrieving location. Try again", error.message)
}

// DOM Manipulations

const para = document.querySelector('.primary-para')
const heading = document.querySelector('.primary-heading')
const sec_head = document.querySelector('.secondary-heading')


sec_head.textContent = `${new Date().getDate()}, ${new Date().getMonth()}, ${new Date().getFullYear()}`

