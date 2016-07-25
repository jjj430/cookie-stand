
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
	new location("Portland", 17, 88, 5.2),
	new location("Portland Airport", 6, 24, 1.2),
	new location("Washington Sqare", 11, 38, 1.9),
	new location("Sellwood", 20, 48, 3.3),
	new location("Pearl Distict", 3, 24, 2.6)
];

// add table header Salmon Cookie Sales
var table = document.getElementById("locations");
var tableHeader = document.createElement("tr");
var tableHeaderCell = document.createElement("th");
tableHeaderCell.setAttribute("colspan", "5");
tableHeaderCell.innerText = "Salmon Cookie Sales";
tableHeader.appendChild(tableHeaderCell);
table.appendChild(tableHeader);



// Add Column Headers
tableHeader = document.createElement("tr");
tableHeaderCell = document.createElement("th");
tableHeaderCell.innerText = "Location";
tableHeader.appendChild(tableHeaderCell);

for (i=0; i < 8; i++){
	if(i < 2){
		tableHeaderCell = document.createElement("th");
		tableHeaderCell.innerText = i+10 + " am";
		tableHeader.appendChild(tableHeaderCell);
	}
	else if (i==2){
		tableHeaderCell = document.createElement("th");
		tableHeaderCell.innerText = i+10 + " pm";
		tableHeader.appendChild(tableHeaderCell);
	}
	
	else {
		tableHeaderCell = document.createElement("th");
		tableHeaderCell.innerText = (i+10-12) + " pm";
		tableHeader.appendChild(tableHeaderCell);	
	}
}

tableHeaderCell = document.createElement("th");
tableHeaderCell.innerText = "Total";
tableHeader.appendChild(tableHeaderCell);

table.appendChild(tableHeader);


for (var index = 0; index < stores.length; index++) {
  var currentStore = stores[index];
  currentStore.cookieRandomHourlySales();
  currentStore.addInfo();
}

