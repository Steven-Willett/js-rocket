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