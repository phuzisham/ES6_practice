// ES5 ------- start

const add = function(a, b) {
  return a + b;
}

add(1, 2); // = 3

// ES5 ------- end

// ES6 ------ start
// more abbreviated with single JS expression using implicit return

const add = (a, b) => a + b;

add(1, 2); // = 3

// ES6 ------ end

// ES5 ------- start

const double = function(num) {
  return 2 * num;
}

double(4); // = 8

// ES5 ------- end

// ES6 ------ start
// with single argument no need for parenthesis. If no arguments then empty parenthesis ()

const double = num => 2 * num;

double(4); // = 8

// ES6 ------ end

// ES5 ------- start

const numbers = [1,2,3];

numbers.map(function(num) {
  return 2 * num;
});                        // returns array [2,4,6]

// ES5 ------- end

// ES6 ------ start

const numbers = [1,2,3];

numbers.map(num => 2 * num);  // returns array [2,4,6]

// another example

const team = {
  members: ['Jane', 'Bill'],
  teamName: ['Super Squad'],
  teamSummary: function() {
    let self = this;
    return this.members.map(function(member) {
      return `${member} is on team ${self.teamName}`;
    });
  }
};

// another example refactored...using 'lexical this'

const team = {
  members: ['Jane', 'Bill'],
  teamName: ['Super Squad'],
  teamSummary: function() {
    return this.members.map(member => {
      return `${member} is on team ${this.teamName}`;
    });
  }
};

// ES6 ------ end
