const removeTrip = (element) => {
    const tripDetails = element.parentNode
    const trip = tripDetails.parentNode

    trip.remove()
   
}

export { removeTrip }