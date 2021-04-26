// OpenWeather Info
const openWeatherKey = '9b93f17aff8285d1973f1ba4a3968621';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/';
const userInput = document.getElementsByTagName('input');
const btn = document.getElementById('button');
const days = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`, `Thursday`, `Friday`, `Saturday`];
const today = new Date();
//Elements
const city = document.getElementById('city');
const Day = document.getElementById('day');
const time = document.getElementById('time');
const weather = document.getElementById('Weather');
const icon = document.getElementById('icon');
const temp = document.getElementById('temp');

// Geolocation API
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, fail);
} else {
    alert(`Hmm, you'll need to allow geolocation for the app to work. Please reload the page`)
}

function success(position) {
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${openWeatherKey}`;
    console.log(url);
    const response = fetch(url).then(response => response.json()).then(name=>name.name);
    console.log(response)
}


function fail() {
    alert(`Hmm, you'll need to allow geolocation for the app to work. Once you do, please reload the page`)
}


// AJAX Function 


const getForecast = async (url) => {
    let city = userInput[0].value;
    const urlToFetch = `${weatherUrl}forecast?&q=${city}&APPID=${openWeatherKey}`;
    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            return jsonResponse;
        }
    } catch (error) {
        console.log('error');
    }
}

function executeSearch() {
    getForecast().then(forecast => createForecastHTML(forecast));
}
btn.onclick = executeSearch;
//Rendering Functions
console.log(city)
function createForecastHTML(day) {
    city.innerText = `${day.name}`
    console.log(city);
    Day.innerText = `${days[today.getDay()]}`;
    time.innerText = `${today.getHours()}:${today.getMinutes()}`
    weather.innerText = `${day.list[0].weather[0].description}`
    icon.innerHTML = `<img src="https://openweathermap.org/img/wn/${day.list[0].weather[0].icon}@2x.png">`
}

function convertK2C(k) {
    return k - 273.15;
}