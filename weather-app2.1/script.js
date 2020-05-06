const cityInput = document.querySelector(".city-input");
const cityName = document.querySelector(".city-name");
const cityTemp = document.querySelector(".temperature");
let weatherDescription = document.querySelector(".description");
const humidity = document.querySelector(".humidity");
const pressure = document.querySelector(".pressure");
const feelsLike = document.querySelector(".feels-like");
const wind = document.querySelector(".wind");
const acceptLocation = document.querySelector(".accept-location");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
const weatherIcon = document.querySelector(".weather-icon");
const day = document.querySelector(".day");
const day1 = document.querySelector(".day-1");
const day2 = document.querySelector(".day-2");
const day3 = document.querySelector(".day-3");
const day4 = document.querySelector(".day-4");
const day5 = document.querySelector(".day-5");

cityInput.addEventListener("keyup", getWeatherOnSubmit);
window.addEventListener("load", getWeatherOnLoad);

function getWeatherOnLoad(e) {
  navigator.geolocation.getCurrentPosition((data) => {
    const lat = data.coords.latitude;
    const long = data.coords.longitude;
    const api = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=5fd991c02604126a3729cb3a26e017ed&units=metric`;
    apiHit(api);
    setTimeout(function show() {
      acceptLocation.classList.add("hide");
      main.classList.remove("hide");
      footer.classList.remove("hide");
      document.querySelector(".main-left").style.animation =
        "slideinleft .5s ease-in";
      document.querySelector(".main-right").style.animation =
        "slideinright .5s ease-in";
      document.querySelector(".footer").style.animation = "slideup .5s ease-in";
    }, 300);
  });
}

function getWeatherOnSubmit(e) {
  if (e.keyCode === 13) {
    document.querySelector(".main-left").style.animation = "";
    document.querySelector(".main-right").style.animation = "";
    document.querySelector(".footer").style.animation = "";
    main.classList.add("hide");
    footer.classList.add("hide");
    event.preventDefault();
    let city = cityInput.value;
    const api = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=5fd991c02604126a3729cb3a26e017ed&units=metric`;
    apiHit(api);
    setTimeout(function show() {
      main.classList.remove("hide");
      footer.classList.remove("hide");
      document.querySelector(".main-left").style.animation = "show .3s ease-in";
      document.querySelector(".main-right").style.animation =
        "show .3s ease-in";
      document.querySelector(".footer").style.animation = "show .3s ease-in";
    }, 300);
  }
}

function apiHit(api) {
  fetch(api)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // Icon
      getIcon(data);

      // Left side of the screen
      cityInput.value = "";
      cityName.textContent = `${data.city.name}`;
      cityTemp.textContent = `${data.list[0].main.temp} °C`;
      weatherDescription.textContent = `${data.list[0].weather[0].description}`;

      // Right side of the screen
      humidity.innerHTML = `<p>Humidity<br>${data.list[0].main.humidity}%`;
      pressure.innerHTML = `<p>Air Pressure<br>${data.list[0].main.pressure} PS`;
      wind.innerHTML = `<p>Wind Speed<br>${data.list[0].wind.speed} km/h`;
      feelsLike.innerHTML = `<p>Feels Like<br>${data.list[0].main.feels_like}`;

      // Footer info
      nextDaysWeather(data);
    });
}

function getDayName(dateStr, locale) {
  var date = new Date(dateStr);
  return date.toLocaleDateString(locale, { weekday: "long" });
}

function getIcon(data) {
  if (data.list[0].weather[0].description.includes("clouds")) {
    weatherIcon.src = "./images/clouds.png";
  } else if (
    data.list[0].weather[0].description.includes("rain") ||
    data.list[0].weather[0].description.includes("drizzle")
  ) {
    weatherIcon.src = "./images/rain.png";
  } else if (data.list[0].weather[0].description.includes("thunderstorm ")) {
    weatherIcon.src = "./images/thunderstorm.png";
  } else if (data.list[0].weather[0].description.includes("snow ")) {
    weatherIcon.src = "./images/snow.png";
  } else if (data.list[0].weather[0].description.includes("clear ")) {
    weatherIcon.src = "./images/sun.png";
  } else {
    weatherIcon.src = "./images/mist.png";
  }
}

function nextDaysWeather(data) {
  // name of the current day
  let dateDay = data.list[0].dt_txt;
  let date0 = dateDay.substr(0, 10);
  day0date = getDayName(date0, "en-GB");
  day.textContent = `${day0date}`;

  // name and info of tommorow
  let dateDay1 = data.list[9].dt_txt;
  let date1 = dateDay1.substr(0, 10);
  day1date = getDayName(date1, "en-GB");
  day1.textContent = `${day1date}`;
  document.querySelector(
    ".day-1-temperature"
  ).textContent = `${data.list[9].main.temp} °C`;
  document.querySelector(
    ".day-1-feel"
  ).textContent = `feels like ${data.list[9].main.feels_like} °C`;

  // name and info of tommorow+1
  let dateDay2 = data.list[17].dt_txt;
  let date2 = dateDay2.substr(0, 10);
  day2date = getDayName(date2, "en-GB");
  day2.textContent = `${day2date}`;
  document.querySelector(
    ".day-2-temperature"
  ).textContent = `${data.list[17].main.temp} °C`;
  document.querySelector(
    ".day-2-feel"
  ).textContent = `feels like ${data.list[17].main.feels_like} °C`;

  // name and info of tommorow+2
  let dateDay3 = data.list[25].dt_txt;
  let date3 = dateDay3.substr(0, 10);
  day3date = getDayName(date3, "en-GB");
  day3.textContent = `${day3date}`;
  document.querySelector(
    ".day-3-temperature"
  ).textContent = `${data.list[25].main.temp} °C`;
  document.querySelector(
    ".day-3-feel"
  ).textContent = `feels like ${data.list[25].main.feels_like} °C`;

  // name and info of tommorow+3
  let dateDay4 = data.list[33].dt_txt;
  let date4 = dateDay4.substr(0, 10);
  day4date = getDayName(date4, "en-GB");
  day4.textContent = `${day4date}`;
  document.querySelector(
    ".day-4-temperature"
  ).textContent = `${data.list[33].main.temp} °C`;
  document.querySelector(
    ".day-4-feel"
  ).textContent = `feels like ${data.list[33].main.feels_like} °C`;

  // name and info of tommorow+4
  let dateDay5 = data.list[39].dt_txt;
  let date5 = dateDay5.substr(0, 10);
  day5date = getDayName(date5, "en-GB");
  day5.textContent = `${day5date}`;
  document.querySelector(
    ".day-5-temperature"
  ).textContent = `${data.list[39].main.temp} °C`;
  document.querySelector(
    ".day-5-feel"
  ).textContent = `feels like ${data.list[39].main.feels_like} °C`;
}
