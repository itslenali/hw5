const blackCircle = document.querySelector(".black-circle");
const redCircle = document.querySelector(".red-circle");
const orangeCircle = document.querySelector(".orange-circle");
const blueCircle = document.querySelector(".blue-circle");
const text = document.querySelector(".color-text")

blackCircle.addEventListener("mouseover", (e) => {
	text.textContent = "BLACKBERRY"
})


blackCircle.addEventListener("mouseout", (e) => {
	text.textContent = ""
})

redCircle.addEventListener("mouseover", (e) => {
	text.textContent = "STRAWBERRY"
})


redCircle.addEventListener("mouseout", (e) => {
	text.textContent = ""
})

orangeCircle.addEventListener("mouseover", (e) => {
	text.textContent = "FIRE ORANGE"
})


orangeCircle.addEventListener("mouseout", (e) => {
	text.textContent = ""
})

blueCircle.addEventListener("mouseover", (e) => {
	text.textContent = "CRAZYBERRY"
})


blueCircle.addEventListener("mouseout", (e) => {
	text.textContent = ""
})






