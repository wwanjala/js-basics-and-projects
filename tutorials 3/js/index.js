//Strict mode allows us to write secure code also creates visible errors
'use strict';

//Functions piece of code that can be reused over and over again

function logger() {
    console.log("my name is wanjala");
}

//calling  / running / invoking the function
logger();
logger();
logger();

function fruitProcessor(apples,oranges){
    console.log(apples,oranges);
    const juice = `juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(8,0);
console.log(appleJuice);
// console.log(fruitProcessor(7,9));
const appleOrangeJuice = fruitProcessor(3,7);
console.log(appleOrangeJuice);

//Function declaration
function calcAge1(birthYear){
    return 2018 - birthYear;
}

const age1 = calcAge1(1919);
console.log(age1);

//function expression
const calcAge2 =  function (birthYear){
    return 2018 - birthYear;
}

const age2 = calcAge2(1919);
console.log(age1,age2);

//Arrow functions
const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1990);
console.log(age3);

const yearsUntilRetirement =( birthYear,firstName) => {
    const age = 2018 -birthYear;
    const retirement = 65 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, "wanjala"));
console.log(yearsUntilRetirement(1999, "Mike"));

//Functions calling other functions
function cutFruitPieces(fruit){
    return fruit * 4;
}

function fruitProcessor(apples,oranges){
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    console.log(apples,oranges);
    const juice = `juice with ${applePieces}pieces of apples and ${orangePieces} pieces of oranges`;
    return juice;
}

console.log(fruitProcessor(2,3));

//review
const calcAge = function (birthYear){
    return 2037 - birthYear;
}
// const yearsUntilRetirement = function ( birthYear,firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;
//     return retirement;

//     if(retirement > 0){
    
//         return retirement;
//     }else{
//         return -1;
//     }
   

// console.log(yearsUntilRetirement(1991,"Wanjala"));

//challenge #3
const calcAverage = (a , b , c) =>(a+b+c)/3;
console.log(calcAverage(2,3,4));

const scoreDolphins = calcAverage(44,23,71);
const scoreKolaas = calcAverage(65,54,49);
console.log(scoreDolphins, scoreKolaas);

function checkWinner(avgDolphins,avgKolaas){
    if(avgDolphins >= 2 * scoreKolaas){
        console.log(`Kolaas is the winer(${avgDolphins} vs. 
            ${avgKolaas})`);
    }else if(avgKolaas >= 2 * avgDolphins){
        console.log(`Kolaas is the winer(${avgKolaas} vs. 
            ${avgDolphins})`);
    }else{
        console.log("no winner");
    }
}

checkWinner(scoreDolphins,scoreKolaas);
checkWinner(89,999);

//Introduction to arrays (Data Structures)
const friend1 = "Michael";
const friend2 = "Steve";
const friend3 = "Mike";

//Literal syntax
const friends = ['michael','Steve','Wanjala'];
console.log(friends);

const year = new Array(1818,1919,1990,2020);

console.log(friends[0]);
console.log(friends[friends.length - 1]);

friends[2]  = "kevo";
console.log(friends);
// friends = ['Bob' , 'Alice']
const wanjala = ['Wanjala','Michael' ,2021-1999,'Developer',friends];
console.log(wanjala);

const calcage  = function(birthYear){
    return 2037 - birthYear;
}

const years = [1990,2002,2022,2018];
const age4 = calcage(years[0]);
const age5 = calcage(years[1]);
const age6 = calcage(years[years.length - 1]);
console.log(age4,age5,age6);

//Array methods(Operations)
const mike = ["Michael","steve","Peter"];
mike.push("Jay");
console.log(mike);

//add to the beginning 
mike.unshift("John");
console.log(mike);

//remove elements
mike.pop();//it removes the last element
console.log(mike);

mike.shift();
console.log(mike);

console.log(mike.indexOf("steve"));

console.log(mike.includes("Michael"));
console.log(mike.includes("Wanjala"));

//challenge
const calcTip = function(bill){
    return bill >= 50 && bill <= 300 ? bill = 0.15 : bill = 0.2;

}
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill = 0.15 : bill * 0.15;

const bills = [125,555,44];
const tips = calcTip(bills[0]),calcTip(bills[2]),calcTip(bills[2]);
console.log(bills,tips);

const totals = bills[0] + tips[0];

//Objects combines multiple values
const werungaa = {
    firstName : 'wanjala',
    lastName: 'werunga',
    age: 1999 - 2021,
    job: 'Developer',
    friends: ['kevo','vic','gody']
};
console.log(werungaa);

//dot and bracket notation
console.log(werungaa.lastName);
console.log(werungaa['lastName']);

const nameKey = 'Name';
console.log(werungaa['first' + nameKey]);
console.log(werungaa['last' + nameKey]);

const details = prompt('what do you want to know about wanjala? choose between age,job and lastname');
console.log(werungaa[details]);
if(werungaa[details]){
    console.log(werungaa[details])
}else{
    console.log("Details are invalid")
}

//adding objects
werungaa.location = 'Kenya';
werungaa['twitter'] = '@mikewanjala';
console.log(werungaa);

//challenge
const jonas = {
    friends : ['Michael','Peter','Wanjala']
};
console.log(`jonas has 3 frrinds`+ jonas )

//Object methods
const pics = {
    firstName: "Kuts",
    secondName: "Neddy",
    job:"Developer",
    frirnds: ["mike","Icon","Sarah"],
    birthYear:1999,
    hasDriversLicence: true,

    // calcAge: function(birthYear){
    //     return 2037 - birthYear;
    // }
    calcAge: function(){
        // console.log(this);
        // return 2037 - this.birthYear;
        this.age = 2037 - birthYear;
        return this.age;
    },
    getSummary: function(){
    return `${this.firstName} is a ${this.calcAge()} teacher
    year old ${jonas.job}, and he has ${this.hasDriversLicence
    ? "a" : "no"} drivers licence`
    }
};

console.log(pics.calcAge());
console.log(pics.age);

console.log(pics.getSummary());

//coding challenge
const mark = {
names: "Mark Miller",
mass: 78,
heihgt:1.69,
calcBMI: function(){
this.BMI = this.mass/(this.height*this.height);
return this.BMI;
}
};
const john = {
    names:"John Smith",
    mass:92,
    height: 1.95,
    calcBMI: function(){
    this.BMI = this.mass/(this.height*this.height);
        return this.BMI;
    }
};
mark.calcBMI();
john.calcBMI();
console.log(mark.BMI,john.BMI);
if(mark.calcBMI() > john.calcBMI()){
    console.log(`${mark.names}'s BMI(${mark.BMI}) is higher than ${john.names}'s BMI(${john.BMI})`);
}else if (john.calcBMI() > mark.calcBMI()){
    console.log(`${john.names}'s BMI(${john.BMI}) is higher than ${mark.names}'s BMI(${mark.BMI})`);
}else{
    console.log("they are equal")
};

//loops 
//for loop keeps running while condirion is true
for(let rep = 1;rep <=10 ;rep++){
    console.log(`lifting weights repetition ${rep}`);
}
//loop through arrays
const types = [];
for(let i = 0;i < werungaa.length; i++){
    //reading from werungaa array
console.log(werungaa[i], typeof werungaa[i]);
if(typeof werungaa[i] !== 'string') continue;
//filling types array
//types[i] = typeof werungaa[i];
types.push(typeof werungaa[i]);
}
console.log(types);

const years = [1919,1990,1992,2020];
const ages = [];
for(let i = 0;i<years.length;i++){
    ages.push(2037 - years[i]);
}
console.log(ages);

//continue and break
//continue is to exit the current iteration of the loop and continue to the next one while break terminates the loop

//looping backwards
const michael  =[
    'mike',
    'wanjala',
    2037-1991,
    'dev',
    ['peter','kevo','vic']
];
for(let i=michael.length - 1;i >= 0 ;i--){
    console.log(michael[i]);
}

//loop inside a loop
for(let exercise = 1;exercise < 4; exercise++){
    console.log(`...satating exercise ${exercise}`);

    for(let rep = 1; rep < 6; rep++){
        console.log(`lifting weight ${rep}`);
    }
}

//the while loop
let rep =1;
while(rep <= 10){
console.log(`lifting weights ${rep}`);
rep++;
}

let dice =Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6){
    console.log(`you rolled a ${dice}`);
    dice =Math.trunc(Math.random() * 6) + 1;
    if(dice === 6)CSSConditionRule.log('Loop is about to end..');
}


//challenge
const calcTip = function(bill){
    return bill >= 50 && bill <= 300 ? bill = 0.15 : bill = 0.2;
}

const totals = bills[0] + tips[0];
//challenge
const tips = [];
const totals = [];
const bills = [22,295,176,440,37,105,10,1100,86,52];

for(let i =0;i< bills.length;i++){
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills,tips,totals);

const calcAverage = function(arr){
let sum = 0;
for(let i = 0; i < arr.length;i++){
    let sum  = sum + arr[i];
    sum += arr[i];
}
return sum/arr.length;
}
console.log(calcAverage(totals));
console.log(calcAverage(tips));







































































