"use strict";

// Data needed for a later exercise
// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// Data needed for first part of the section
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // es6 enhanced object literal
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDeliveru({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}. Ordered at ${time} and deliver to ${address}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient, otherIngredients);
  },
};

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const airlane = "Air Serbia";

console.log(airlane.toLowerCase());
console.log("Nikola".toUpperCase());

// Fix capitalizaton in name
const passenger = "nIkoLA"; // Nikola
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passenger, passengerCorrect);

// Comparing emails
const email = "hello@nikola.com";
const loginEmail = "   Hello@Nikola.Com \n";

const correctEmail = loginEmail.toLowerCase().trim();
console.log(email === correctEmail);

// Replacing
const priceGB = "288,97£";
const priceUS = priceGB.replace("£", "$").replace(",", ".");
console.log(priceUS);

const announcement =
  "All passengers come to boarding door 23. Boarding door 23!";
console.log(announcement.replace("door", "gate"));
console.log(announcement.replaceAll("door", "gate"));

console.log(announcement.replace(/door/g, "gate")); // with regular expresions and is case sensetive like all string methods are

// Booleans, 3 methods that are booleans
const plane = "Airbus A320neo";
console.log(plane.includes("A320"));
console.log(plane.includes("Boeaing"));

console.log(plane.startsWith("Air"));

if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
  console.log("Part of the new Airbus family");
}

// Exercise
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes("knife") || baggage.includes("gun")) {
    console.log("You are not allowed on board");
  } else {
    console.log("Welcome aboard");
  }
};
checkBaggage("I have a laptop, some Food and a pocket Knife");
checkBaggage("Socks and camera");
checkBaggage("Got some snacks anda  gun for protection");

// const airlane = "Air Serbia";
// const plane = "A320";

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log("B737"[0]);

// console.log(airlane.length);
// console.log("B737".length);

// console.log(airlane.indexOf("r"));
// console.log(airlane.lastIndexOf("r"));
// console.log(airlane.indexOf("Serbia")); // case sensitive

// console.log(airlane.slice(4, 7)); // slice takes start and end index

// console.log(airlane.slice(0, airlane.indexOf(" ")));
// console.log(airlane.slice(airlane.lastIndexOf(" ") + 1));

// console.log(airlane.slice(-2));
// console.log(airlane.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   // B and E are middle seats (ABCDEF)
//   const s = seat.slice(-1);

//   if (s === "B" || s === "E") {
//     console.log("You got the middle seat!");
//   } else {
//     console.log("You got lucky!");
//   }
// };

// checkMiddleSeat("11B");
// checkMiddleSeat("23C");
// checkMiddleSeat("3E");

// // 1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2.
// const deleteCard = gameEvents.delete(64);
// console.log(gameEvents);

// // 3.
// const numberOfEvents = 90 / gameEvents.size;
// console.log(`An event happened, on average, every ${numberOfEvents} minutes`);

// // 4.
// for (const [key, value] of gameEvents) {
//   let half = "";
//   if (key <= 45) {
//     half = "[FIRST HALF]";
//   } else {
//     half = "[SECOND HALF]";
//   }

//   console.log(`${half} ${key}: ${value}`);
// }

// const rest = new Map();
// rest.set("name", "Classico Italiano");
// rest.set(1, "Firenze, Italy");
// rest.set(2, "Lisbon, Portugal");

// rest
//   .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "We are open")
//   .set(false, "We are closed");

// console.log(rest.get("name"));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 21;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// console.log(rest.has("categories"));
// rest.delete(2);
// console.log(rest.size);
// // rest.clear() // removes all elements

// rest.set([1, 2], "Test");
// rest.set(document.querySelector("h1"), "Heading");

// console.log(rest);

// console.log(rest.get([1, 2]));

// const question = new Map([
//   ["question", "What is the best programming language in the world?"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "JavaScript"],
//   ["correct", 3],
//   [true, "Correct!"],
//   [false, "Wrong answer!"],
// ]);

// console.log(question);

