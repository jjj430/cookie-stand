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
		
	  }
	  
	  var nameLocation3 = document.createElement("h3");  //create element
	  var newText = document.createTextNode(this.name);  //give it content
	  nameLocation3.appendChild(newText);
	  document.getElementById("localName3").appendChild(nameLocation3);
	  	  
	  for (var i = 0; i < 8; i++) {	  
		var nameLocation3 = document.createElement("li");  //create element
		if (i<3){
		var newText = document.createTextNode( (i+10)+ " am: " + this.hourlyCookiesSales[i]);  //give it content
		nameLocation3.appendChild(newText);
		document.getElementById("listAve3").appendChild(nameLocation3);
		}  
		else {
		var newText = document.createTextNode( (i+10- 12)+ " pm: " + this.hourlyCookiesSales[i]);  //give it content
		nameLocation3.appendChild(newText);
		document.getElementById("listAve3").appendChild(nameLocation3);
		}
	  }
	
	  nameLocation3 = document.createElement("li");  //create element
	  newText = document.createTextNode("total: " + this.total);  //give it content
		nameLocation3.appendChild(newText);
		document.getElementById("listAve3").appendChild(nameLocation3);
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
	  }
	 
	var nameLocation4 = document.createElement("h3");  //create element
	var newText = document.createTextNode(this.name);  //give it content
	nameLocation4.appendChild(newText);
	document.getElementById("localName4").appendChild(nameLocation4);
	  	  
	for (var i = 0; i < 8; i++) {	  
		var nameLocation4 = document.createElement("li");  //create element
		if (i<3){
		var newText = document.createTextNode( (i+10)+ " am: " + this.hourlyCookiesSales[i]);  //give it content
		nameLocation4.appendChild(newText);
		document.getElementById("listAve4").appendChild(nameLocation4);
		}  
		else {
		var newText = document.createTextNode( (i+10- 12)+ " pm: " + this.hourlyCookiesSales[i]);  //give it content
		nameLocation4.appendChild(newText);
		document.getElementById("listAve4").appendChild(nameLocation4);
		}
	  }
	
	  nameLocation4 = document.createElement("li");  //create element
	  newText = document.createTextNode("total: " + this.total);  //give it content
		nameLocation4.appendChild(newText);
		document.getElementById("listAve4").appendChild(nameLocation4);
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
	  }
	
	var nameLocation5 = document.createElement("h3");  //create element
	  var newText = document.createTextNode(this.name);  //give it content
	  nameLocation5.appendChild(newText);
	  document.getElementById("localName5").appendChild(nameLocation5);
	  	  
	  for (var i = 0; i < 8; i++) {	  
		var nameLocation5 = document.createElement("li");  //create element
		if (i<3){
		var newText = document.createTextNode( (i+10)+ " am: " + this.hourlyCookiesSales[i]);  //give it content
		nameLocation5.appendChild(newText);
		document.getElementById("listAve5").appendChild(nameLocation5);
		}  
		else {
		var newText = document.createTextNode( (i+10- 12)+ " pm: " + this.hourlyCookiesSales[i]);  //give it content
		nameLocation5.appendChild(newText);
		document.getElementById("listAve5").appendChild(nameLocation5);
		}
	  }
	
	  nameLocation5 = document.createElement("li");  //create element
	  newText = document.createTextNode("total: " + this.total);  //give it content
		nameLocation5.appendChild(newText);
		document.getElementById("listAve5").appendChild(nameLocation5);
    }
};

locationFive.randomGen();




