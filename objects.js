var locations = function(name, min, max, ave) {
	this.name = name;
	this.minCustomer = min;
	this.maxCustomer = max;
	this.aveSale = ave;
	
	this.addInfo = function(){
		var locationRow = document.createElement("tr");
		locationRow.innerText = this.name;
		
		for(var i = 0; i < 8; i++){
			
		}
	}
}