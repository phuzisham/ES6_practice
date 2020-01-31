// ES5 ------- start

let numbers = [1,2,3];
let doubledNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}                                        // doubledNumbers = [2, 4, 6]

// ES5 ------- end

// ES6 ------- start

let doubled = numbers.map(function(number) {
  return number * 2;
});                                     // doubled = [2, 4, 6]

// example 2 'pluck' example

let cars = [
  { model: 'Buick', price: 'CHEAP' },
  { model: 'Camaro', price: 'expensive' }
];

let prices = cars.map(function(car) {
  return car.price;
});                                    // prices = ["CHEAP", "expensive"]

// ES6 ------- end
