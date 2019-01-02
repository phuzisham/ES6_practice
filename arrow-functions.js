// ES5

const add = function(a, b) {
  return a + b;
}

add(1, 2);

// ES6

const add = (a, b) => {
  return a + b;
}

add(1, 2);

// more abbreviated with single JS expression using implicit return

const add = (a, b) => a + b;

add(1, 2);

// another ES5 example

const double = function(num) {
  return 2 * num;
}

// ES6 with single argument no need for parenthesis. If no arguments then empty parenthesis ()

const double = num => 2 * num;

double(4);

// ES5 again

const numbers = [1,2,3];

numbers.map(function(num) {
  return 2 * num;
});

// ES6 again

const numbers = [1,2,3];

numbers.map(num => 2 * num);

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
