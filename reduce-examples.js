// ES5 ------- start

let numbers = [ 10, 20, 30 ];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}                                         // sum = 60

// ES5 ------- end

// ES6 ------- start
// !reduce uses an initial value! marked as sum in this case

numbers.reduce(function(sum, number) {
  return sum + number;
}, 0);                                // returns 60

// example 2

let primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' }
];

primaryColors.reduce(function(acc, primaryColor) {
  acc.push(primaryColor.color);

  return acc;
}, []);                      // returns ["red", "yellow", "blue"]

// example 3 balanced parentheses?

function balancedParens(string) {
  return !string.split("").reduce(function(acc, char) {
    if (acc < 0) { return acc; }
    if (char === "(") { return ++acc; }
    if (char === ")") { return --acc; }
    return acc;
  }, 0);
}

balancedParens(")()("); // false
balancedParens("((()))"); // true

// example 4 unique numbers

function unique(array) {
  return array.reduce(function(newArray, currentNumber) {
    if (!newArray.find(function(element) {
      return element === currentNumber
    })) {
      newArray.push(currentNumber);
    }
    return newArray;
  }, []);
}

// ES6 ------- end
