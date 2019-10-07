let mySelection = document.querySelectorAll('p');

mySelection.forEach(  function(para) {

	if (para.textContent.includes("***")) 
		{para.remove();}
	
})