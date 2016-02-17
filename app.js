var body = document.querySelector("body");

body.onkeydown = function(e){
	
	// e.keyCode - will capture the key codes
	displayMessage(e.keyCode);

	var right = keyCodeName(e.keyCode);
	displayMessage(right);

};

var keyCodeName = function(keyCode){
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
