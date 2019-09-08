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
	//Function to turn lamp on and off
	turnLampOnOrOff : function(){
		//Toggle the lamp status
				if (this.turnedOn)
					this.turnedOn = false;
				else
					this.turnedOn = true;
						},
	//Create function to declare what type of lamp we have
	lampReport : function (argument) {
		console.log("This lamp is a " + this.type + " lamp");

	},

	lampStatus : function(){
		var status = (this.turnedOn ? "on" :"off"); 

		console.log("The lamp is " + status);


	}				

};

lamp.type = "overhead";
console.log(lamp.type);
console.log(lamp.manufacturer.model);

//Challenge


lamp.turnLampOnOrOff();


console.log(typeof lamp.brightnessOfBulb);
console.log(typeof lamp.manufacturer);


lamp.lampReport();
lamp.lampStatus();

//Check to see if it toggles. 

lamp.turnLampOnOrOff();
lamp.lampStatus();