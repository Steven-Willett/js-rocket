// Explanations

// ### VARIABLES ### //
var favColor = 'blue';
var myFavColors = ['blue', 'red', 'green'];
var numOfColors = 3;
var hasGotFavColors = false;
var richObject = {
	firstName: 'Rich',
	lastName: 'Armstrong',
	favColors: ['blue', 'red', 'green'],
	yearsAlive: 103,
	isMale: true
};

richObject.firstName


// ### FUNCTIONS ### //
var fullName = function(firstname,lastname) {
    return firstname + ' ' + lastname;
}
var area = function (width, height) {
	return width * height;
}
var whatIsMyFavColor = function() {
	return 'blue';
}

var doSomething = function() {
	console.log("do something!");
}

// ### CONDITIONAL SATEMENTS (IF, ELSE IF, ELSE) ### //
var number1 = 10;
var number2 = 100;

if (number1 == 10) {
    // Do something
} 

if (number1 > number2) {
    // Do something
}

if (number1 < number2) {
    // Do something
}

if (number1 >= number2) {
    // Do something
}

if (number1 <= number2) {
    // Do something
}

if (number1 == 10 && number2 == 100) {
    // Do something
} else if (number1 == 10 || number2 == 100) {
    // Do something
} else {
    // Do something or nothing.
}




