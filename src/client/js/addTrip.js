const addTrip = () => {
    const addTripDiv = document.getElementById('addTripDiv')
    const tripForm = document.getElementById('tripForm')
   
    tripForm.style.display = 'block'
    addTripDiv.style.display = 'none'

}
                                                                            
export { addTrip }