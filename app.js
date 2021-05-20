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

console.log('----------------------------------------');

/*

- objektni
- map()

*/

var automobili = [
    {model: 'jugo', cena: 'skup'},
    {model: 'audi', cena: 'jeftin'},
    {model: 'mercedes', cena: 'skup'}
];

var cene = automobili.map(function(automobil) {
    return automobil.cena;
});

console.log(cene);

console.log('----------------------------------------');

/*

- ECMA helper: filter()

*/

var proizvodi = [
    {ime: 'lopta', tip: 'sport'},
    {ime: 'film', tip: 'zabava'},
    {ime: 'lopta', tip: 'sport'},
    {ime: 'muzika', tip: 'zabava'}
];

// VanilaJS - prikazi samo neke proizvode

var filtrirajProizvode = [];
for (let i = 0; i<proizvodi.length; i++) {
    if (proizvodi[i].tip === 'zabava') {
        filtrirajProizvode.push(proizvodi[i]);
    }
}

console.log(filtrirajProizvode);

// ECMA 

let filtrirani = proizvodi.filter(function(i) {
    return i.tip === 'zabava';
})

console.log(filtrirani);



/*

filter() prema ceni i kvalitetu / objektni / 

*/

var proizvodi = [
    {ime: 'rekreacija', tip: 'sport', cena: 0, kvalitet: 2},
    {ime: 'film', tip: 'zabava', cena: 10, kvalitet: 25},
    {ime: 'klikeri', tip: 'sport', cena: 20, kvalitet: 14},
    {ime: 'muzika', tip: 'zabava', cena: 5, kvalitet: 3}
];

/*

zadatak: 
- uslov: tip je sport / kvalitet veci od nule, cena manja od 15
- helper: filter()
- potrebno: anonimna funkcija / podsetnik > return za svaku anonimnu funkciju

*/

let zadatak = proizvodi.filter(function(i) {
    return i.tip === 'sport' && i.cena < 15 && i.kvalitet > 0;
});

console.log(zadatak);

console.log('----------------------------------------');

/*

filteri prema ID-ju

*/

let tema = {id: 2224, naslov: 'sportska vest'};

let komentari = [
    {temaId: 2224, sadrzaj: 'odlican tekst'},
    {temaId: 1113, sadrzaj: 'los tekst'},
    {temaId: 2224, sadrzaj: 'ok'}
];

function komentariTeme(tema, komentari) {
    return komentari.filter(function(komentar) {
        return komentar.temaId === tema.id;
    })
}

let stampajKomentar = komentariTeme(tema, komentari);
console.log(stampajKomentar);