// SELECTORS
const cityInput = document.querySelector('.city-input')
const getWeatherButton = document.querySelector('.weather-btn')
const cityName = document.querySelector('.city-name')
const cityTemp = document.querySelector('.temperature')
let weatherDescription = document.querySelector('.description')
const weatherIcon = document.querySelector('.icon')


// EVENT LISTENERS
getWeatherButton.addEventListener('click', getWeather);

// FUNCTIONS
function getWeather(event){
    event.preventDefault()
    if(cityInput.value == ''){
        return;
    }
    let city = cityInput.value;
    const api = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5fd991c02604126a3729cb3a26e017ed&units=metric`
    fetch(api)
        .then(response => {
            return response.json()
        })
        .then(data =>{
            if(data.cod === '404'){
                cityName.innerHTML = `<p>Please enter a real city</p>`;
                cityTemp.innerHTML = '';
                weatherDescription.innerHTML = '';
                weatherIcon.classList.add('hide');
            } else {
                cityName.innerHTML = `<p>City: ${data.name}</p>`;
                cityTemp.innerHTML = `<p> Temperature: ${data.main.temp}°C </p>`;
                weatherDescription.innerHTML = `<p>Description: ${data.weather[0].description}</p>`;
                weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
                weatherIcon.classList.remove('hide');
            }
            cityInput.value = '';
        })
}