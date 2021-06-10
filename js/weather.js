const API_KEY = "3ebc3450727d12b84eff9568ade67f0a";

const weather_location = document.querySelector(".weather-location"),
  weather_temperature = document.querySelector(".weather-temperature"),
  weather_icon = document.querySelector(".weather-icon");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const { icon } = data.weather[0];
      weather_icon.innerHTML = `<img src="icons/${icon}.png">`;
      weather_temperature.innerText = `${data.weather[0].main} / ${data.main.temp}C`;
    });
}

function onGeoError() {
  alert("Check your location");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
