// Old school Example

var numbers = [1,2,3];
var doubledNumbers = [];

for (var i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}

// map example 1

var doubled = numbers.map(function(number) {
  return number * 2;
});

// map example 2 'pluck' example

var cars = [
  { model: 'Buick', price: 'CHEAP' },
  { model: 'Camaro', price: 'expensive' }
];

var prices = cars.map(function(car) {
  return car.price;
});
