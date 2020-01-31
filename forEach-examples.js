// ES5 ------- start

let colors = [ 'red,' 'blue', 'green' ];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// ES6 ------- end

// ES5 ------- start

colors.forEach(function(color) {
  console.log(color);
});

// example 2

let numbers = [1, 2, 3, 4,5];
let sum = 0;

numbers.forEach(function(number) {
  sum += number;
});                               // sum = 15

// example with iterator function as a seperate function

function adder(number) {
  sum += number;
}

numbers.forEach(adder);           // sum = 15

// example 3

let images = [
  { height: 10, width: 30 },
  { height: 20, width: 90 },
  { height: 54, width: 32 }
];

let areas = [];

function calcArea(image) {
  let area = image.height * image.width;
  areas.push(area);
}

images.forEach(calcArea);   // areas = [300, 1800, 1728]

// ES6 ------- end
