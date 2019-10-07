let selection = document.querySelectorAll("p");



selection.forEach(function (argu) {

		if(argu.textContent.includes("second")){

			argu.style.color = "green";

		};
	})


