// Basic old school ES5 for loop example

var colors = [ 'red,' 'blue', 'green' ];

for (var i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// Array helper method forEach

colors.forEach(function(color) {
  console.log(color);
});

// Array helper method forEach 2

var numbers = [1, 2, 3, 4,5];
var sum = 0;

numbers.forEach(function(number) {
  sum += number;
});

// Example with iterator function as a seperate function

function adder(number) {
  sum += number;
}

numbers.forEach(adder);

// Example 3

var images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];

var areas = [];

function calcArea(image) {
  var area = image.height * image.width;
  areas.push(area);
}

images.forEach(calcArea);