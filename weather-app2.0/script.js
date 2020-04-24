const cityInput = document.querySelector('.city-input')
const cityName = document.querySelector('.city-name')
const cityTemp = document.querySelector('.temperature')
let weatherDescription = document.querySelector('.description')
const humidity = document.querySelector('.humidity')
const pressure = document.querySelector('.pressure')
const wind = document.querySelector('.wind')
const day1 = document.querySelector('.day-1')
const day2 = document.querySelector('.day-2')
const day3 = document.querySelector('.day-3')
const day4 = document.querySelector('.day-4')
const day5 = document.querySelector('.day-5')



cityInput.addEventListener('keyup', getWeather);

function getWeather (e) {
    if (e.keyCode === 13) {
        event.preventDefault()
        proxy = 'https://cors-anywhere.herokuapp.com/';
        let city = cityInput.value;
        const api = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=5fd991c02604126a3729cb3a26e017ed&units=metric`
        fetch(api)
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data);
                cityInput.value = '';
                cityName.textContent = `${data.city.name}`;
                cityTemp.textContent = `${data.list[0].main.temp} °C`;
                weatherDescription.textContent = `${data.list[0].weather[0].description}`;
                humidity.innerHTML = `<p>Humidity<br>${data.list[0].main.humidity}%`;
                pressure.innerHTML = `<p>Air Pressure<br>${data.list[0].main.pressure} PS`;
                wind.innerHTML = `<p>Wind Speed<br>${data.list[0].wind.speed} km/h`;
                let dateDay1 = data.list[13].dt_txt;
                let date1 = dateDay1.substr(0, 10);
                day1.textContent = `${date1}`;
                document.querySelector('.day-1-temperature').textContent = `${data.list[13].main.temp} °C`
                document.querySelector('.day-1-feel').textContent = `feels like ${data.list[13].main.feels_like} °C`
                document.querySelector('.main-right').classList.remove('hide')
                document.querySelector('.day-weather').classList.remove('hide')
            })
    }
}  