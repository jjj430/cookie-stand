
function location(name, min, max){
	this.name = name;
	this.min = min;
	this.max = max;
	this.randomGen = function(min, max){
	  for(var i=0; i < 8; i++){
	  var randomNum[] = Math.floor((Math.random() * (max - min + 1))) + min;
	  document.write(randomNum + "\n");
	}
}
}



var portland = new location("portland", 17, 88);
var pdxAirport = new location("pdxAirport", 6, 24);
var washingtonSq = new location("washingtonSq", 11, 38);
var sellwood = new location("sellwood", 20, 48);
var pearlDist = new location("pearlDist", 3, 24);