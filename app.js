var body = document.querySelector("body");

var taxiLocationCounter = 1;

 body.onkeydown = function(e){
// make sure that the counter variable never get’s bigger than 9 or less than 1;
 	   	
 var keyName = keyCodeName(e.keyCode);

//  displayMessage(taxiLocationCounter);

var trafficLight = new TrafficLight(taxiLocationCounter);

	if(keyName === "right"){
		if(trafficLight.color() === "green" &&
taxiLocationCounter < 9){
  	   		moveForward();
  		}
 }

  	if(keyName === "left"){
		if(taxiLocationCounter > 1){
 	   moveBack();
	 }
}

	if(keyName === "down"){
  	   		trafficLight.makeGreen();
  		}
 

if(keyName === "up"){
 		trafficLight.makeRed();


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

var createTrafficLightClass = function(counter){
	if(counter === 1) {
		return ".one-of-nine";
	}
	if(counter === 2) {
		return ".two-of-nine";
	}
	if(counter === 3) {
		return ".three-of-nine";
	}
	if(counter === 4) {
		return ".four-of-nine";
	}
	if(counter === 5) {
		return ".five-of-nine";
	}
	if(counter === 6) {
		return ".six-of-nine";
	}
	if(counter === 7) {
		return ".seven-of-nine";
	}
	if(counter === 8) {
		return ".eight-of-nine";
	}
	if(counter === 9) {
		return ".nine-of-nine";
	}
	else {
		return "";
	}
};

var TrafficLight = function(taxiLocationCounter){
	var className = createTrafficLightClass(taxiLocationCounter);


	var trafficLightElement = document.querySelector(className);

this.makeGreen = function(){
	trafficLightElement.classList.remove("lights-stop");
	trafficLightElement.classList.remove("lights-slowdown");
	trafficLightElement.classList.add("lights-go");
}

this.makeOrange = function(){
	trafficLightElement.classList.remove("lights-stop");
	trafficLightElement.classList.remove("lights-go");
	trafficLightElement.classList.add("lights-slowdown");
}

this.makeRed = function(){
	trafficLightElement.classList.remove("lights-go");
	trafficLightElement.classList.remove("lights-slowdown");
	trafficLightElement.classList.add("lights-stop");
}

this.color = function(){
	if(trafficLightElement.classList.contains("lights-stop")){
    return 'red';
	}
	if(trafficLightElement.classList.contains("lights-slowdown")){
    return 'orange';
	}

	if(trafficLightElement.classList.contains("lights-go")){
    return 'green';
	}

}
}; 