
function location(name, min, max){
	this.name = name;
	this.min = min;
	this.max = max;
	function randomGen(min, max){
	for(var i=0; i < 8; i++){
	var randomNum = Math.floor((Math.random() * (max - min + 1))) + min;
	document.write(randomNum + "\n");
	}
}
}



randomGen(1, 10);