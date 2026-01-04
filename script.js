const hamburger = document.getElementById("hamburger");
const rightMenu = document.getElementById("rightMenu");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	rightMenu.classList.toggle("active");
});