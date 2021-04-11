// OpenWeather Info
const openWeatherKey = '9bd9831354bba0cbdcdeb62969eb416f';
const weatherUrl = 'https://api.openweathermap.org/data/2.5/forecast';
const userInput = document.getElementsByTagName('input');
const btn = document.getElementById('button');

// AJAX Function 
const getForecast = async () => {
    let city = userInput[0].value;
    const urlToFetch = `${weatherUrl}?&q=${city}&APPID=${openWeatherKey}`;
    try {
        const response = await fetch(urlToFetch);
        if (response.ok) {
            // console.log(response.json());
            var jsonResponse = await response.json();
            const city_name = JSON.stringify(jsonResponse.city.name);
            console.log(city_name);
            const forecasts_40 = jsonResponse.list;
            console.log(forecasts_40);

            return city_name;

        }
    } catch (error) {
        console.log('error');
    }
}

btn.onclick = getForecast;
console.log(getForecast());

//Rendering Functions

function createForecastHTML(day) {
    let city = document.getElementById('city');
    city.append(`<p> ${getForecast.city.name}`);
}