/*

find()
Problem i kako radi? Cim naidje na prvi rezultat, izlazi iz petlje / provere
find() radi samo sa jedinstvenim rezultatima pretrage

*/

let korisnici = [
    {ime: 'Marko', id: 1},
    {ime: 'Nikola'},
    {ime: 'Ana'},
    {ime: 'Marko', id: 4},
    {ime: 'Stefan'}
];

// var korisnik;
// for(var i = 0; i<korisnici.length; i++) {
//     if (korisnici[i].ime === 'Marko') {
//         korisnik = korisnici[i];
//     }
// }

// let stampajKorisnika = korisnik;
// console.log(stampajKorisnika);

let stampajKorisnika = korisnici.find(function(i) {
    return i.ime === 'Marko';
})

console.log(stampajKorisnika);
console.log('---------- Sledeci primer ----------');

/*

find()
objekat ima osobinu this.model = model 

*/

function Auto (model) {
    this.model = model;
}

// Inicijalizujemo / pravimo objekte
let automobili = [
    new Auto ('Audi'),
    new Auto ('BMW'),
    new Auto ('Mercedes'),
    new Auto ('Yugo')
];

let stampajAutomobile = automobili.find(function(i) {
    return i.model === 'Yugo';
})

console.log(stampajAutomobile);
console.log('---------- Sledeci primer ----------');

let cpu = [
    {proizvodjac: 'Intel', brzina: 3.4},
    {proizvodjac: 'AMD', brzina: 1.7},
    {proizvodjac: 'nVidia', brzina: 2.4},
];

/*

- svi procesori mogu da pokrenu racunar => true 
- samo neki procesuri mogu da pokrenu racunar => false

*/

let sviProc = true;
var samoNekiProc = false;

for (let i = 0; i<cpu.length; i++) {
    let proc = cpu[i];

    if(proc.brzina < 2.8) {
        sviProc = false;
    } else {
        samoNekiProc = true;
    }
}

console.log(sviProc);
console.log(samoNekiProc);
console.log('---------- Sledeci primer ----------');

/*

every()
- ocekuje true ili false i svi uslovi moraju da budu ispunjeni

*/

let vratiBrzinu = cpu.every(function(procesor) {
    return procesor.brzina < 4;
})

console.log(vratiBrzinu);
console.log('---------- Sledeci primer ----------');
