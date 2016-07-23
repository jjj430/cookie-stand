
function location(name, min, max, ave){
	this.name = name;
	this.min = min;
	this.max = max;
	this.ave = ave;
	var hourlyCookiesSales: [];
	var total = 0;
	this.cookieHourlySales = function(min, max){
		for(var i=0; i < 8; i++){
			var randomNumberRange = (Math.random() * (this.max - this.min + 1))
			+ this.min;
			this.hourlyCookiesSales[i] = Math.floor(randomNumberRange * this.ave);
			this.total += this.hourlyCookiesSales[i];
		
		}
	}
}

		


var portland = new location("portland", 17, 88);

/*
var pdxAirport = new location("pdxAirport", 6, 24);
var washingtonSq = new location("washingtonSq", 11, 38);
var sellwood = new location("sellwood", 20, 48);
var pearlDist = new location("pearlDist", 3, 24);
*/
