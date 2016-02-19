var body = document.querySelector("body");

// var taxiLocationCounter = 1;


// body.onkeydown = function(e){
	
// 	// e.keyCode - will capture the key codes
// 	// displayMessage(e.keyCode);

// 	  var count = keyCodeName(e.keyCode);
// 	   // displayMessage(right);

// 	   var myClass = createLocationClass(taxiLocationCounter);
// 	   displayMessage(myClass);
// };

// if (count === "right") {
// 	taxiLocationCounter++;
// };
// else {
// 	taxiLocationCounter--;
// };
	
var keyCodeName = function (keyCode){
if(keyCode=== 38){
		return "up";
	}
if(keyCode=== 39){
		return "right";
	}
if(keyCode===40){
		return "down";
	}
if(keyCode=== 37){
		return "left";
	}
else {
		return "";
	}
};


var createLocationClass = function(number) {
	if(number === 1) {
	return "slot-one-of-nine";
	}

	else if(number === 2) {
	return "slot-two-of-nine";
	}	

	else if(number === 3) {
	return "slot-three-of-nine";
	}	

	else if(number === 4) {
	return "slot-four-of-nine";
	}	

	else if(number === 5){
	return "slot-five-of-nine";
	}	

	else if(number === 6){
	return "slot-two-of-nine";
	}	

	else if(number === 7){
	return "slot-two-of-nine";
	}

	else if(number === 8){
	return "slot-eight-of-nine";
	}	

	else if(number === 9){
	return "slot-nine-of-nine";
	}		

};
