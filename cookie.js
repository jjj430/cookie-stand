

var locationOne = {
	name: "portland",
	minCustomer: 17,
	maxCustomer:88,
	aveCookieSale: 5.2,
    hourlyCookiesSales: [],
	
	randomGen: function(){
	  for(var i=0; i < 8; i++){
		var randomCust = (Math.random() * (this.maxCustomer - this.minCustomer + 1))
			+ this.minCustomer;
		this.hourlyCookiesSales[i] = Math.floor(randomCust * this.aveCookieSale);	
		
		document.write(this.hourlyCookiesSales[i] + "\n");
	  }
    }
};

locationOne.randomGen();


