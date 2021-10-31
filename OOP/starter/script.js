'use strict';

const person = function (firstName, birthYear) {
  //instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //never do this
  // this.calcAge  = function(){
  //     console.log(2037-this.birthYear)
};

const wanjala = new person('wanjala', 1998);
const genty = new person('Gentrix', 1999);
const matlida = new person('Matlida', 2017);
const jack = new person('jack', 2090);
console.log(wanjala, genty);

//1. New {} is created
//2. function is called, this = {}
//3. {} linked to prototype
//4. function automatatically return {}

//Prototypes
person.prototype.calcAge = function () {
  console.log(2020 - this.birthYear);
};

wanjala.calcAge();
matlida.calcAge();
genty.calcAge();
console.log(wanjala.__proto__);
console.log(person.prototype.isPrototypeOf(wanjala));

person.prototype.species = 'Homo Sapiens';
console.log(wanjala.species, matlida);

console.log(wanjala.hasOwnProperty('firstName'));

//Object.prototype
console.log(wanjala.__proto__);
console.log(wanjala.__proto__.proto__proto__);

console.dir(person.prototype.constructor);

const arr = [3, 4, 8, 8, 6, 7, 85, 4, 4]; // new Array ===[]
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.proto__);

Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());
const h1 = document.querySelector('h1');

//Coding challenge
const Car = function (make, curSpeed) {
  this.make = make;
  this.curSpeed = curSpeed;
};

const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

Car.prototype.accelerator = function () {
  // console.log(10 + this.curSpeed);
  this.curSpeed += 10;
  console.log(`${this.make} is going at ${this.curSpeed}km/hr`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.curSpeed}km/hr`);
};

bmw.accelerator();
bmw.accelerator();
bmw.accelerator();
bmw.brake();
mercedes.accelerator();
bmw.brake();
mercedes.brake();

//ES6 classes
//class expression
//const PersonCl = class{}

//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //instance methods
  //Methods will be added to .prototype property
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  //Set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  //static method
  static hey() {
    console.log('Hey there');
  }
}

const jessicca = new PersonCl('Jessica Wanjala', 1998);
console.log(jessicca);
jessicca.calcAge();
console.log(jessicca.age);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessicca.greet();

//Getters and Setters
const account = {
  Owner: 'Wanjala',
  movements: [1200, 530, 120, 9000],

  get latest() {
    return this.movements.slice(-1).pop();
  },
  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);
account.latest = 30000;

//Static methods
person.hey = function () {
  console.log('Hey there✔💖');
};
person.hey();

//Object.create
const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
steven.name = 'steven';
steven.birthYear = 2002;
steven.calcAge();

const sarah = Object.create(PersonProto);
sarah.init('sara', 1999);
sarah.calcAge();

class CarCl {
  constructor(make, curSpeed) {
    this.make = make;
    this.curSpeed = curSpeed;
  }

  accelerate() {
    this.curSpeed += 10;
    console.log(`${this.make}is going at ${this.curSpeed}km/hr`);
  }

  break() {
    this.curSpeed -= 5;
    console.log(`${this.make}is going at ${this.curSpeed}km/hr`);
  }

  get speedUS() {
    return this.curSpeed / 1.6;
  }

  set speedUS(speed) {
    this.speed = this.curSpeed * 1.6;
  }
}

const ford = new CarCl('Ford', 120);
console.log(ford.speedUS);
ford.accelerate();
ford.break();
ford.speedUS = 50;

//inheritance
const person = function (firstName, birthYear) {
  //instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};

person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

//Linking prototypes
Student.prototype = Object.create(person.protype);

const Student = function (firstName, birthYear, course) {
  person.call(this, firstName, birthYear);
  this.course = course;
};

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and i study
  ${this.course}`);
};

Student.prototype.calcAge = function () {
  console.log(`i was born in ${this.birthYear}`);
};

const mike = new Student('Mike', 2020, 'Computer Science');
console.log(mike);
mike.introduce();
mike.calcAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto);

console.log(mike instanceof Student); //true
console.log(mike instanceof person);
console.log(mike instanceof Object);

Student.protype.constuctor = Student;
console.dir(Student.protype.constructor);

//Challenge 3

const Ev = function (make, curSpeed, charge) {
  Car.call(this, make, curSpeed);
  this.charge = charge;
};

Ev.prototype = Object.create(Car.prototype);

Ev.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

Ev.prototype.accelerate = function () {
  this.curSpeed += 20;
  this.charge--;
  console.log(`${this.make} going at ${thiscurSpeed},
   with a charge of ${this.charge}`);
};
const tesla = new Ev('Tesla', 120, 23);
tesla.chargeBattery(90);
tesla.break();
tesla.accelerate();

//ES6 classes(inheritance)
class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    //Always needs to happen first
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    `My name is${this.fulltName} and I study ${this.course}`;
  }
  calcAge() {
    console.log(`Iam ${2037 - this.birthYear} years old`);
  }
}

const martha = new StudentCl('Martha', 2012, 'computer sciece');
martha.introduce();
martha.calcAge();

//object.create
const StudentProto = Object.create(PersonProto);
StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`My name is ${this.firstName} and i study ${this.course}`);
};
ss;
const jay = Object.create(StudentProto);
jay.init('jay', 2010, 'Computer Science');
jay.introduce();
jay.calcAge();

//Classes and encapsulation
class Account {
  //1) Public fields(instances)
  locale = navigator.language;

  //2) private fields
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    //protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  //3) public methods
  //public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdrawal(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approvLoan(val)) {
      this.deposit(val);
      console.log('Loan apprvoded');
      return this;
    }
  }
  //4) private methods
  _approvLoan() {
    return true;
  }

  static helper() {
    console.log('helper function');
  }
}

const acc1 = new Account('Wanjala mike', 'USD', 1111);

acc1._movements.push(25000);
acc1._movements.push(-1200);
acc1.deposit(2300);
acc1.withdrawal(1725);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

//Chaining methods
aac1
  .deposit(300)
  .deposit(5000)
  .withdrawal(37)
  .requestLoan(26000)
  .withdrawal(67770);
