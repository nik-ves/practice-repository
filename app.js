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

/*

some()
- pravilo: samo ukoliko su svi uslovi false, vraca false
- ukolko je bar jedan uslov true -> vraca true

*/

vratiBrzinu2 = cpu.some(function(procesor) {
    return procesor.brzina > 4;
})

console.log(vratiBrzinu2);
console.log('---------- Sledeci primer ----------');

/*

novi primer

*/

let imena = ['Ana', 'Nikola', 'Petar'];

// vraca false
let stampajImena = imena.every(function(ime) {
    return ime.length > 3;
});
console.log(stampajImena);

// vraca true
let stampajImena2 = imena.some(function(ime) {
    return ime.length > 3;
});
console.log(stampajImena2);

console.log('---------- Sledeci primer ----------');

/*

prototype / prototip

*/

function poljeUnos(vrednost) {
    this.vrednost = vrednost;
}

let korisnickoIme = new poljeUnos('');
let sifra = new poljeUnos('hardkodovana');

// proveravamo da li je svako polje za unos validno
poljeUnos.prototype.validate = function() {
    return this.vrednost.length > 0;
}

// ukoliko imamo nesto uneseno u objekat, kao rezultat dobijamo true
// u ovom slucaju je korisnicko ime prazan string pa ce rezultat biti false
console.log(korisnickoIme.validate());

// vraca true jer je uslov ispunjen
console.log(sifra.validate());

// vraca true, samo ukoliko su oba uslova ispunjena
console.log(korisnickoIme.validate() && sifra.validate());
console.log('--------------------');

let datumRodjenja = new poljeUnos('01/01/1991');
let polja = [korisnickoIme, sifra, datumRodjenja];

let validacijaForme = polja.every(function(polje) {
    return polje.validate();
});
console.log(validacijaForme);
console.log('---------- Sledeci primer ----------');

/*

brojevi / jedna vrednost

*/

let nekiBrojevi = [3, 6, 19];
let zbir = 0;

for (const broj of nekiBrojevi) {
    zbir += broj;
}
console.log(zbir);
console.log('---------- Sledeci primer ----------');

/*

reduce()
- ima inicijalizaciju vrednosti -> npr 0
    * kao drugi parametar anonimne funkcije

*/

let stampajBrojeve = nekiBrojevi.reduce(function(zbir, broj){
    return zbir + broj;
}, 0);
console.log('reduce: ', stampajBrojeve);
console.log('---------- Sledeci primer ----------');

/*

novi primer

*/

let nekeBoje = [
    {boja: 'crvena'},
    {boja: 'zuta'},
    {boja: 'plava'},
];

let b = nekeBoje.reduce(function(noveBoje, nekeBoje) {
    noveBoje.push(nekeBoje.boja);
    return noveBoje;
}, []);
console.log(b);
console.log('---------- Sledeci primer ----------');
