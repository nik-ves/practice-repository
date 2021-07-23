const numbers = [1, 2, 3]; // most common way of creating arrays
console.log(numbers);

// const moreNumbers = new Array(); // constructor function and this is basicly []
// // const moreNumbers = new Array(5); in this case if you pass only one number as a argument it defines the length of the array and not the value inside of this array, so an empty array will be created of length 5
// console.log(moreNumbers);

// const yetMoreNumbers = Array.of(1, 2); //
// console.log(yetMoreNumbers);

const moreNumbers = Array.from('Hi!'); // output of this line will be each letter put in a array separately, so 'h', 'i', '!'
console.log(moreNumbers);

const listItems = document.querySelectorAll('li');
const ArrayListItem = Array.from(listItems);
console.log(ArrayListItem);

const hobbies = ['Cooking', 'Sports'];
const personalData = [23, 'Nikola', {moreDetail: []}];

const analyticsData = [[1, 1.6], [-5.4, 2.1]];

for (const data of analyticsData) {
    for (const dataPoints of data) {
        console.log(dataPoints);
    }
}

console.log(personalData[1]);