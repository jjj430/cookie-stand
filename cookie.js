var locationOne = {
	name: "Portland Food Cart",
	minCustomer: 17,
	maxCustomer:88,
	aveCookieSale: 5.2,
    hourlyCookiesSales: [],
	total:0,
	
	randomGen: function(){
	  for(var i=0; i < 8; i++){
		var randomCust = (Math.random() * (this.maxCustomer - this.minCustomer + 1))
			+ this.minCustomer;
		this.hourlyCookiesSales[i] = Math.floor(randomCust * this.aveCookieSale);
		this.total += this.hourlyCookiesSales[i];
		
	  }
	  
	  var nameLocation = document.createElement("h3");  //create element
	  var newText = document.createTextNode(this.name);  //give it content
	  nameLocation.appendChild(newText);
	  document.getElementById("localName").appendChild(nameLocation);
	  	  
	  for (var i = 0; i < 8; i++) {	  
		var nameLocation = document.createElement("li");  //create element
		if (i<3){
		var newText = document.createTextNode( (i+10)+ " am: " + this.hourlyCookiesSales[i]);  //give it content
		nameLocation.appendChild(newText);
		document.getElementById("listAve").appendChild(nameLocation);
		}  
		else {
		var newText = document.createTextNode( (i+10- 12)+ " pm: " + this.hourlyCookiesSales[i]);  //give it content
		nameLocation.appendChild(newText);
		document.getElementById("listAve").appendChild(nameLocation);
		}
	  }
	
	  nameLocation = document.createElement("li");  //create element
	  newText = document.createTextNode("total: " + this.total);  //give it content
		nameLocation.appendChild(newText);
		document.getElementById("listAve").appendChild(nameLocation);
    }
};

locationOne.randomGen();


var locationTwo = {
	name: "Portland Airport",
	minCustomer: 6,
	maxCustomer:24,
	aveCookieSale: 1.2,
    hourlyCookiesSales: [],
	total:0,
	
	randomGen: function(){
	  for(var i=0; i < 8; i++){
		var randomCust = (Math.random() * (this.maxCustomer - this.minCustomer + 1))
			+ this.minCustomer;
		this.hourlyCookiesSales[i] = Math.floor(randomCust * this.aveCookieSale);
		this.total += this.hourlyCookiesSales[i];
		
		// document.write(this.hourlyCookiesSales[i] + "\n");
	  }
	  // document.write(this.total + "\n");
	  
	  var nameLocation2 = document.createElement("h3");  //create element
	  var newText = document.createTextNode(this.name);  //give it content
	  nameLocation2.appendChild(newText);
	  document.getElementById("localName2").appendChild(nameLocation2);
	  	  
	  for (var i = 0; i < 8; i++) {	  
		var nameLocation2 = document.createElement("li");  //create element
		if (i<3){
		var newText = document.createTextNode( (i+10)+ " am: " + this.hourlyCookiesSales[i]);  //give it content
		nameLocation2.appendChild(newText);
		document.getElementById("listAve2").appendChild(nameLocation2);
		}  
		else {
		var newText = document.createTextNode( (i+10- 12)+ " pm: " + this.hourlyCookiesSales[i]);  //give it content
		nameLocation2.appendChild(newText);
		document.getElementById("listAve2").appendChild(nameLocation2);
		}
	  }
	
	  nameLocation2 = document.createElement("li");  //create element
	  newText = document.createTextNode("total: " + this.total);  //give it content
		nameLocation2.appendChild(newText);
		document.getElementById("listAve2").appendChild(nameLocation2);
    }

};

