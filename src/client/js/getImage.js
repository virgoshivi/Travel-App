import { image } from ".."

/* Global Variables for Pixabay */
const pixURL = "https://pixabay.com/api/?";
const pixKey = "15978844-66ae615deb62b69c09eb0e5c3";

function getImage(city, tripContainer) {
    const newCity = city;
    let imageInput = tripContainer;

    getData(pixURL, newCity, pixKey, imageInput);
}


const getData = async (pixURL, newCity, pixKey, imageInput) => {

    const res = await fetch(pixURL + 'key=' + pixKey + '&q' + newCity + '&category=travel&safesearch=true&orientation=horizontal&min_width=400&min_height=500&image_type=photo')
    try {

        const dataImage = await res.json();

        const imageDiv = imageInput
        const currentPhoto = document.createElement('img')

        const photosArray = dataImage.hits
            console.log(photosArray)
            if (photosArray.length > 0) {
                //get a random photo from the query
                const imageURL = photosArray[Math.floor(Math.random() * photosArray.length)].webformatURL
                currentPhoto.src = imageURL
            } else {
                //if there are no photos returned from the query, use the default image
                const imageURL = Client.image
                currentPhoto.src = imageURL
            } 

        //Display the image of the destination city

        imageDiv.prepend(currentPhoto)

        console.log(imageDiv)   
        return dataImage;

    } catch (error) {
        console.log("error", error); // appropriately handle the error
    }
}


export { getImage }