 // example* button = document.getElementById(buttonId);

 // if (className === "failing") {
 // 	myButton.innerHTML = "Make passing";
 // }
 // else {
 // 	myButton.innerHTML = "Make failing";
 // }
 //    };
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

 var body = document.querySelector("body");

body.onkeydown = function(e){
    //e.keyCode - will capture the key codes

};
