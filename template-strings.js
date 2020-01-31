// ES5 ------ start

function getMessage() {
  const year = new Date().getFullYear();

  return "The year is " + year;
}

// ES5 ------ end

// ES6 ------ start

function getMessage() {
  const year = new Date().getFullYear();

  return `The year is ${year}`;
}

// OR...

function getMessage() {
  return `The year is ${new Date().getFullYear()}`;
}

// ES6 ------ end

// ES5 ------ start

const device_id = 7;
const guid = 20;
const username = "user7";

let data = '{"device_id":"' + device_id + '","guid":"' + guid + '","username":"' + username + '","}';

// ES5 ------ end

// ES6 ------ start

const device_id = 7;
const guid = 20;
const username = "user7";

let data = `{"device_id": "${device_id}", "guid": "${guid}", "username": "${username}","}`;

// ES6 ------ end
