
class Movie{
	constructor(title) {
		this.title = title;
	}


	plot(){
		return "No plot here";
	}

	get name(){
		return this.title
	}

}

class ET extends Movie{
	constructor(){
		super("ET");
	}	

	 plot(){
	 	return "You know the plot";
	 }

	}

class StarWars extends Movie{
	constructor(){
		super("Star Wars");
	}	

	 plot(){
	 	return "You know the plot too";
	 }

	}



class AwfulMovies extends Movie{


	constructor(){
		super("Awful Movies");

	}

	
	plot(){

		return "vomit";		
	}
}

class Jurassic extends Movie{


	constructor(){
		super("Jurassic");

	}
	plot() {
		return "Dino";
	}
}

function selectMovie(){
	let randomNumber = Math.floor(4*Math.random()) +1;
	
	switch (randomNumber){
		case 1:
			return new ET();
		break;
		case 2:
			return new StarWars();
		break;
		case 3:
			return new Jurassic();
		break;
		case 4:
			return new AwfulMovies();
		break;
	}
}

for (let i = 0; i < 10; i++) {
	let movie = selectMovie();
	console.log("Movie" + movie.name +"is  about" + movie.plot());
}

