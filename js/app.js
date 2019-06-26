"use strict";

window.onload = function(event) {
	document.getElementById("copyright-year").textContent = (new Date()).getFullYear();

	function display(response) {
		document.getElementById("display").textContent = response;
	}

	function repeat(string, number) {
		let repeat = "";

		if (isNaN(number)) {
			return "Enter a number";
		} else if (number % 1 !== 0) {
			return "Enter integeral value";
		} else if (number < 1) {
			return "Enter a number greater than 1";
		} else {
			// Method I
			for (let i = 1; i <= number; i++) {
				repeat = repeat + string;
			}
			
			display(repeat);


			// Method II
			// repeat = [];

			// for (let i = 1; i <= number; i++) {
			// 	repeat.push(string);
			// }

			// display(repeat.join(""));

			// Methdod III
			// display((number > 0) ? string.repeat(number) : "");
		}
	}

	let form = document.getElementById("form");
	form.addEventListener("submit", function(event) {
		event.preventDefault();

		repeat(this.children[0].value, this.children[1].value);
	});
};