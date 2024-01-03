"use strict";

solveEquation(1, 25, 8);
calculateTotalMortgage(10, 0, 50000, 12);
calculateTotalMortgage(10, 1000, 50000, 12);
calculateTotalMortgage(10, 0, 20000, 24);
calculateTotalMortgage(10, 1000, 20000, 24);
calculateTotalMortgage(10, 20000, 20000, 24);
calculateTotalMortgage(10, 0, 10000, 36);
calculateTotalMortgage(15, 0, 10000, 36);

function solveEquation(a, b, c) {
	let arr = [];
	let d = Math.pow(b, 2) - 4 * a * c;
	if (d < 0) {
		arr = [];
	} else if (d === 0) {
		arr = [(-b / (2 * a))];
	} else if (d > 0) {
		arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
	}
	console.log(arr);
	return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let percentMonth = percent / 100 / 12;
	let bodyCredit = amount - contribution;
	let amountMonth = bodyCredit * (percentMonth + (percentMonth / ((Math.pow((1 + percentMonth), countMonths) - 1))));
	let sum = amountMonth * countMonths;
	console.log(sum.toFixed(2));
	return (Number(sum.toFixed(2)));
}