// // convert object to map
// console.log(Object.entries(openingHours));

// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// // Quizz
// console.log(question.get("question"));

// for (const [key, value] of question) {
//   if (typeof key === "number") {
//     console.log(`Answer ${key}: ${value}`);
//   }
// }

// const answer = Number(prompt("Your answer:"));
// console.log(answer);

// console.log(question.get("correct"));

// console.log(question.get(answer === question.get("correct")));

// // convert map to an array
// console.log([...question]);
// console.log(question);

// if (answer === question.get('correct')) {
//   console.log(question.get(true))
// } else {
//   console.log(question.get(false))
// }

// const ordersSet = new Set([
//   "Pasta",
//   "Pizza",
//   "Pizza",
//   "Risotto",
//   "Pasta",
//   "Pizza",
// ]);

// console.log(ordersSet);

// console.log(new Set("Nikola"));

// console.log(ordersSet.size);
// console.log(ordersSet.has("Pizza"));
// console.log(ordersSet.has("Bread"));

// ordersSet.add("Garlic Bread");
// ordersSet.add("Garlic Bread");
// ordersSet.delete("Risotto");
// // ordersSet.clear(); // clears whole set

// console.log(ordersSet);

// for (const order of ordersSet) {
//   console.log(order);
// }

// // example
// const staff = ["Waiter", "Chef", "Waiter", "Manager", "Chef", "Waiter"];

// const staffUnique = [...new Set(staff)]; //
// console.log(staffUnique);
// console.log(new Set(staff).size);

// console.log(new Set("nikola").size);

// property NAMES
// const properties = Object.entries(openingHours);
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;

// for (const day of Object.keys(openingHours)) {
//   openStr += `${day}, `;
// }
// console.log(openStr);

