// // var job = "programmer";
// // console.log(job);

// const ageMike = 1998 - 2020;
// const now = 1998;
// const ageWike = now - 2020;
// console.log(ageMike);

// const firstName = "Wanjala";
// const lastName = "Werunga";

// console.log(firstName + ' ' + lastName);

// //assignment operators
// let x = 10+10;
// x += 10;// x = x + 10; = 30
// console.log(x);

// //comparison operators
// console.log(ageMike > ageWike);
// console.log(ageMike >= 18);

// //coding challenge
// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;

// const markBMI = markWeight/(markHeight * markHeight);
// console.log(markBMI);

// const johnBMI = johnWeight/(johnHeight * johnHeight);
// console.log(johnBMI);
// // console.log(markBMI,johnBMI);

// console.log(markBMI > johnBMI);

//template literal
// const year = 1990;
// const birthYear = 1930;
// const tearche = 98;
// let firstName = "Wanjala";
// const mikenew = `iam ${firstName} a ${year - birthYear} year old ${tearcher}`;
// console.log(mikenew);

// console.log(`string\n\
// with\n\
// multiple lines`);

//conditional statements
const age = 17;

if(age >= 18){
    console.log("Wanjala can start driving");
}else{
    const yearsLeft = 18 - age;
    console.log(`Wanjala is too young ${yearsLeft} years left:`);
}

//type conversion and cohesion
const inputYear = "1990";
console.log(Number (inputYear), inputYear);
console.log(inputYear + 18);
console.log(Number(inputYear)  + 2020);

console.log(String(23));

//type cohesion(operation dealing with two values that are different)
console.log(`i am ` +`23 ` + `years old`);
console.log("23" > "18");

let n =`1` + 1; // `11``
n =n -1;
console.log(n);

//truthy and falsy statements
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Wanjala"));
console.log(Boolean({ }));

const money = 100;
if (money){
    console.log("dont spend it all");
}else{
    console.log("you should get a job!");
}

let height = 0;
if(height){
    console.log("yeey height is defined");
}else{
    console.log("height is undefined");
}

//equality operators
const  price = 18;
if(price === 18){
console.log("You just became an adult");
}

// const favourite = Number(prompt("what is your favourite number"));
// console.log(favourite);
// console.log( typeof favourite);

// if(favourite === 89){ // 123` == 23
//     console.log("cool 89 is an amazing number!")
// }else if(favourite === 7){
//     console.log("7 is also a cool number")
// }else{
//     console.log("Number is not 89 or 7")
// }

// if(favourite !== 89) console.log("why not 89?");

//Boolean logic... uses true and false values AND<OR<NOT

const hasDriversLicence = true;//A
const hasGoodVission = true;//B

console.log(hasDriversLicence && hasGoodVission);
console.log(hasDriversLicence || hasGoodVission);
console.log(!hasDriversLicence);

const shouldDrerive = hasDriversLicence && hasGoodVission;

if(shouldDrerive){
    console.log("Wanjala is able to drive");
}else{
    console.log("Someone else should drivr");
}

const isTired = true;//C
console.log(hasDriversLicence || hasGoodVission || isTired);

if (hasGoodVission && hasDriversLicence && !isTired){
    console.log("wanjala is able to drive");
}else{
    console.log("Someone else should drive");
}

//Coding Challenge
const scoreDolphins = (96 + 108 + 89)/3;
const scoreKolas = (88 + 91 + 110)/3;
console.log(scoreDolphins,scoreKolas);

if(scoreKolas > scoreDolphins){
    console.log("Kola is the winner");
}else if(scoreDolphins > scoreKolas){
    console.log("Dolphin is the winner");
}else {
    console.log("its a draw");
}

//switch statement
const day = "monday";

switch(day){
    case "monday" :// day === "monday"
        console.log("plan course structure");
        console.log("Go to coding meetup");
        break;
        case "Tuesday":
            console.log("prepare theory videos");
            break;
        case "wednesday":
        case "thursday":
                    console.log("read for exams");
                    break;
        case "friday":
            console.log("go to the movie");
            break;
            case "saturday":
                console.log("Visit my relatives");
                break;
                case "sunday":
                    console.log("enjoy the weekend");
                    break;
                    default:
                        console.log("Not a valid day");
}

if(day === "monday" || day === "tuesday"){
    console.log("plan course structure")
    console.log("Go to coding meetup")
}else if(day === "wednesday" || day ==="thursday"){
    console.log("write code example")
}else if(day === "friday" || day === "sunday"){
console.log("record videos");
}else {
    ("invalid day");
}

//statements and expressions
//conditional operators(ternary operator)..needed to take a quick decision

const tag = 13;
tag >= 18 ? console.log("wanjala likes to drink wine") :
console.log("wanjala does not likes to drink wine");

const drink =  tag >= 18? "wine" : "water";
console.log(drink);

let drink2;
if (tag >= 18 ) {
    drink2 ="wine"
}else{
    drink2 = "water";
}
console.log(drink2);

console.log(`i like to drink ${tag >= 18 ? 'wine': 'water'}`);

const bill = 275;
const tip = bill <= 300 && bill >= 50? bill * 0.15 : 
bill * 0.2;
console.log(`the bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);


































































