'use strict';

// function calcAge(birthYear) {
//   const age = 2027 - birthYear;

//   function printAge() {
//     const output = `${firstName} , you are ${age} born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1996) {
//       //creating New variable with the same name as outer scope'svariable
//       const firstName = 'Mike';

//       //Reasigning outer scope's variable
//       output = 'NEW OUTPUT';

//       const str = `Oh and you are a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     //   console.log(add(5,3));
//   }
//   printAge();

//   return age;
// }

// const firstName = 'Wanjala';
// calcAge(1990);

// //Hoisting in practice
// //variables
// console.log(me); //undefined error
// console.log(job); //unitialised
// console.log(year); //undefined

// var me = 'mike';
// let job = 'Engineer';
// const year = 1999;

// //Functions
// console.log(mutDecl(2, 4)); //we get the result
// console.log(addExp(2, 4)); //cannot access error before iitialisation
// console.log(addArrow(7, 8)); //undefined

// function mutDecl(a, b) {
//   return a + b;
// }

// const aadExp = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// //example
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log('All products deleted');
// }

// //this keyword
// console.log(this); //window object

// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this); //undefined
// };
// calcAge(1888);

// // const jonas ={
// //     firstName:"Wanjala",
// //     year: 1990,
// //     calcAge: function(){
// //         console.log(this);
// //         console.log(2087 - this.year)
// //     }
// //}
// jonas.calcAge();

// const matlida = {
//   year: 2017,
// };

// matlida.calcAge = jonas.calcAge; //method borrowing
// matlida.calcAge();

// const f = jonas.calcAge;
// f();

const jonas = {
  firstName: 'Wanjala',
  year: 1990,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);

    //solution 1
    // const self = this;//self or that
    // const isMillenial = function(){
    //     console.log(self.yeart >= 1991 &&
    //         self.year <= 1996);

    //         // console.log(this.yeart >= 1991 &&
    //         //     this.year <= 1996);
    // };

    //solution2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1991 && this.year <= 1996);
    };

    isMillenial();
  },
  greet: () => console.log(`hey ${this.firstName}`), //no this keyword(undefined for arrow functions)
};
jonas.greet();
jonas.calcAge();

//Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(3, 4);
addExpr(8, 73, 3);

var addArrow = (a, b) => a + b;

//primitives vs objects types
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);

const mike = {
  name: 'mike',
  age: 22,
};

const friend = mike;
friend.age = 34;
console.log('Friend:', friend); //age 34
console.log('Me', mike); //age 34, point to the same object

//in practice
//primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davies';
console.log(lastName, oldLastName);

//reference types
const jessica = {
  firstName: 'jessica',
  lastName: 'Wanjala',
  age: 34,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'mikwe';
console.log('before marriage', jessica);
console.log('After marriage', marriedJessica);

//copying objects
const jessica2 = {
  firstName: 'jessica',
  lastName: 'Wanjala',
  age: 34,
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Werunga';
console.log('before marriage', jessica2);
console.log('After marriage', jessicaCopy);
