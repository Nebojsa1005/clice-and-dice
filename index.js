const carouselImages = document.querySelector('.carousel')
const dotes = document.querySelectorAll('.dot')
const carouselButtons = document.querySelectorAll('.carousel-button')

const numberOfImages = document.querySelectorAll('.image').length
let imageIndex = 0
let translateX = 0

setDotes(imageIndex)
carouselButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        onCarouselButtonClick(event)
        carouselImages.style.transform = `translateX(${translateX}%)`
        setDotes(imageIndex)
    })
})

function onCarouselButtonClick (event ) {
    if (event.target.id === 'prev') {
        if (imageIndex > 0) {
            imageIndex--
            translateX += 100
        } else {
            imageIndex = numberOfImages - 1
            translateX -= 400

        }
    } else {
        if (imageIndex < numberOfImages - 1) {
            imageIndex++
            translateX -= 100;
        } else {
            imageIndex = 0
            translateX = 0
        }
    }
}

function setDotes (index) {
    dotes.forEach((dot, index) => {
        if (imageIndex === index) {
            dot.style.opacity = '1'
        } else {
            dot.style.opacity = '0.5'
        }
    })
}
