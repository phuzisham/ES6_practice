// for loop Example

var numbers = [ 10, 20, 30 ];
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

// example 1 !reduce uses an initial value! marked as sum in this case

numbers.reduce(function(sum, number) {
  return sum + number;
}, 0);

// example 2

var primaryColors = [
  { color: 'red' },
  { color: 'yellow' },
  { color: 'blue' }
];

primaryColors.reduce(function(acc, primaryColor) {
  acc.push(primaryColor.color);

  return acc;
}, []);

// example 3 balanced parentheses?

function balancedParens(string) {
  return !string.split("");.reduce(function(acc, char) {
    if (acc < 0) { return acc; }
    if (char === "(") { return ++acc; }
    if (char === ")") { return --acc; }
    return acc;
  }, 0);
}

balancedParens(")()("); // unbalanced
balancedParens("((()))"); // balanced
