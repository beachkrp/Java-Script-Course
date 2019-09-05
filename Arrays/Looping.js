///Create a new array.

var shoppingList  = ['eggs','milk', 'bread', 'cereal', "soda" , "apples"];

//loop through the array
for (var i = 0; i < shoppingList.length; i++) {

	console.log(shoppingList[i]);
}

//for each loooping method
shoppingList.forEach(function (argument, index) {
	console.log(index + " " + argument);
});