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

const hobbies = ['Cooking', 'Sports'];

// Adding elements in an array
hobbies.push('Reading'); // push adds element in array, and always adds them at the end of an array
hobbies.unshift('Coding'); // unshift does the opposite of push function, element will be added at the begging of an array

// Removing elements in an array
hobbies.pop(); // pop function removes last element in array, does not need an argument
hobbies.shift(); // shift does the opposite of pop function, removes the first element in an array

console.log(hobbies);

// Manipulating items in different places in an array
hobbies[1] = 'Coding';
// hobbies[5] = 'Reading';

console.log(hobbies);

// Adding with splice
hobbies.splice(1, 0, 'Good food', 'Baking'); // first arguments is where it should star, second is how many should it delete, and third what to add
console.log(hobbies);

// Removing with splice
hobbies.splice(0, 2); // if you enter only one argument, it will delete all items past that numbers index
console.log(hobbies);