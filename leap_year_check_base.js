"use strict";
// gregorian calendar leap year validator
function leapCheck() {
	// variable to store user input
	const thisYear = document.getElementById("dateText").value;
	let pText = document.getElementById("leapText");
	// decision to determine leap year
	if (thisYear % 400 === 0 || (thisYear % 4 === 0 && thisYear % 100 != 0)) {
		//add html to pText variable
		return (pText.innerText = thisYear + " is a Leap Year!");
		// window.alert(thisYear + " is a Leap Year!");
	} else {
		// add html to pText variable
		return (pText.innerText = thisYear + " is not a Leap Year!");
		//window.alert(thisYear + " is not a Leap Year!");
	}
}
