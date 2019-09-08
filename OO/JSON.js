//Create an object
var lamp = {
	"type": "desk",
	"brightnessOfBulb": 60,
	"turnedOn": true,
	manufacturer : {
		name  : "Big Electric Company",
		model : "ABC12",
		locations : ['USA', "Germany", "UK"]
	},
	turnLampOnOrOff : function(){
				console.log("The lamp will turn on or off")
						},
	//Create function to declare what type of lamp we have
	lampReport : function (argument) {
		console.log("This lamp is a " + this.type + " lamp");
	
}				

};

console.log(lamp.type);
console.log(lamp.manufacturer.model);

lamp.turnLampOnOrOff();

console.log(typeof lamp.brightnessOfBulb);
console.log(typeof lamp.manufacturer);


lamp.lampReport();