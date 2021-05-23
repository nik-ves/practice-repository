function Korisnik(id) {
    this.id = id;
}

// generator ID brojeva

function generisiId() {
    return Math.random() * 21312321123;
}

/*
- uzimamo argument korisnika
- predstavljamo ga kao korisnika
*/

function napraviKorisnika(korisnik) {
    korisnik.registrovaniKorisnik = true;
    return korisnik;
}
console.log(napraviKorisnika(new Korisnik(generisiId())));
console.log('---------- Sledeci primer ----------');

function napraviKorisnika(korisnik = new Korisnik(generisiId())) {
    korisnik.registrovaniKorisnik = true;
    return korisnik;
}

const korisnik = new Korisnik(generisiId());
console.log(korisnik);
console.log('---------- Sledeci primer ----------');

/*
- rest operator
*/

function upisiBrojeve(...brojevi) {
    return brojevi.reduce((zbir, broj) => {
        return zbir + broj;
    }, 0);
}
console.log(upisiBrojeve(1, 2, 3));
console.log('---------- Sledeci primer ----------');

/*
- spread operator
*/

const deloviAutomobila = ['volan', 'sasija', 'tockovi'];
const ispodHaube = ['motor', 'zamajac', 'turbina'];
const ostaliDelovi = ['signalizacija', 'farovi', 'retrovizori'];

console.log(['stakla', ...deloviAutomobila, ...ispodHaube, ...ostaliDelovi]);
console.log('---------- Sledeci primer ----------');

/*
- dekonstrukcija niza
*/

const proizvodjaci = [
    'Zastava',
    'Mercedes',
    'BMW',
    'Audi'
];

const [naziv, naziv1, naziv2, naziv3] = proizvodjaci;
console.log(naziv);
console.log(naziv1);
console.log(naziv2);
console.log(naziv3);
console.log('---------- Sledeci primer ----------');

/*
- dekonstrukcija objekata i niza
*/

const proizvodjaciD = [
    {ime: 'Zastava', drzava: 'Srbja'},
    {ime: 'Mercedes', drzava: 'Nemacka'},
    {ime: 'BMW', drzava: 'Nemacka'},
    {ime: 'Toyota', drzava: 'Japan'},
];

const [{drzava}] = proizvodjaciD;
console.log(drzava);
console.log('---------- Sledeci primer ----------');

/*
- dekonstrukcija objekata i niza
*/

const drzave = {
    drzave: ['Srbija', 'Nemacka', 'Japan']
}

const {drzave: [drzaveD, drzaveN, drzaveJ]} = drzave;
console.log(drzaveD);
console.log(drzaveN);
console.log(drzaveJ);
console.log('---------- Sledeci primer ----------');

/*
- klasa / konstruktor
*/

class Auto {
    // opciono: konstruktor i parametri konstruktora
    // constructor(parametri) {
    //     this.nesto = parametri.nesto
    // }

    constructor({model}) {
        this.model = model;
    }

    vozim() {
        return 'Vozim auto';
    }
}

const noviAuto = new Auto({model: 'jugo'});
console.log(noviAuto);
console.log(noviAuto.vozim());
console.log('---------- Sledeci primer ----------');