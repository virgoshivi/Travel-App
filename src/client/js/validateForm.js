const validateForm = (formData) => {
    //if any of the form fields are not filled out, add them to the errors array

    let errors = []
    if (!formData.departure) {
        errors.push('Please enter a departure date')
    }
    if (!formData.returnDate) {
        errors.push('Please enter a return date')
    }
    if (!formData.city) {
        errors.push('Please enter a city')
    }

    return errors
}

export { validateForm }