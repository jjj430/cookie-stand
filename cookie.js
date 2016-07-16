

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
		
		document.write(this.hourlyCookiesSales[i] + "\n");
	  }
	  document.write(this.total + "\n");
	  
	  var name = document.getElementById("name");
	  name.innerHTML = locationOne.name;
	  
	  var tenAm = document.getElementById("10am");
	  tenAm.innerHTML = "10am: " + this.hourlyCookiesSales[0];
	  
	  var elevanAm = document.getElementById("11am");
	  elevanAm.innerHTML = "11am: " + this.hourlyCookiesSales[1];
	  
	  var twelvePm = document.getElementById("12pm");
	  twelvePm.innerHTML = "12pm: " + this.hourlyCookiesSales[2];
	  
	  var onePm = document.getElementById("1pm");
	  onePm.innerHTML =  "1pm: " + this.hourlyCookiesSales[3];
	  
	  var twoPm = document.getElementById("2pm");
	  twoPm.innerHTML =  "2pm: " + this.hourlyCookiesSales[4];
	  
	  var threePm = document.getElementById("3pm");
	  threePm.innerHTML = "3pm: " + this.hourlyCookiesSales[5];
	  
	  var fourPm = document.getElementById("4pm");
	  fourPm.innerHTML = "4pm: " + this.hourlyCookiesSales[6];
	  
	  var fivePm = document.getElementById("5pm");
	  fivePm.innerHTML = "5pm: " + this.hourlyCookiesSales[7];
	  
	  var totalSales = document.getElementById("total");
	  totalSales.innerHTML = "Total: " + this.total;
    }
};

locationOne.randomGen();


