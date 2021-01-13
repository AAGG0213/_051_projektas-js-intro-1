/*


*/


// begaliniai ciklai
// tokiu atveju uzdaryti tab'a
// for (let i = 0; i < 5; i--)

// intervale 0 .. 11
// kiek yra skaiciu, kurie dalijasi be liekanos yra nurodytam intervale (imtinai)

console.log('--------------------------------');
console.log('----dalyba is 3 be liekanos---');
console.log('------intervalas nuo 0 iki 11-----');
console.log('----------------------------------');

const nuo = 0;
const iki = 11;
const daliklis = 3;
let kiekis = 0;

for (let i = nuo; i<= iki; i++) {
    if (i % daliklis === 0) 
    kiekis++;
}

console.log(kiekis)



console.log('--------------------------------');
console.log('----dalyba is be liekanos---');
console.log('------intervalo sablonas-----');
console.log('----------------------------------');

const nuo2 = 8;
const iki2 = 31;
const daliklis2 = 5;
let kiekis2 = 0;

for (let i2 = nuo2; i2<= iki2; i2++) {
    if (i2 % daliklis2 === 0) 
    kiekis2++;
}
console.log('Skaiciu intervale nuo ' + nuo2 + ' iki ' + iki + ', besidalijanciu is ' + daliklis + ' be liekanos, yra ' + kiekis2 );
console.log(kiekis2);



// problema cia - negalima "perpanaudoti" kintamuju.
// Tam naudojamos funkcijos. Toliau funkcija suma.js