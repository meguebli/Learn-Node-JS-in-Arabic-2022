// App file codes

const x = 1;

let newArray = [1, 2, 3];

function sayHello(name) {
	const x = 30;
	return `Hello ${name} + ${x}`;
}

module.exports.hello = sayHello;

module.exports.newArray = newArray;

// Main file codes

console.log(module);

const welcome = require('./app.js');

console.log(welcome);

console.log(welcome.hello('Ahmed'));

console.log(welcome.newArray);
