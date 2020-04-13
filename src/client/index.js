import { initialize } from './js/initialize'
import { addTrip } from './js/addTrip'
import { handleSubmit } from './js/formHandler'
import { validateForm } from './js/validateForm'
import { countdown } from './js/countdown'
import { getCoordinates } from './js/getCoordinates'
import { getWeather } from './js/getWeather'
import { getImage } from './js/getImage'
import { removeTrip } from './js/removeTrip'
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'
import image from './globe.png'


window.addEventListener('load', (event) => {
    console.log('page loaded')
    initialize();
});

export {
    initialize,
    addTrip,
    handleSubmit,
    validateForm,
    countdown,
    getCoordinates,
    getWeather,
    getImage,
    removeTrip,
    image,
    
}
