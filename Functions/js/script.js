'use strict';

//Closer look at functions
//Default parameters
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 100 * numPassengers
) {
  //   numPassengers = numPassengers || 1;ES5

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('H123', 5, 899);
createBooking('LH3', 4);
createBooking('lj4', undefined, 1000);

//how passing arguments works
const flight = 'LH234';
const wanjala = {
  name: 'Mike Werunga',
  passport: 243243243,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999'; //completely different variable

  passenger.name = 'Mr. ' + passenger.name;
  if (passenger.passport === 243243243) {
    alert('Check In');
  } else {
    alert('wrong passport!');
  }
};

checkIn(flight, wanjala);
console.log(flight);
console.log(wanjala);

//is the same as doing...
//const flightNum = flight;
//const passenger = wanjala;

//example
const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 10000000);
};

newPassport(wanjala);
checkIn(flight, wanjala);

//functions accepting a callbacck function
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('javaScript is the best!', upperFirstWord);

transformer('Javascript is the Best!', oneWord);

//JS uses callbacks all the time
const high5 = function () {
  console.log('Niaje 💋❤👏❤');
};
document.body.addEventListener('click', high5);

['wanjala', 'kevin', 'lewis', 'Genty'].forEach(high5); //4elements

//functions returning functions
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Wanjala');
greeterHey('Mike');

greet('Hello')('Wanjala');

//challenge
const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Jonas');

//call and apply method
const lufthansa = {
  airline: 'lufthansa',
  lataCode: 'LH',
  bookingss: [],
  //book:function(){}
  book(flightNumber, names) {
    console.log(`${names} booked a seat on ${this.airline}
 flight ${this.lataCode} ${flightNumber}`);
  },
};
//this.bookingss.push({ flight: `${this.lataCode}${flightNumber}`, name });

lufthansa.book(238, 'Wanjala Mike');
lufthansa.book(938, 'Smith Row');

const eurowings = {
  airline: 'Eurowings',
  lataCode: 'EW23',
  bookingss: [],
};
//assign book function to book
const book = lufthansa.book;

//book(23,'sarah Williams') does not work
//call method
book.call(eurowings, 23, 'Sarah Williams'); //this = eurowings
book.call(lufthansa, 23, 'Willy');
console.log(eurowings, lufthansa);

const swiss = {
  airline: 'Swiswings',
  lataCode: 'WWWM',
  bookingss: [],
};

book.call(swiss, 82, 'Mike');

//apply method..though not used
const fligtData = [123, 'Geoge'];
book.apply(swiss, fligtData); //this = swiss
console.log(swiss);

book.call(swiss, ...fligtData);

//Bind method
//book.call(eurowings,23,'Sarah Williams')

const bookeEW = book.bind(eurowings);
const bookLh = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookeEW(12, 'mike wanjala');
bookLX(89, 'Aubameyang');

const bookeEW23 = book.bind(eurowings, 12); //set certain arguments
bookeEW23('Peter Dury');
bookeEW23('Marths cooper');

//with event listeners
lufthansa.planes = 388;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
//addVAT = value => value + value * 0.23
console.log(addVAT(188)); //rate already set

//function calling another function
const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));

//coding challenge

const poll = {
  question: 'What is your favourite programing language?',
  options: ['0,Js', '1,python', '2 ,Rust', '3 C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer: () => {
    //Get the answer
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    //Register the answer
    console.log(answer);
    typeof answer === 'number' &&
      answer < this.answers.lenght &&
      this.answers[answer]++;

    this.displayresults();
    this.displayresults('string');
  },
  displayresults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`poll results are${this.answers.join(', ')}`);
    }
  },
};
//poll.registerNewAnswer();
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

poll.displayresults.call({ answers: [5, 2, 3] }, 'string');

//immidiately invoked functions
const runOnce = function () {
  console.log('this will never run again');
};
runOnce();

//IIFE
(function () {
  console.log('This will never run again!!');
})();

(() => console.log('This will never run again'))();

//CLOSURES
const secureBooking = function () {
  let passengerCount = 0;

  //booker
  return function () {
    passengerCount++;
    console.log(` ${passengerCount} passengers `);
  };
};

const booker = secureBooking();
booker(); //1passengers
booker(); //2passengers
booker();

console.dir(booker);

//Example1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 2000;
  f = function () {
    console.log(b * 2);
  };
};

g();
f();

//Re- assigning f function
h();
f();
console.dir(f);

const m = function () {
  const w = 49;
   v = function () {
    console.log(w + 200);
  };
};

m();
v();

//Example2 on closure
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`we are now boarding all ${n} passengers`);
    console.log(`there are 3 goups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait}seconds`);
};

const perGroup = 1000;
boardPassengers(1000, 3);

//challenge
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
