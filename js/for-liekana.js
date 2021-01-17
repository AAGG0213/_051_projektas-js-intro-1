// 2021-01-11, Pirma dalis
// 

console.log('========================================');
console.log('-------- dalyba be liekanos ------------');
console.log('========================================');

// begaliniai ciklai
// tokiu atveju uzdaryti tab'a
// for (let i = 0; i < 5; i--)
// kaip su juo tvarkytis 2021-01-11, Pirma dalis, nuo pradzios


// intervale 0 .. 11
// kiek yra skaiciu, kurie dalijasi be liekanos 
// nurodytam intervale (imtinai) is nurodyto sk


const nuo1 = 0;
const iki1 = 11;
const daliklis1 = 3;
let kiekis1 = 0;

for (let l1 = nuo1; l1<= iki1; l1++) {
    if (l1 % daliklis1 === 0) 
    kiekis1++;
}

console.log('Skaičių intervale tarp', nuo1, 'ir', iki1, 'besidalijančių be liekanos iš',  daliklis1, 'yra', kiekis1);



const nuo2 = 8;
const iki2 = 31;
const daliklis2 = 5;
let kiekis2 = 0;

for (let l2 = nuo2; l2<= iki2; l2++) {
    if (l2 % daliklis2 === 0) 
    kiekis2++;
}
console.log('Skaičių intervale tarp', nuo2, 'ir', iki2, 'besidalijančių be liekanos iš',  daliklis2, 'yra', kiekis2);

const ats = 'Skaičių intervale tarp ' + nuo2 + ' ir ' + iki2 + ', besidalijančių be liekanos iš ' +  daliklis2 + ', yra' + kiekis2;
console.log('Atsakymas kitaip:', ats);

const nuo3 = -18;
const iki3 = 18;
const daliklis3 = 7;
let kiekis3 = 0;

for (let l3 = nuo3; l3<= iki3; l3++) {
    if (l3 % daliklis3 === 0) 
    kiekis3++;
}
console.log('Skaičių intervale tarp', nuo3, 'ir', iki3, 'besidalijančių be liekanos iš',  daliklis3, 'yra', kiekis3);



// problema cia - negalima "perpanaudoti" kintamuju.
// Tam naudojamos funkcijos. Toliau funkcija suma.js

console.log('========================================');
console.log('-------- dalybos be liekanos pabaiga ---');
console.log('========================================');
