// App file codes

const x = 1;

let newArray = [1, 2, 3];

function sayHello(name) {
	return `Hello ${name}`;
}

export { x, newArray, sayHello };

// Main file codes

import { x, newArray, sayHello } from './app.js';

console.log(x);

console.log(newArray);

console.log(sayHello('Mohamed'));
