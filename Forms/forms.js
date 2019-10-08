document.querySelector("#someInput").addEventListener("input", function (effect) { 

				console.log(effect.target.value);
				})

document.querySelector("#aForm").addEventListener("submit", function (argument) {
		argument.preventDefault();
		console.log(argument.target.elements.firstName.value);
})