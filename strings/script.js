"use strict";

//working with Strings
const airline = "TAP Air Portugal";
const plane = "A320";

console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);

console.log(airline.length);
console.log("B737".length);

//methods 0 based
console.log(airline.indexOf("r"));
console.log(airline.lastIndexOf("r"));
console.log(airline.indexOf("Portugal"));

console.log(airline.slice(4)); //Air Portugal
console.log(airline.slice(4, 7)); //7-4=3 Air

console.log(airline.slice(0, airline.indexOf(" "))); //extract 1st occurence
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2)); //it starts from the ennd
console.log(airline.slice(1, -1)); //cuts T and l

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  // const s = seat.slice(-1);
  // if (s === B || s === E) console.log("You got the middle seat");
  // else console.log("You got lucky");
};
checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix capitalization in name
const passenger = "jonAS"; //Jonas
const passengeLower = passenger.toLowerCase();
const passengerCorrect =
  passengeLower[0].toUpperCase() + passengeLower.slice(1);
console.log(passengerCorrect);

//comparing emails
const email = "hello@jonas.io";
const loginEmail = "  Hello@Jonas.Io\n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimedEmail = lowerEmail.trim();
// console.log(trimedEmail);

const normalisedEmail = loginEmail.toLowerCase().trim();
console.log(normalisedEmail);

console.log(email === normalisedEmail);

//replacing parts of strings
const priceGB = "244,97#";
const priceUS = priceGB.replace("#", "$").replace(",", ".");

const announcement = "All passengers come to boarding door 32!";
console.log(announcement.replace("door", "gate"));

console.log(announcement.replaceAll("door", "gate"));

//Booleans
const planee = "Airbus A320neo";
console.log(planee.includes("A320")); //true
console.log(planee.startsWith("bus")); //false
console.log(planee);

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the new airbus family");
}

//practice exercise
const checkBaggage = function (item) {
  const baggage = item.toLowerCase();
  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are not allowed on board");
  } else {
    console.log("Welcome aboard");
  }
};
checkBaggage("I have a PC,some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks and a gun for protection");

//split and join method into multiple parts
console.log("a+very+nice+string".split("+")); //store result into an array
console.log("Wanjala Mike".split(" ")); //["Wanjala","Mike"]

const [firstname, lastName] = "wanjala Mike".split(" ");

const newName = ["Mr.", firstname, lastName.toUpperCase()].join(" ");
console.log(newName); //Mr. Wanjala MIKE

const capitalizeName = function (name) {
  const names = name.split(" ");
  const namesUpper = [];

  for (const n of name) {
    namesUpper.push(n[0].toUpperCase() + n.slice[1]);
    //namesUpper.push(n.replace(n[0],n[0].toUpperCase))
  }
  console.log(namesUpper.join(" "));
};

capitalizeName("wanjala ann smith davis");
capitalizeName("jonas schmedman");

//padding a string
const message = "Go to gate 23!";
console.log(message.padStart(25, "+").padEnd(32, "+")); //+++++Go.....

const maskCreditCard = function (number) {
  const str = number + "";
  const last = str.slice(-4);
  return last.padStart(str.length, "*");
};
console.log(maskCreditCard(12345678910)); //*******8910
maskCreditCard(97464647575757);

//repeat method
const message2 = "bad weather ... All Departures Delayed..";
console.log(message2.repeat(6));

const planesInline = function (n) {
  console.log(`There are ${n} planes in line${repeat(n)} `);
};

planesInline(9);
planesInline(8);
planesInline(4);

//challenge
document.body.append(document.createlement("textarea"));
document.body.append(document.createlement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[(0).toUpperCase()]
    )}`;
    console.log(`${output.padEnd(20)}`);
  }
});
