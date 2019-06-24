//parent 

class Plant{
	constructor(name, description, species, age, size) {
		this.name = name;
		this.description = description;
		this.species = species;
		this.age = age;
		this.size = size;
		
	}
	
	grow(year){
		 		  
		  if (Number.isInteger(year)){
			  var int = parseInt(this.age, 10);
			  this.age = int + year;
		  alert('age was increased and now is ' + this.age );
		  
	}
		  else {
			  alert('Sorry but the age is not numeric ');}
		  }
	
	updatedescr(descr){
		 this.description = descr;
		  alert('description was updated: ' + this.description);
		  
	}
	
	getter(name, descr, species, age , size){
		 alert ( "Plant name: " + this.name  + "\nPlant description: " + this.description  + "\nPlant species: " + this.species  + "\nPlant age: " + this.age  + "\nPlant size: " + this.size);
		 
	}
	
}

//childs
class Plantspruce extends Plant{
	constructor(name, descr, species, age , size){	
		super(name, descr, species, age , size);
	    this.hazard_class = 'Dangerous';
	    this.color = 'blue';
	    
	}
	
	gowild(){
		alert ("Spruce is going wild because hazard class is: " + this.hazard_class)	
		
	}
}

class Plantfern extends Plant{
	constructor(name, descr, species, age , size){	
		super(name, descr, species, age , size);
		this.hazard_class = 'Loyal';
		this.growth = 'VERY tall';
		
	}
	
	loyalty(){
		alert ("fern is loyal to everybody ")	
		
	}
}


//Functions for buttons click
function Set(){
	  type    = document.getElementById('Type').value;
	  name    = document.getElementById('plant_name').value;
	  descr   = document.getElementById('plant_description').value;
	  species = document.getElementById('plant_species').value;
	  age     = document.getElementById('plant_age').value;
	  size    = document.getElementById('plant_size').value;
		
	 
	 if (type === 'spruce') {
		 plant = new Plantspruce( name, descr, species, age , size); 
		
	} else {

		plant = new Plantfern( name, descr, species, age , size); 
		
	}
	 	
}

function Get(){
	
	plant.getter(name, descr, species, age , size);
		
}

function wild(){
	try {
		plant.gowild();
	} catch (e) {
		alert ("Unfortunately the type of plant is not spruce");
	}
			
}

function Loyal(){
	
	try {
		plant.loyalty();
	} catch (e) {
		alert ("Unfortunately the type of plant is not fern");
	}
			
}

function Growing(){
	var text=prompt('Enter number of years to grow');	
	var int =  parseInt(text, 10);
	plant.grow(int);
		
}
