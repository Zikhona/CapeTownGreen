var body = document.querySelector("body");

var taxiLocationCounter = 1;

 body.onkeydown = function(e){
// make sure that the counter variable never get’s bigger than 9 or less than 1;
 	   	
var keyName = keyCodeName(e.keyCode);

 displayMessage(taxiLocationCounter);

if(keyName === "right"){
	if(taxiLocationCounter < 9){
 	   moveForward();
 	}
}

else if(keyName === "left"){
	if(taxiLocationCounter > 1){
 	   moveBack();
	 }
}

var className = createLocationClass(taxiLocationCounter);	
 	displayMessage(className);

};


var keyCodeName = function (keyCode) {
	if(keyCode === 38) {
		return "up";
	}
	if(keyCode === 39) {
		return "right";
	}
	if(keyCode === 40) {
		return "down";
	}
	if(keyCode === 37) {
		return "left";
	}
	else {
		return "";
	}
};

var createLocationClass = function (number) {
	if(number === 1) {
		return "slot-one-of-nine";
	}
	if(number === 2) {
		return "slot-two-of-nine";
	}
	if(number === 3) {
		return "slot-three-of-nine";
	}
	if(number === 4) {
		return "slot-four-of-nine";
	}
	if(number === 5) {
		return "slot-five-of-nine";
	}
	if(number === 6) {
		return "slot-six-of-nine";
	}
	if(number === 7) {
		return "slot-seven-of-nine";
	}
	if(number === 8) {
		return "slot-eight-of-nine";
	}
	if(number === 9) {
		return "slot-nine-of-nine";
	}
	else {
		return "";
	}
};

	var moveForward = function(){
 	 		var currrentLocation = createLocationClass(taxiLocationCounter);
 			 taxiLocationCounter ++;
  			var newLocation = createLocationClass(taxiLocationCounter);
  			moveTaxi(currrentLocation , newLocation);
 };

 var moveBack = function(){
 	 		var currrentLocation = createLocationClass(taxiLocationCounter);
 			 taxiLocationCounter --;
  			var newLocation = createLocationClass(taxiLocationCounter);
  			 moveTaxi(currrentLocation , newLocation);
 };