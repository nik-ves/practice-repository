/*
- REFACTOR
- Template string
*/

function godinaJe() {
    // const godina = new Date().getFullYear();
    return `Godina je ${new Date().getFullYear()}`;
}

console.log(godinaJe());
console.log('---------- Sledeci primer ----------');

/*
arrow funkcije
=>
*/

// const saberi = function(a, b) {
//     return a + b;
// }

// let sabiranje = saberi(1, 2);
// console.log(sabiranje);

const dodajBrojeve = (a, b) => {
    return a + b;
}

let sabiranje = dodajBrojeve(1, 2);
console.log(sabiranje);
console.log('----------');

/*
Unutar funkcije mozemo da imamo
- samo jedan izraz
- vise izraza
*/

const dodajBrojeve1 = (a, b) => {
    let suma = a + b; // prvi izraz
    return suma; // drugi izraz
}

let sabiranje1 = dodajBrojeve1(2, 4);
console.log(sabiranje1);
console.log('----------');


/*
Slucaj kada imamo samo jedan izraz
*/

const dodajBrojeve2 = (a, b) => a + b;

let sabiranje2 = dodajBrojeve1(4, 6);
console.log(sabiranje2);
console.log('----------');

/*
Slucaj kada IMAMO argumente
*/

const dupliraj = broj => 2 * broj;
console.log(dupliraj(5));
console.log('----------');

/*
Slucaj kada NEMAMO argumente
*/

const dupliraj1 = () => {
    return 2;
}

console.log(dupliraj1());
console.log('---------- Sledeci primer ----------');

/*
arrow funkcija
- koristeci helpere
- proveravamo niz brojeva
- dupliranje brojeva
*/

const brojevi = [1, 2, 3, 4, 5];

let duplirani = brojevi.map(function(broj) {
    return 2 * broj;
})
console.log(`MAP = ${duplirani}`);
console.log('----------');

/*
pojednostavljeni map()
- arrow funkcija
*/

let duplirani1 = brojevi.map(broj => 2 * broj);

console.log(`Arrow map = ${duplirani1}`);
console.log('---------- Sledeci primer ----------');

/*
- pravimo tim za projekte
- prikazujemo clanove tima
- problemi specificnih helpera
(objekti, helperi, refactor, template...)
*/
