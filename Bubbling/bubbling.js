document.querySelector("#parent").addEventListener("click", function (argument) {
	console.log("Parent Element was clicked");
})

document.querySelector("#child").addEventListener("click", function (argument) {
	argument.stopPropagation();
	console.log("Child Element was clicked");
})