// OpenWeather Info
const openWeatherKey = '9bd9831354bba0cbdcdeb62969eb416f';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast';
const userInput = document.getElementsByTagName('input');
const btn = document.getElementById('button');
const days = [`Sunday`, `Monday`, `Tuesday`, `Wednesday`,`Thursday`,`Friday`,`Saturday`];
const today = new Date();
// AJAX Function 
const getForecast = async () => {
    let city = userInput[0].value;
    const urlToFetch = `${weatherUrl}?&q=${city}&APPID=${openWeatherKey}`;
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
getForecast().then( forecast => createForecastHTML(forecast));


}
btn.onclick = executeSearch;
//Rendering Functions

function createForecastHTML(day) {
    
    let city = document.getElementById('city');
    city.innerText = `${day.city.name}`
    let Day = document.getElementById('day');
    Day.innerText = `${days[today.getDay()]}`;
    let time = document.getElementById('time');
    time.innerText = `${today.getHours()}:${today.getMinutes()}`
    let weather = document.getElementById('Weather');
    weather.innerText = `${day.list[0].weather[0].description}`
    let icon = document.getElementById('icon');
    icon.innerHTML= `<img src="https://openweathermap.org/img/wn/${day.list[0].weather[0].icon}@2x.png">`
    let temp = document.getElementById('temp');
}

function convertK2C(k){
    return k-273.15;
}
