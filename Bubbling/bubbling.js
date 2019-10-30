document.querySelector("#parent").addEventListener("click", function (argument) {
	console.log("Parent Element was clicked");
}, true)

document.querySelector("#child").addEventListener("click", function (argument) {
	
	console.log("Child Element was clicked");
})