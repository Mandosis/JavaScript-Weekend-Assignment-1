var claim1 = {
	patientName: "John Doe",
	visitType: "Specialist",
	visitCost: 1100
}

var claim2 = {
	patientName: "Jane Doe",
	visitType: "Optical",
	visitCost: 100
}

var claim3 = {
	patientName: "Joe Johnson",
	visitType: "Emergency",
	visitCost: 31000
}

var claim4 = {
	patientName: "Sharon Smith",
	visitType: "Emergency",
	visitCost: 1300
}

var claim5 = {
	patientName: "Steve Wright",
	visitType: "Primary Care",
	visitCost: 770
}

var initialList = [claim1, claim2, claim3, claim4, claim5];


var totalPayedOut = 0;


function Claim(name, type, cost){
	this.patientName = name;
	this.visitType = type;
	this.visitCost = cost;
}

// New claims using constructor
var claim6 = new Claim('Tom Maverick', 'Specialist', 2395);
var claim7 = new Claim('Dob Bod', 'Emergency', 7849949);
var claim8 = new Claim('Ruby Diamond', 'Optical', 250);
var claim9 = new Claim('Frumpy Noddle', 'Primary Care', 694);
var claim10 = new Claim('Lesli Dunkle', 'Emergency', 13494);

// New array containg claims 6-10
var newClaims = [claim6, claim7, claim8, claim9, claim10];

// Combine both arrays into a single variable
var claims = initialList.concat(newClaims);

// Cycle through all the claims to calculate the percentage and amount
for (var i = 0; i < claims.length; i++) {
	totalPayedOut += calcAmount(claims[i]);
}

// Append claim to DOM
$(document).ready(function() {
	$(document).find('body').append('<p class="total"><span>Total paid out: </span>' + formatAsCurrency(totalPayedOut) + '</p>');
});

// Output entire amount that was payed out
console.log('Total paid out:', formatAsCurrency(totalPayedOut));

//Determine percent covered
function calcPercent(claim) {
	switch(claim.visitType) {
		case 'Optical':
			return 0;
			break;
		case 'Specialist':
			return 0.1;
			break;
		case 'Emergency':
			return 1;
			break;
		case 'Primary Care':
			return 0.5;
	}
}

//function to determine amount covered
function calcAmount(claim) {
	var totalCovered =  calcPercent(claim) * claim.visitCost;

	// Append claim to DOM
	$(document).ready(function() {
		$(document).find('body').append('<p class="claim">Paid out <span>' + formatAsCurrency(totalCovered) + '</span> for ' + claim.patientName + '</p>');
	});

	console.log('Paid out', formatAsCurrency(totalCovered), 'for', claim.patientName);

	return totalCovered;
}

// Format input as currency
function formatAsCurrency(input) {
	return input.toLocaleString('en-US', {
		style: 'currency',
		currency: 'USD',
		currencyDisplay: 'symbol'
	});
}
