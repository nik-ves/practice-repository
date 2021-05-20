/*

- globalne proneljive -> VAR
petlje
...

*/

var boje = ['red', 'green', 'blue'];

for (const colors of boje ) {
    console.log(colors);
}

console.log('----------------------------------------');

for (let i = 0; i<boje.length; i++) {
    console.log(boje[i]);
}

console.log('----------------------------------------');

boje.forEach(function(boja) {
    console.log(boja);
})

console.log('----------------------------------------');

/*

brojevi

*/

var numbers = [1, 2, 3, 4, 5];
var sum = 0;

numbers.forEach(function(number) {
    sum += number;
})

console.log(sum);

console.log('----------------------------------------');

/*

metod push / niz

*/

var numbers = [1, 2, 3];
var doubledNumbers = [];

// svaki element niza mnozimo sa 2

for (let i = 0; i<numbers.length; i++) {
    doubledNumbers.push(numbers[i] * 2);
}

console.log(numbers);
console.log(doubledNumbers);

console.log('----------------------------------------');

/*

ECMA
forEach helpes -> metod map() 
- pravi novi niz
- prolazi sve clanove niza pojedinacno
- ne menja originalni niz
- ne menaj dimenziju/strukturu niza koje nemaju nikakvu vrednost
- unutar anonime funkcije, obavezan je return
*/

// anonimna funkcija

var doubled = numbers.map(function(number) {
    return number * 2;
})

console.log(doubled);