// ES5

function getMessage() {
  const year = new Date().getFullYear();

  return "The year is " + year;
}

// ES6 back tic

function getMessage() {
  const year = new Date().getFullYear();

  return `The year is ${year}`;
}

// OR...

function getMessage() {
  return `The year is ${new Date().getFullYear()}`;
}

// Post Example ES5

const device_id = 7;
const guid = 20;
const username = "user7";

let data = '{"device_id":"' + device_id + '","guid":"' + guid + '","username":"' + username + '","}';

// post example template literal

const device_id = 7;
const guid = 20;
const username = "user7";

let data = `{"device_id": "${device_id}", "guid": "${guid}", "username": "${username}","}`;
