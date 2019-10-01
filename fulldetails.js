const blackCircle = document.querySelector(".black-circle");
const redCircle = document.querySelector(".red-circle");
const orangeCircle = document.querySelector(".orange-circle");
const blueCircle = document.querySelector(".blue-circle");
const text = document.querySelector(".color-text")
const tinyText= document.querySelector(".tiny-text")
const smallText= document.querySelector(".small-text")
const mediumText= document.querySelector(".medium-text")
const largeText= document.querySelector(".large-text")
const shoppingCart= document.querySelector(".add-to-bag")





blackCircle.addEventListener("click", (e) => {
	text.textContent = "BLACKBERRY"
})


redCircle.addEventListener("click", (e) => {
	text.textContent = "STRAWBERRY"
})


orangeCircle.addEventListener("click", (e) => {
	text.textContent = "FIRE ORANGE"
})


blueCircle.addEventListener("click", (e) => {
	text.textContent = "CRAZYBERRY"
})

tinyText.addEventListener("click", (e) => {
	tinyText.style.backgroundColor = "#E2E0E0"
})

smallText.addEventListener("click", (e) => {
	smallText.style.backgroundColor = "#E2E0E0"
})

mediumText.addEventListener("click", (e) => {
	mediumText.style.backgroundColor = "#E2E0E0"
})

largeText.addEventListener("click", (e) => {
	largeText.style.backgroundColor = "#E2E0E0"
})

shoppingCart.addEventListener("click", (e) => {
	largeText.style.backgroundColor = "#E2E0E0"
})







