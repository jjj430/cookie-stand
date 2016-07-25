
function location(name, min, max, ave){
	this.name = name;
	this.min = min;
	this.max = max;
	this.ave = ave;
	this.hourlyCookiesSales = [];
	this.total = 0;
	this.cookieRandomHourlySales = function(){
		for(var i=0; i < 8; i++){
			var randomNumberRange = (Math.random() * (this.max - this.min + 1))
				+ this.min;
			this.hourlyCookiesSales[i] = Math.floor(randomNumberRange * this.ave);
			this.total += this.hourlyCookiesSales[i];
			console.log(this.hourlyCookiesSales[i]);
			
		}
		console.log("total " + this.total);
		
	};
	
	this.addInfo = function() {
			var locationRow = document.createElement("tr");
			var nameCell = document.createElement("td");
			nameCell.innerText = this.name;
			locationRow.appendChild(nameCell);
			
			for (var i=0; i < 8; i++){
				var cookieCell = document.createElement("td");
				cookieCell.innerText = this.hourlyCookiesSales[i];
				locationRow.appendChild(cookieCell);
			}
			
			var totalCell = document.createElement("td");
			totalCell.innerText = this.total;
			locationRow.appendChild(totalCell);
			
			var table = document.getElementById("locations");
			table.appendChild(locationRow);
	};
	
}

var stores = [
	new location("portland", 17, 88, 5.2),
	new location("pdxAirport", 6, 24, 1.2),
	new location("washingtonSq", 11, 38, 1.9),
	new location("sellwood", 20, 48, 3.3),
	new location("pearlDist", 3, 24, 2.6)
];

for (var index = 0; index < stores.length; index++) {
  var currentStore = stores[index];
  currentStore.cookieRandomHourlySales();
  currentStore.addInfo();
}

/*
portland.cookieRandomHourlySales();
portland.addInfo();


pdxAirport.cookieRandomHourlySales();
pdxAirport.addInfo();


washingtonSq.cookieRandomHourlySales();
washingtonSq.addInfo();


sellwood.cookieRandomHourlySales();
sellwood.addInfo();


pearlDist.cookieRandomHourlySales();
pearlDist.addInfo();

*/