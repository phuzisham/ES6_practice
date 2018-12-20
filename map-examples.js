// Old school Example

let numbers = [1,2,3];
let doubledNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}

// map example 1

let doubled = numbers.map(function(number) {
  return number * 2;
});

// map example 2 'pluck' example

let cars = [
  { model: 'Buick', price: 'CHEAP' },
  { model: 'Camaro', price: 'expensive' }
];

let prices = cars.map(function(car) {
  return car.price;
});