// // property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // entries
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}.`);
// }

// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// // console.log(restaurant.openingHours.mon.open);

// // with optional chaining
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// // example
// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? "closed";
//   console.log(`On ${day}, we open at ${open}.`);
// }

// // methods
// console.log(restaurant.order?.(0, 1) ?? "method does not exist");
// console.log(restaurant.orderRisotto?.(0, 1) ?? "method does not exist");

// // arrays
// const users = [
//   {
//     name: "Nikola",
//     email: "hello@nikola.com",
//   },
// ];

// console.log(users[0]?.name ?? "user array empty");

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) {
//   console.log(item);
// }

// for (const item of menu.entries()) {
//   const [index, food] = item;
//   console.log(`${index + 1}: ${food}`);
// }

// const rest1 = {
//   name: "Capri",
//   // numGuests: 20,
//   numGuests: 10
// };

// const rest2 = {
//   name: "La Piazza",
//   owner: 'Giovanni Rossi',
// };

// // OR assignment operator
// // rest1.numGuests = rest1.numGuests || 10
// // rest2.numGuests = rest2.numGuests || 10
// // rest1.numGuests ||= 10;
// // rest2.numGuests ||= 10;

// // nulish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// // AND assignment operator
// // rest2.owner = rest1.owner && '<ANONYMOUS>';
// // rest2.owner = rest2.owner && '<ANONYMOUS>';

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1)
// console.log(rest2)

// SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];

// // REST, because on the LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, otherFood);

// // objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// // functions
// const add = function (...numbers) {
//   console.log(numbers);

//   let sum = 0;

//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }

//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");

// restaurant.orderPizza("mushrooms");

// console.log("======== OR ========");
// // use ANY data type, return ANY data type, short-circuiting
// console.log(3 || "Nikola");
// console.log("" || "Hello");
// console.log(true || 0);
// console.log(null || undefined);

// console.log(undefined || 0 || "" || "Hello" || 23 || null);

// restaurant.numGuest = 23;
// const guests1 = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guests1);

// const guest2 = restaurant.numGuest || 10;
// console.log(guest2);

// console.log("======== AND ========");
// console.log(0 && "Nikola");
// console.log(7 && "Nikola");

// console.log("Hello" && 23 && null && "Nikola");

// // practical example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza("mushrooms", "spinach");
// }

// restaurant.orderPizza && restaurant.orderPizza("mushrooms", "spinach");

// restaurant.numGuest = 0;
// const guests = restaurant.numGuest ? restaurant.numGuest : 10;
// console.log(guests);

// const guestCorrect = restaurant.numGuest ?? 10;
// console.log(guestCorrect);

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

// // copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// // join 2 arrays or more
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// // iterabes: arrays, strings, maps, sets, not objects
// const str = "Nikola";
// const letters = [...str, "", "V."];
// console.log(letters);
// console.log(...str);

// // real world example
// const ingredients = [
//   // prompt("Let's make pasta! Ingredient 1?"),
//   // prompt("Let's make pasta! Ingredient 2?"),
//   // prompt("Let's make pasta! Ingredient 3?"),
// ];
// console.log(ingredients);

// const order = restaurant.orderPasta(...ingredients);

// // objects
// const newRestaurant = {
//   foundedIn: 1998,
//   ...restaurant,
//   founder: "Guiseppe",
// };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "Ristorante Roma";
// console.log(restaurantCopy.name, restaurant.name);

// restaurant.orderDeliveru({
//   time: "22:30",
//   address: "Via del Sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDeliveru({
//   address: "Via del Sole, 21",
//   starterIndex: 1,
// });

// const { name, categories, openingHours } = restaurant;
// console.log(name, categories, openingHours);

// const {
//   name: restaurantName,
//   categories: tags,
//   openingHours: hours,
// } = restaurant;
// console.log(restaurantName, tags, hours);

// // default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// // mutating variables (switching places)
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

// // nested objects
// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // Switching variables
// // const temp = main;
// // main = secondary;
// // secondary = temp;

// // console.log(main, secondary)

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [first, second] = restaurant.order(2, 0);
// console.log(first, second);

// // nested destructuring
// const nested = [2, 4, [5, 6]];
// const [jedan, dva, [tri, cetiri]] = nested;

// console.log(jedan, dva, tri, cetiri);

// // default values
// const [p=1, q=1, r=1] = [8, 9]; // we can set default values inside the destructured array
// console.log(p, q, r);

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1.
// const [players1, players2] = game.players;
// // console.log(players1, players2);

// // 2.
// const [gk, ...fieldplayers] = players1;

// // 3.
// const allPlayers = [...players1, ...players2];

// // 4.
// const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];

// // 5.
// const { team1, x: draw, team2 } = game.odds;

// // 6.
// function printGoals( ...players) {
//   console.log(players)
//   console.log(players.length)
// }

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals(...game.scored);

// // 7.
// team1 < team2 && console.log('Team 1 is more likely to win');
// team1 > team2 && console.log('Team 2 is more likely to win');

// Coding challenge #2

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // 1.
// console.log("===== Challenge 1 =====");
// const players = Object.entries(game.scored);

// for (const [index, player] of players) {
//   console.log(`Goal ${Number(index) + 1}: ${player}.`);
// }

// // 2.
// console.log("===== Challenge 2 =====");
// const odds = Object.values(game.odds);

// let oddSum = 0;

// for (const odd of odds) {
//   oddSum += odd;
// }

// let averageOdd = oddSum / odds.length;

// console.log(`Average odd: ${averageOdd.toFixed(2)}.`);

// // 3.
// console.log("===== Challenge 3 =====");
// const odds2 = Object.entries(game.odds);

// for (const [teamName, odd] of odds2) {
//   let team = "";

//   if (teamName === "team1") {
//     team = `victory ${game.team1}`;
//   } else if (teamName === "x") {
//     team = "draw";
//   } else if (teamName === "team2") {
//     team = `victory ${game.team2}`;
//   }

//   console.log(`Odd of ${team}: ${odd}`);
// }

// // Bonus
// console.log("===== Bonus challenge =====");

// const scorers = {
//   Gnarby: 1,
//   Hummels: 1,
//   Lewandowski: 2,
// };
