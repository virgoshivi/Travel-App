/* Global Variables for Weatherbit */

let baseURLweather = 'https://api.weatherbit.io/v2.0/forecast/daily?'
const apiKeyWeather = 'bef1d9eb5908468e9db3cdf967b25bbd';

function getWeather(long, lat, tripContainer) {
    const newLong = long;
    const newLat = lat;
    let weatherInput = tripContainer;

    getData(baseURLweather, newLat, newLong, apiKeyWeather, weatherInput);

}


const getData = async (baseURLweather, newLat, newLong, apiKeyWeather, weatherInput) => {

    const res = await fetch(baseURLweather + '&lat=' + newLat + '&lon=' + newLong + '&key=' + apiKeyWeather)
    try {

        const dataWeather = await res.json();

        const newWeatherDiv = document.createElement('div')
        newWeatherDiv.className = 'weather'

        // Dynamically creates the element to display weather

        const weatherSummary = document.createElement('p')
        const temperature = dataWeather.data[0].temp

        //Displays the current temperature

        weatherSummary.innerHTML = `Right now it's ${temperature} &deg;C`
        newWeatherDiv.appendChild(weatherSummary)

        //Displays the minimun & maximum temperature

        const tempLow = document.createElement('p')
        const temperatureLow = dataWeather.data[0].low_temp
        const temperatureHigh = dataWeather.data[0].high_temp
        tempLow.innerHTML = `Min: ${temperatureLow} &deg;C  Max: ${temperatureHigh} &deg;C`
        newWeatherDiv.appendChild(tempLow)
        weatherInput.appendChild(newWeatherDiv)
        console.log(newWeatherDiv)   
        return dataWeather;

    } catch (error) {
        console.log("error", error); // appropriately handle the error
    }
}


export { getWeather }