// const numbers = [1, 2, 3]; // most common way of creating arrays
// console.log(numbers);

// // const moreNumbers = new Array(); // constructor function and this is basicly []
// // // const moreNumbers = new Array(5); in this case if you pass only one number as a argument it defines the length of the array and not the value inside of this array, so an empty array will be created of length 5
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2); //
// // console.log(yetMoreNumbers);

// const moreNumbers = Array.from('Hi!'); // output of this line will be each letter put in a array separately, so 'h', 'i', '!'
// console.log(moreNumbers);

// const listItems = document.querySelectorAll('li');
// const ArrayListItem = Array.from(listItems);
// console.log(ArrayListItem);


// const personalData = [23, 'Nikola', {moreDetail: []}];

// const analyticsData = [[1, 1.6], [-5.4, 2.1]];

// for (const data of analyticsData) {
//     for (const dataPoints of data) {
//         console.log(dataPoints);
//     }
// }

// console.log(personalData[1]);

// const hobbies = ['Cooking', 'Sports'];

// // Adding elements in an array
// hobbies.push('Reading'); // push adds element in array, and always adds them at the end of an array
// hobbies.unshift('Coding'); // unshift does the opposite of push function, element will be added at the begging of an array

// // Removing elements in an array
// hobbies.pop(); // pop function removes last element in array, does not need an argument
// hobbies.shift(); // shift does the opposite of pop function, removes the first element in an array

// console.log(hobbies);

// // Manipulating items in different places in an array
// hobbies[1] = 'Coding';
// // hobbies[5] = 'Reading';

// console.log(hobbies);

// // Adding with splice
// hobbies.splice(1, 0, 'Good food', 'Baking'); // first arguments is where it should star, second is how many should it delete, and third what to add
// console.log(hobbies);

// // Removing with splice
// hobbies.splice(0, 2); // if you enter only one argument, it will delete all items past that numbers index
// console.log(hobbies);

// const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// // const storedResults = testResults.slice(0, 2); // you can specify start and end number of an array for selecting range and excludes them from original array
// const storedResults = testResults.concat([3.99, 2]); // add elements at the end of an array. it takes an array 

// testResults.push(5.91);

// console.log(storedResults, testResults);
// console.log(testResults.indexOf(1.5)); 
// // returns index of entered value, it can take 2 values, first is the search value and the second one start index which is optional
// // if there are same values it will only return the index of the first found
// // lastIndexOf() does the same thing only from the opposite direction

// const presonData = [{name: 'Nikola'}, {name: 'Test'}];
// console.log(testResults.indexOf({name: 'Test'})); // this will not work, console will return -1 and that indicates that it did not find the searched result

// const test = presonData.find((person, idx, persons) => {
//     return person.name === 'Test';
// }); 

// console.log(test);
// // find takes function as an argument and that function takes up 3 arguments
// // first argument will always be single object of that array
// // second one is index of that single element
// // third argument will be the full array

// const nikolaIndex = presonData.findIndex((person, idx, persons) => {
//     return person.name === 'Nikola';
// }); 

// console.log(nikolaIndex);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// //     taxAdjustedPrices.push(price * (1 + tax));
// // }

// prices.forEach((price, idx, prices) => {
//     const priceObj = {index: idx, taxAdjPrice: price * (1 + tax)}
//     taxAdjustedPrices.push(priceObj);
// });
// // takes a function and that function takes up to 3 arguments

// console.log(taxAdjustedPrices);

const prices = [10.99, 5.99, 3.99, 6.59];
const tax = 0.19;

const taxAdjustedPrices = prices.map((price, idx, prices) => {
    const priceObj = {index: idx, taxAdjPrice: price * (1 + tax)}
    return priceObj; // map has to return something
});

console.log(prices, taxAdjustedPrices);