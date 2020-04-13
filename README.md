# Project Summary

This is a travel app in which user can add trip and remove trip. User can see the weather (current temperature, minimum & maximum temperature) of the destination city, the photo of the city, travelling dates and the time left for the trip.

## API used
This application uses the Geonames API to obtain the name of the country, longitude and latitude of a location, the Weatherbit API to obtain the weather data and the Pixabay API to obtain a photo of the location.



## File Structure
The project has the following file structure
    
    - dist/
    - node_modules/ 
    - src/
        - client/
            - js/
		- addTrip.js
		- countdown.js
                - formHandler.js
		- getCoordinates.js
		- getImage.js
		- getWeather.js
		- initialize.js
		- removeTrip.js
                - validateForm.js
            - styles/
            - views/
                - images/
                - index.html
            - index.js
        
        - server/ 
            - app.js
            

    - _tests_
        - app.test.js.js
        - validateForm.test.js
    
    - .babelrc
    - .gitignore
    - .env
    - package-lock.json
    - package.json
    - README.md
    - REQUIREMENTS.md
    - webpack.dev.js
    - webpack.prod.js



```
## Running the project
- `npm run build-dev` (development environment) or `npm run build-prod` (production environment)
- `npm run start`

## Testing
- `npm run test`
