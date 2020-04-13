const initialize = () => {
    const submit = document.getElementById('submit')
    submit.addEventListener('click', Client.handleSubmit) 

    const addTripButton = document.getElementById('addTripButton')
    addTripButton.addEventListener('click', Client.addTrip)
}

export { initialize }