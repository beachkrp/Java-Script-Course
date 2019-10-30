
// Create a class 
class Auto{
	//create a constructor that defines properties for model and cyliners
	constructor(_model, _cylinder){
		this.model = _model;
		this.cylinder = _cylinder;
	}


	

	get modelName(){
		return this.model;
	}

	get cylinderNo(){
		return this.cylinder;
	}



	start(){

		console.log("We called start");
	}

	accelerate()

	{
		console.log("We called accelerate");
	}

	brake(){

		console.log("We called brake");
	}

}


class Honda extends Auto{

	constructor(cylinder){
		super("Honda", cylinder);
	}

	accelerate(){
		console.log("Accelerating the " +this.model);
	}

	start(){
		console.log("Starting the " + this.model)

	}

	brake(){

		console.log("Braking the " + this.model)
	}


}


class Toyota extends Auto{

	constructor(cylinder){
		super("Toyota", cylinder);
	}

	accelerate(){
		console.log("Accelerating the " +this.model);
	}

	start(){
		console.log("Starting the " + this.model)

	}

	brake(){

		console.log("Braking the " + this.model)
	}


}


class Yugo extends Auto{

	constructor(cylinder){
		super("Yugo", cylinder);
	}

	accelerate(){
		console.log("Accelerating the " +this.model);
	}

	start(){
		console.log("Starting the " + this.model)

	}

	brake(){

		console.log("Braking the " + this.model)
	}


}




class REO extends Auto{

	constructor(cylinder){
		super("REO", cylinder);
	}

	accelerate(){
		console.log("Accelerating the " +this.model);
	}

	start(){
		console.log("Starting the " + this.model)

	}

	brake(){

		console.log("Braking the " + this.model)
	}


}


let yugo = new Yugo(4);
console.log(yugo.modelName)
yugo.brake()
console.log(yugo.cylinderNo)
console.log(yugo.model)