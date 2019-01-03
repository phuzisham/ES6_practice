// for loop Example

const computers = [
  { name: 'Apple', ram: 24 },
  { name: 'Compaq', ram: 4 },
  { name: 'Acer', ram: 32 }
];

let allComputersCanRunProgram = true;

let onlySomeComputersCanRunProgram = false;

for (let i = 0; i < computers.length; i++) {
  let computer = computers[i];

  if (computer.ram < 16) {
    allComputersCanRunProgram = false;
  } else {
    onlySomeComputersCanRunProgram = true;
  }
}

// every helper
numbers.map(num => 2 * num);

computers.every(function(computer) {
  return computer.ram > 16;
}); // ^^^ returns false ^^^

// fat arrow
computers.every(comp => comp.ram > 16); // ^^^ returns false ^^^

// some helper

computers.some(function(computer) {
  return computer.ram > 16;
}); // ^^^ returns true ^^^

// fat arrow
computers.some(comp => comp.ram > 16);  // ^^^ returns true ^^^

// example 2

function Field(value) {
  this.value = value;
}

Field.prototype.validate = function() {
  return this.value.length > 0;
}

let username = new Field("2cool");
let password = new Field("my_password");
const birthdate = new Field("10/10/2010");

username.validate() && password.validate();

let fields = [username, password, birthdate];

let formIsValid = fields.every(function(field) {
  return field.validate();
});

if  (formIsValid) {
  // allow user to submit
} else {
  // show an error message
}
