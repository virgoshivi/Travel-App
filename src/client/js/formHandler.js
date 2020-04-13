const handleSubmit = (event) => {
    event.preventDefault()
    const departure =  document.getElementById('date_picker').value;
    const returnDate =  document.getElementById('returnDatePicker').value;
    const city =  document.getElementById('city').value;
    
    let formData = {
        departure: departure,
        returnDate: returnDate,
        city: city
    }
    
    //if all form fields are filled in, then process the data

    if (Client.validateForm(formData).length === 0) {

        const departureMsec = Date.parse(departure)
        
        const tripDetails = document.getElementById('upcomingTrips')

        const tripContainer = document.createElement('div')
        tripContainer.className = 'tripContainer'
        const newTripDiv = document.createElement('div')
        newTripDiv.className = 'tripDetails'
        
        //Displays the image of the destination city

        Client.getImage(city, tripContainer)
      

        //Displays the destination city & country

        Client.getCoordinates(city, tripContainer)

        //Displays the trip dates

        const dateRange = document.createElement('h3')
        const tripDates = `${departure} - ${returnDate}`
        dateRange.innerText = `Trip Dates: ${tripDates}`
        newTripDiv.appendChild(dateRange)

        //Displays the countdown

        const countdown = document.createElement('h3')
        countdown.innerText = Client.countdown(departureMsec)
        newTripDiv.appendChild(countdown)

        //show the remove trip button

        const removeTripButton = document.createElement('button')
        removeTripButton.className = 'removeTripButton'
        removeTripButton.type = 'submit'
        removeTripButton.innerText = 'Remove Trip'
        removeTripButton.addEventListener('click', function(event) {
            Client.removeTrip(this)
        })
        newTripDiv.appendChild(removeTripButton)

        tripContainer.appendChild(newTripDiv)
        tripDetails.appendChild(tripContainer)
        
        //Hide the form and show the addTripButton when form is successfully submitted

        const addTripDiv = document.getElementById('addTripDiv')
        const tripForm = document.getElementById('tripForm')
        tripForm.style.display = 'none'
        addTripDiv.style.display = 'block'

        //if first trip, add the section title to the dom

        const upcomingTripsTitle = document.getElementById('upcomingTripsTitle')
        if (upcomingTripsTitle.style.display = 'none') {
            upcomingTripsTitle.style.display = 'block'
        }

        //clear the form fields

        document.getElementById('date_picker').value = null
        document.getElementById('returnDatePicker').value = null
        document.getElementById('city').value = null

    }

    //if the form is not valid (not all form fields are filled in), then show errors and do not process the form
    else {
        document.getElementById('errors').innerHTML = Client.validateForm(formData).join("<br>")
    }
}

export { handleSubmit }