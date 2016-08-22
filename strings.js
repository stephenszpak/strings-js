var button = document.getElementById("submitBtn");
var userInput = document.getElementById("textInput");
var results = document.getElementById("result");

function reversal(rev) {
	return rev.split("").reverse().join("");
};

function alphabits(alpha) {
	return alpha.split("").sort("").join("");
};

function palindrome(booty) {
	return booty === reversal(booty);
};

var testString = "";

function outputResults (){
	testString = userInput.value
	results.innerHTML = "";
	results.innerHTML += "<div>" + reversal(testString) + "</div>";
	results.innerHTML += "<div>" + alphabits(testString) + "</div>"; 
	results.innerHTML += "<div>" + palindrome(testString) + "</div>";
};


