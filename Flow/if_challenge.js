//Create a variable to hold the temperature

let temp = 78;

//Test for hot temperature
if (temp >90) {
	//Output for hot
	console.log("The temperature is hot");
} 
//test for cold temperature
else if (temp <=35) {
	//Output for cold
	console.log("The temperature is cold");	
} //Test for "not so hot" temperaure
else if (temp > 78){
	//Output for not so hot temperature
	console.log("The temperature is not so hot");	
} // Test for cool temperature 
else if (temp <55) {
	//Output for cool temperature
	console.log("The temperature is cool");
}
else
{	//by default moderate temperature
	console.log("The temperature is moderate");
}