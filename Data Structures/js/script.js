'use strict';

// Data needed for a later exercise
//const flights =
// '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return this.starterMenu[starterIndex], this.mainMenu[mainIndex];
  },

  orderDelivery: function({starterIndex,mainIndex,
time,address}){
console.log(`order received! ${this.starterMenu[starterIndex]}
and ${this.mainMenu[mainIndex]} will be delivered to ${address}
at ${time}`);
  },

  orderPasta: function(ing1,ing2,ing3){
      console.log(`here is your delicious pasta with ${
      ing1} ,${ing2} and ${ing3}`);
  },

restaurant.orderDelivery({
    time: '22:39',
    address: 'Nairobi',
    mainIndex:2,
    starterIndex:9,
}),

//Enhanced literals
orderPizza(mainIngredient,...otherIngredients){
console.log(mainIngredient);
console.log(otherIngredients);
},

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

//destructuring objects
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName,hours,tags);

//default values
const {menu =[],starterMenu: starters = []} = restaurant;
console.log(menu,starters);

//mutating variables
let a = 111;
let b =808;
const obj ={a:23,b:7,c:14};
({a,b} = obj);

//nested Objects
const {fri:{open,close}} = openingHours;
console.log(open ,close);



const arr = [1, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//destructuring arrays declare using const
const [x, y, z] = arr;
console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//switching variables
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main,secondary)

[main, secondary] = [secondary, main];
console.log(main, secondary);

//receive 2 return values from a function
const [starter, mainCourse] = restaurant.order[(2, 0)];
console.log(starter, mainCourse);

//Nested destructuring
const nested = [2, (4)[(3, 7)]];
const [i, , j] = nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values
const [p = 1, g = 1, r = 1] = [8, 9];
console.log(p, q, r); //r = 1;

//The spread operator
//destructuring
const array = [8,9,2];

const newArr = [1,2, ...array];
console.log(newArray);

//adding another element to array
const newMenu = [...restaurant.mainMenu,'Gnocci'];
console.log(newMenu);

//copy array
const mainMenuCopy = [...restaurant.mainMenu];

//join two arrays or more
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

//iterables
const str = 'Jonas';
const letters = [...str, '','S.'];
console.log(letters);

//Real world example
const ingredients = [prompt(`lets make pasta Ingredient 1?`),
 prompt('ingredient 2?'),prompt("ingredient 3?")];
 console.log(ingredients)

 restaurant.orderPastor(...ingredients);

//Objects
const newRestaurant ={founding:1818 ,...restaurant,founder:'Wanjala'}
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = "Ristoraunte Roma";
console.log(restaurantCopy.name);
console.log(restaurant.name);

//Rest pattern on LEFT side
const [a,b, ...others] = [1,2,3,4,5];
console.log(a,b,others);//1 2 [3,4,5];

const [pizza,,rissoto,...otherfood] =[...restaurant.mainMenu, ...restaurant.starterMenu]
console.log(pizza,rissoto,otherfood);

//Objects
const {sat,...weekdays} = restaurant.openingHours;
console.log(weekdays);

//2) functions
const add = function(...numberAdd){
let sum = 0;
for(let i=0;i<numbersAdd.length;i++) sum+= numbers[i];
console.log(sum);
};
add(2,3);
add(2,3,4,5,5);
add(5,5,5,6,6);

const x =[23,5,67];
add(...x);

restaurant.orderPizza('mushroom','onion','olives');//mushroom,and an Array of the rest
restaurant.orderPizza('mushroom');

//short circuiting
//use any data type and return any data type and can do short circuiting
console.log(3 || 'wanjala');//3
console.log('' || 'Jonas');//jonas
console.log(true || 0);//true
console.log(undefined || null);//null

console.log(undefined || 0 || null || 'Hello' || 23 || true);

//application of || 
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests1);//10 numGuests doesnt exist

//setting default values
const guest2 = restaurant.numGuests || 10
console.log(guest2);

//using &&
console.log('----AND----')
console.log(0 && 'Wanjala');//0
console.log(7 && 'jonas');//jonas

if(restaurant.orderPizza){
    restaurant.orderPizza('mushroom','spinach');
}

restaurant.orderPizza && restaurant.orderPizza('Mushroom','Spinach');

//the nullish coalescing operator(??)
//works with idea of nullish ie null and undefined
restaurant.numGuests = 0;
const guests = restaurant.numGuests || 10;
console.log(guests);

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

//coding challenge
//1
const[players1,players2] = game.players;
console.log(players1,players2);

//2
const [gk,...fieldPlayers] = players1;
const [gk,...fieldPlayers] = players2;
console.log(gk,fieldPlayers);

//3 all players
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4.
const players1Final = [...players1,'Thiago','Coutinho','Perisic']

