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

const timZaProjekte = {
    clanovi: ['Marko', 'Ana'],
    imeTima: 'Tim - 1',
    funkcionalnostTima: function() {
        return this.clanovi.map(function(clan) {
            return `${clan} je u timu ${this.imeTima}`;
        });
    }
};
console.log(timZaProjekte.funkcionalnostTima());
console.log('----------');

/*
Resenje problema UNDEFINED
- koristeci arrow funkciju
*/

const timZaProjekte1 = {
    clanovi: ['Marko', 'Ana'],
    imeTima: 'Tim - 1',
    funkcionalnostTima: function() {
        
        return this.clanovi.map((clan) => {
            return `${clan} je u timu ${this.imeTima}`;
        });
    }
};
console.log(timZaProjekte1.funkcionalnostTima());
console.log('---------- Sledeci primer ----------');

/*
Sistem inventara
*/

function aplikacijaInventara(inventar) {
    return {
        // pravimo specificne pozive sistema
        inventar: inventar,

        // prolazimo kroz ceo inventar / ne kroz poziv sistema
        vrednostInventara: function() {
            /*
            - dva argumenta
            - ukupna vrednost i brendirani racunarski sklop [individualni objekat]
            - cenu inicijalizujemo na (0)
            */
           return this.inventar.reduce((ukupno, racunarskiSklop) =>
                ukupno + racunarskiSklop.cena, 0);
        },
        nadjiNaOsnovuCene: function(naziv) {
            /*
            - za specifican naziv brenda (inventara), vracamo tacnu cenu
            - na osnovu promenljive vrati naziv / reverse lookup
            */
           return this.inventar.find(racunarskiSklop => 
                racunarskiSklop.naziv === naziv).cena;
        }
    }
};

/*
- Svaki inventar ima svoj naziv i svoju cenu
- vracamo celokupan inventar, a kao rezultat toga ocekujemo ukupnu cenu / sumu
*/

const inventar = [
    {naziv: 'DELL', cena: 750},
    {naziv: 'Lenovo', cena: 950},
    {naziv: 'HP', cena: 450},
    {naziv: 'Asus', cena: 350},
];

const sisInventara = aplikacijaInventara(inventar);
console.log(sisInventara.vrednostInventara());
console.log(sisInventara.nadjiNaOsnovuCene('Asus'));
console.log('---------- Sledeci primer ----------');

/*
Novi primer
*/

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
