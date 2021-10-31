console.log("hello world");

let name = "Wanjala";
console.log(name);

let firstName = "wanjala";
let lastName = "Werunga";
let age = 90;
// console.log(firstName);
// console.log(lastName);
console.log("I am " + firstName + lastName + age + "years old");

let isNot = true;
console.log(isNot);
let wanjala; //undefined

//CONSTANTS
const interestRate = 0.3;
console.log(interestRate);

//Objects
let person = {
  name: "Wanjala",
  age: 30,
  gender: "male",
  adminNo: 71900,
};
console.log(person);

//Dot notation
person.age = 38;
console.log(person.age);

//Bracket notation
person["name"] = "Winny";
console.log(person.name);

//Arrays--is an object
let selectedColors = ["red", "blue", "green"];
console.groupCollapsed(selectedColors);

//Funtions--A set of statements that perfoms a task
function greet(name) {
  console.log("helo " + name);
}
greet("John");
greet("Mary");

//Function to calculate a value
function square(number) {
  return number * number;
}
let number = square(29);
console.log(number);
//console.log(square(29))

//Operators
let y = 9;
let x = 10;
let z = x + y;
console.log(z);

//1.Arithmethic(+,-,%,/++,--)
//2.Assignment(=,+=,-=,*=,/=)

//Events --things that happen to moments when js is used in pages,js can react

//Number methods
const PI = 3.14159;
const num = PI.toFixed(3);
console.log(num);

let pi = PI.toFixed(0);
pi = PI.toPrecision(5);
console.log(pi);

let mill = 10000;
pi = mill.toExponential();
console.log(pi);

//Arrays
let cars = ["Ford", "BMW", "Mercedes", "Toyota"];
console.log(cars);

//Array methods
cars.pop();
cars.push("mazda");
cars.push("Chevrolet");
cars.slice();

//Array sort
cars.sort();
cars.reverse();

//Dates
let p = new Date();
console.log(p);
let a = new Date(2022, 1, 1, 10, 44, 30, 0);
console.log(a);

//Conditional statements
let w = 20;
let g = 10;
if (w == 10 && g < 20) {
  console.log("If!");
} else if (x > 50) {
  console.log("Else if!");
} else {
  console.log("Else!");
}

function getDayName(dayNum) {
  let day;
  switch (dayNum) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Sartuday";
      break;
    default:
      day = "Day doesnt exist " + dayNum + "isnt a valid number";
  }

  return day;
}
console.log(getDayName(8));

function rainbowColors(color) {
  let num;
  switch (color) {
    case 1:
      num = "Red";
      break;
    case 2:
      num = "Orange";
      break;
    case 3:
      num = "Yellow";
    case 4:
      num = "Green";
    case 5:
      num = "Blue";
      break;
    case 6:
      num = "indigo";
      break;
    case 7:
      num = "Violet";
      break;
    default:
      num = "invalid input";
  }
  return num;
}

// for loop
for (let i = 5; i > 0; --i) {
  console.log(i);
}

let friends = ["Oscar", "Angela", "Mary", "Wanjala"];
for (let i = 0; i < friends.length[i]; i++) {
  console.log(friends[i] + "<br>");
}

//for in and for of loops
const names = ["Youtube", "facebook", "Amazon", "Netflix"];
for (const n of names) {
  console.log(n);
}

const symbols = {
  yt: "Youtube",
  ig: "Instagram",
  fb: "facebook",
};
for (const s in symbols) {
  console.log(symbols[s]);
}

//while and do while loops
const myStates = ["Delhi", "Assan", "Wanja", 587, "Dandora", "Makadara"];
let i = 0;
while (i < myStates.length) {
  console.log(myStates[i]);
  i++;
}

let gb = 0;
do {
  console.log(myStates[gb]);
  gb++;
} while (i < myStates.length);

//type conversion
// let b =2 + '2';
// console.log(b);="22"

let c = 2 + true;//3
console.log(c);

let e = Number("2");//2
console.log(e);

let f = Boolean(17);
console.log(f);
//for an empty string and zero you get false

// RegExp
const string = "all your base belong to us";
const regex = /base/;
const isExisting = regex.test(string);
console.log(isExisting);

//Error handling... try catch
try {
  console.log("start of try run");
  unicycle;
  console.log("end of try runs");
} catch (err) {
  console.log("Error has occured" + err);
} finally {
  console.log("this is always run");
}
console.log("...Then the execution continues");

//try catch and throw
let json = {"age":30};
try {
  let user = JSON.parse(json);
  if (!user.name) {
    throw new SyntaxError("incomplete data: no name");
  }
  console.log(user.name);
} catch (e) {
  console.log("JSON Error: " + e.message);
}

//Scope--local,global

//Hoisting--variable can be used before being declared
console.log(j);
var j = "fourth";

function example() {
  let name = "name";
  return name;
}
console.log(example());

//Strict mode...help prevent mistakes

("use strict");
let test = function () {
  "use strict";
};

const years = 19;
const isOldEnough = age >= 18;

if (years >= 18) {
  console.log("wanjala can start driving");
} else {
  const yearsLeft = 18 - age;
  console.log("you are underAge, you still have" + yearsLeft + "left");
}