//5.
const {odds: {team1,x:draw,team2}} = game;
console.log(team1,draw,team2)

//6.
const printGoals = function(...players){
console.log(`${players.length}`);
}
printGoals(`'Davies','Muller','Lewandoski' and 'Kimich'`);

//the for-of loop(looping Arrays)
const menu = [...restaurant.starterMenu,...restaurant.mainMenu];
for(const item of menu) console.log(item);
for(const [i,el] of menu.entries()){
    console.log(`${item[i] + 1}  ${item[el]}`);
}

//Enhanced object literals
const openingHours = {
    thu:{
        open:12,
        close:22,
    },
    fri:{
        open:23,
        close:12,
    },
};

//computing
// const weekDays = ['mon','tue','wed','thur','fri','sat','sun'];

//Optional chaining
if(restaurant.openingHours.mon)
console.log(restaurant.openingHours.mon.open);

//with optional chaining
console.log(restaurant.openingHours.mon?.open);//undefined
console.log(restaurant.openingHours?.mon?.open);

//example
const days = ['mon','tue','wed','thur','fri','sat','sun'];
for(const day of days){
  const open =  restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day},we open at ${open}`)
}

// optional chaining on methods
console.log(restaurant.order?.(0,2) ?? 'method does not exist');

//on Arrays

const users = [{name:'mike',
email:'mwerunga222'
}];

console.log(users[0]?.name ?? 'User array empty')

//looping objects
//looping over property names
const properties = Object.keys(openingHours);
console.log(properties);//an array

let openStr = `we are open on ${properties.length} days:`

for(const day of properties){
    openStr += `${day}, `;
}

console.log(openStr);

//property VALUES
const values = Object.values(openingHours);
console.log(values);

//loop  over whole object we need entries(names + values)
const entries = Object.entries(openingHours);
console.log(entries);

for(const [key,{open,close}] of entries ){
    console.log(`on ${key} we open at ${open} and close at ${close}`);
}

//challenge
//sets and maps
const orderSet = new Set(['pasta','pizza','pizza','rissoto',
'Pasta','pizza'])
console.log(orderSet);

console.log(new Set('jonas'));//'j'.'o'...

//working with sets
console.log(orderSet.size);//size
console.log(orderSet.has('pizza'))//if it has pizza
orderSet.add('eggs');
orderSet.add('eggs');
orderSet.delete('pizza');//deletes element
//orderSet.clear();//deletes all elements
console.log(orderSet)//eggs will appear once
//retrieve values from a set there is no way to do that

for(const order of orderSet){
    console.log(order);
}

//use case of sets in real world (to remove duplicate values of arrays)
const staff = ['waiter','chef','waiter','manager','cashier','chef'];
const staffUnique =[...new Set(staff)];
console.log(staffUnique)
console.log(new Set(['waiter','chef','waiter','manager','cashier','chef']).size);

//maps(more useful than sets)
const rest = new Map();
rest.set('name','wanjala werungae');//key ,value
rest.set(76,'Firenze,Italy');
console.log(rest.set(2,'Lisbon,Portugal'));

rest.set('categories',['Italian','Kenyan']).set('opena',
11).set('close',23).set(true,'we are open :D').set(
    false,'we are closed :f'
);

console.log(rest.get('name'));//wanjala werungae
console.log(rest.get('categories'));

const time = 21;
console.log(rest.get(time > rest.get('opena') && time < rest.get('close')));
//we get its open because 21is between 11 and 23

console.log(rest.has('categories'));//true
console.log(rest.delete(2));
rest.set(document.querySelector('h1'),'Heading');
console.log(rest.size)//size of the map
console.log(rest.clear());

const arru = [1,2]
//use arrays as objects and map keys
rest.set(arru,'Test')
console.log(rest.get(arru));

// maps
const question = new Map([
    ['question','What is the best programming language in the world?'],
    [1,'C'],
    [2,'java'],
    [3,'javascript']
    ['correct',3],
    [true,'correct'],
    [false,'Try again'],
]);
console.log(question);

//convert object to map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//iterating on maps
//Quiz app
console.log(question.get('question'))
for(const [key,value] of question){
    if(typeof key === 'number')console.log(`Answer ${key
    }: ${value}`);
}
const answer = Number( prompt('Your answer'));
console.log(answer);

console.log(question.get(question.get('correct') === answer));

//convert map to array
console.log([...question])

//challenge
const events =[...new Set(gameEvents.values())];
console.log(events)

gameEvents.delete(64);
console.log(`an event happened on average every ${90/gameEvents
.size} minutes`);

const time = [...gameEvents.keys().pop];
console.log(time);

// for(const [min,event] of gameEvents){
//     const half = min <= 45 'FIRST' : 'SECOND';
//     console.log(`[${half}] HALF ${min}: ${event}`);
// }




