locationTwo.randomGen();
/*
var locationThree = {
	name: "Washington Square",
	minCustomer: 11,
	maxCustomer:38,
	aveCookieSale: 1.9,
    hourlyCookiesSales: [],
	total:0,
	
	randomGen: function(){
	  for(var i=0; i < 8; i++){
		var randomCust = (Math.random() * (this.maxCustomer - this.minCustomer + 1))
			+ this.minCustomer;
		this.hourlyCookiesSales[i] = Math.floor(randomCust * this.aveCookieSale);
		this.total += this.hourlyCookiesSales[i];
		
		// document.write(this.hourlyCookiesSales[i] + "\n");
	  }
	  // document.write(this.total + "\n");
	  
	  var name = document.getElementById("name2");
	  name.innerHTML = locationThree.name;
	  
	  var tenAm = document.getElementById("10am2");
	  tenAm.innerHTML = "10am: " + this.hourlyCookiesSales[0];
	  
	  var elevanAm = document.getElementById("11am2");
	  elevanAm.innerHTML = "11am: " + this.hourlyCookiesSales[1];
	  
	  var twelvePm = document.getElementById("12pm2");
	  twelvePm.innerHTML = "12pm: " + this.hourlyCookiesSales[2];
	  
	  var onePm = document.getElementById("1pm2");
	  onePm.innerHTML =  "1pm: " + this.hourlyCookiesSales[3];
	  
	  var twoPm = document.getElementById("2pm2");
	  twoPm.innerHTML =  "2pm: " + this.hourlyCookiesSales[4];
	  
	  var threePm = document.getElementById("3pm2");
	  threePm.innerHTML = "3pm: " + this.hourlyCookiesSales[5];
	  
	  var fourPm = document.getElementById("4pm2");
	  fourPm.innerHTML = "4pm: " + this.hourlyCookiesSales[6];
	  
	  var fivePm = document.getElementById("5pm2");
	  fivePm.innerHTML = "5pm: " + this.hourlyCookiesSales[7];
	  
	  var totalSales = document.getElementById("total2");
	  totalSales.innerHTML = "Total: " + this.total;
    }
};

locationThree.randomGen();

var locationFour = {
	name: "Sellwood",
	minCustomer: 20,
	maxCustomer:48,
	aveCookieSale: 3.3,
    hourlyCookiesSales: [],
	total:0,
	
	randomGen: function(){
	  for(var i=0; i < 8; i++){
		var randomCust = (Math.random() * (this.maxCustomer - this.minCustomer + 1))
			+ this.minCustomer;
		this.hourlyCookiesSales[i] = Math.floor(randomCust * this.aveCookieSale);
		this.total += this.hourlyCookiesSales[i];
		
		// document.write(this.hourlyCookiesSales[i] + "\n");
	  }
	  // document.write(this.total + "\n");
	  
	  var name = document.getElementById("name3");
	  name.innerHTML = locationFour.name;
	  
	  var tenAm = document.getElementById("10am3");
	  tenAm.innerHTML = "10am: " + this.hourlyCookiesSales[0];
	  
	  var elevanAm = document.getElementById("11am3");
	  elevanAm.innerHTML = "11am: " + this.hourlyCookiesSales[1];
	  
	  var twelvePm = document.getElementById("12pm3");
	  twelvePm.innerHTML = "12pm: " + this.hourlyCookiesSales[2];
	  
	  var onePm = document.getElementById("1pm3");
	  onePm.innerHTML =  "1pm: " + this.hourlyCookiesSales[3];
	  
	  var twoPm = document.getElementById("2pm3");
	  twoPm.innerHTML =  "2pm: " + this.hourlyCookiesSales[4];
	  
	  var threePm = document.getElementById("3pm3");
	  threePm.innerHTML = "3pm: " + this.hourlyCookiesSales[5];
	  
	  var fourPm = document.getElementById("4pm3");
	  fourPm.innerHTML = "4pm: " + this.hourlyCookiesSales[6];
	  
	  var fivePm = document.getElementById("5pm3");
	  fivePm.innerHTML = "5pm: " + this.hourlyCookiesSales[7];
	  
	  var totalSales = document.getElementById("total3");
	  totalSales.innerHTML = "Total: " + this.total;
    }
};

locationFour.randomGen();

var locationFive = {
	name: "Pearl District",
	minCustomer: 3,
	maxCustomer:24,
	aveCookieSale: 2.6,
    hourlyCookiesSales: [],
	total:0,
	
	randomGen: function(){
	  for(var i=0; i < 8; i++){
		var randomCust = (Math.random() * (this.maxCustomer - this.minCustomer + 1))
			+ this.minCustomer;
		this.hourlyCookiesSales[i] = Math.floor(randomCust * this.aveCookieSale);
		this.total += this.hourlyCookiesSales[i];
		
		// document.write(this.hourlyCookiesSales[i] + "\n");
	  }
	  // document.write(this.total + "\n");
	  
	  var name = document.getElementById("name4");
	  name.innerHTML = locationFive.name;
	  
	  var tenAm = document.getElementById("10am4");
	  tenAm.innerHTML = "10am: " + this.hourlyCookiesSales[0];
	  
	  var elevanAm = document.getElementById("11am4");
	  elevanAm.innerHTML = "11am: " + this.hourlyCookiesSales[1];
	  
	  var twelvePm = document.getElementById("12pm4");
	  twelvePm.innerHTML = "12pm: " + this.hourlyCookiesSales[2];
	  
	  var onePm = document.getElementById("1pm4");
	  onePm.innerHTML =  "1pm: " + this.hourlyCookiesSales[3];
	  
	  var twoPm = document.getElementById("2pm4");
	  twoPm.innerHTML =  "2pm: " + this.hourlyCookiesSales[4];
	  
	  var threePm = document.getElementById("3pm4");
	  threePm.innerHTML = "3pm: " + this.hourlyCookiesSales[5];
	  
	  var fourPm = document.getElementById("4pm4");
	  fourPm.innerHTML = "4pm: " + this.hourlyCookiesSales[6];
	  
	  var fivePm = document.getElementById("5pm4");
	  fivePm.innerHTML = "5pm: " + this.hourlyCookiesSales[7];
	  
	  var totalSales = document.getElementById("total4");
	  totalSales.innerHTML = "Total: " + this.total;
    }
};

locationFive.randomGen();

*/


