/* Global Variables for GeoNames*/

let baseURL = 'http://api.geonames.org/searchJSON?q='
const apiKey = '&username=virgoshivi';


function getCoordinates(placename, tripDetails) {
    const city = placename;
    const destinationInput = tripDetails;

    getCity(baseURL, city, apiKey, destinationInput);
}
const getCity = async (baseURL, city, key, destinationInput) => {

    const res = await fetch(baseURL+city+key)
    try {

        const data = await res.json();

        //Extract the country name from the data

        let country = data.geonames[0].countryName;

        const destinationInput1 = destinationInput
        const countryId = document.createElement('h2')
        countryId.innerText = `${city}, ${country}`;
        destinationInput1.insertBefore(countryId, destinationInput1.firstChild)
        console.log(country);

        //Extract the longitude & latitude from the data for displaying weather

        let long = data.geonames[0].lng;
        let lat = data.geonames[0].lat;

        //Displays the current weather
        Client.getWeather(long, lat, destinationInput1)

        return data;

        }
    catch (error) {
        console.log("error", error);  // appropriately handle the error
        }
    }


export { getCoordinates }