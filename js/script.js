const firstNameInput = document.getElementById("first-name-input")
const submitButton = document.getElementById("submit-button")
console.log("SUdah masuk JSNya")

firstNameInput.addEventListener("keyup", function(event){ 
    var firstName = firstNameInput.value
    if (firstName == "") {
        // disabled
    } else {
        // enabled
    }
})

// Slider

let currentIndex = 0
const images = document.querySelectorAll(".slider-image")
const totalImages = images.length

function changeImage() {
    images[currentIndex].style.display = "none"
    currentIndex = (currentIndex + 1) % totalImages
    images[currentIndex].style.display = "block"
}

setInterval(changeImage, 2000)