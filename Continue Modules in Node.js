// App file codes :-

module.exports = {

 	"newArray" : [1, 2, 3],

 	"hello" : function sayHello(name) {
		const x = 30;
		return `Hello ${name} ${x}`;
	},

	"studentName" : function (name) {
		return ` student name: ${name}`
	}

}

module.exports = {
	"studentName" : "",
	"studentAge" : ""
}

// ahmed file codes :-

const { studentAge } = require("./app");
const studentData = require("./app");

studentData.studentName = "Ahmed";

studentData.studentAge = "19";

console.log(`Student Name: ${studentData.studentName}
Age: ${studentData.studentAge}`);

// ashraf file codes :-

const studentData = require("./app")

studentData.studentName = "Ashraf";

console.log(`Student Name: ${studentData.studentName}
Age: ${studentData.studentAge}`)

main file codes :-

console.log(module);

var welcome = require('./app.js');

console.log(welcome);

console.log(welcome.hello('Ahmed'));

welcome.newArray = [8, 9 ,10]

console.log(welcome.newArray);

const ahmed = require("./ahmed")

const ashraf = require("./ashraf")
