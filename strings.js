function reversal() {
console.log("You got reversed Foo");
	let backwardsMan = testString.split("").reverse().join("");
	console.log(backwardsMan);
	document.getElementById("backThatUp").innerHTML = backwardsMan;
}

function alphabits() {
	console.log("Bits of Alpha");
	let bitzed = testString.split("").sort().join("");
	console.log(bitzed);
	document.getElementById("bits").innerHTML = bitzed;
}

function palindrome() {
console.log("Welcome to the Terror Drome");
let backwardsMan = testString.split("").reverse().join("");
console.log("First Convert", backwardsMan);
if (backwardsMan === testString){
	document.getElementById("pali").innerHTML = testString + "is a palindrome!";
} else  {
	document.getElementById("pali").innerHTML = testString + "is not a palindrome!";
}

}

var testString = "";
let stringButton = document.getElementById("btn-press");
let stringInput = document.getElementById("input-box").value;

function handle(e){

	if(e.keyCode === 13){
		e.preventDefault();
		testString = document.getElementById("input-box").value;
		let regExCheck = new RegExp("[^a-z|^A-Z]");
		if (regExCheck.test(testString)) {
			alert("Letters only, no numbers or special characters.");
		} else {
		console.log("TestString", testString);
		reversal(testString);
		alphabits(testString);
		palindrome(testString);
			}
		}
	}



function sendTo() {
		testString = document.getElementById("input-box").value;
		let regExCheck = new RegExp("[^a-z|^A-Z]");
		if (regExCheck.test(testString)) {
			alert("Letters only, no numbers or special characters.");
		} else {
		console.log("TestString", testString);
		reversal(testString);
		alphabits(testString);
		palindrome(testString);
			}
	}
	

