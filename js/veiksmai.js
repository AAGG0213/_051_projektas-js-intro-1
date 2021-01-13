cconsole.log('========================================');
console.log('-------- veiksmai su kintamaisiais ------');
console.log('=========================================');
// 2021-01-04, Antra dalis
// 
const n11 = 1;
const n12 = 2;
const n13 = 3;
const n14 = 4;
const n15 = 5;

const sum11 = n11 + n12 + n13 + n14 + n15;
console.log(sum11);

console.log('-------------------------');

const n21 = 1;
const n22 = 2;
const n23 = 3;
const n24 = 4;
const n25 = 5;

const sum21 = n22 / n21 - n23 + n24 + n25;
console.log(sum21);

console.log('-------------------------');

const w1 = 'Mano';
const w2 = 'vardas';
const w3 = 'yra';
const w4 = 'Kardas';
const w5 = '!';

const sentence1 ='sentence1:' + ' ' + w1 + ' ' + w2 + ' ' + w3 + ' ' + w4;
console.log(sentence1);

const tarpas = '_ _';
const sentence2 ='sentence2:' + tarpas + w1 + tarpas + w2 + tarpas + w3 + tarpas + w4;
console.log(sentence2); 


console.log('-------------------------');
// skaiciavimo logika: 1-2+3-4+5 (alternuojancios eilutes skaiciavimas)

const skaiciai = [3, -4, -5, 6, 7];
console.log(skaiciai);
// const alterSuma = 3 - -4 + -5 - 6 + 7;
// console.log(alterSuma);

// const skaiciai = [3, -4, -5, 6, 7];
// 
const alterSuma = 3 - -4 + -5 - 6 + 7;
console.log(alterSuma);

// *) kai is saraso issitraukiamos reiksmes pries jas naudojant
const n31 = skaiciai[0];
const n32 = skaiciai[1];
const n33 = skaiciai[2];
const n34 = skaiciai[3];
const n35 = skaiciai[4];

const alterSuma31 = n11 - n12 + n13 - n14 + n15;
console.log(alterSuma31);


// *) "tiesioginis" budas
const alterSuma3 = skaiciai[0] - skaiciai[1] + skaiciai[2] - skaiciai[3] + skaiciai[4];
console.log(alterSuma3);

console.log('-------------------------');

// *) automatiskai iteruojantis
let altersuma4 = 0;

altersuma4 = altersuma4 + skaiciai[0];
altersuma4 = altersuma4 - skaiciai[1];
altersuma4 = altersuma4 + skaiciai[2];
altersuma4 = altersuma4 - skaiciai[3];
altersuma4 = altersuma4 + skaiciai[4];
console.log(altersuma4);

console.log('-------------------------');

// *) susumuoti viska is eiles pusiau automatiskai  (automatiskaiiteruojantis)
let altersuma5 = 0;
let indeksas1 =0;

altersuma5 = altersuma5 + skaiciai[indeksas1];
console.log(altersuma5, 'indeksas', indeksas1);

indeksas1 = indeksas1 + 1;
altersuma5 = altersuma5 - skaiciai[indeksas1];
console.log(altersuma5, 'indeksas', indeksas1);

indeksas1 = indeksas1 + 1;
altersuma5 = altersuma5 + skaiciai[indeksas1];
console.log(altersuma5, 'indeksas', indeksas1);

indeksas1 = indeksas1 + 1;
altersuma5 = altersuma5 - skaiciai[indeksas1];
console.log(altersuma5, 'indeksas', indeksas1);

indeksas1 = indeksas1 + 1;
altersuma5 = altersuma5 + skaiciai[indeksas1];

console.log(altersuma5, 'indeksas', indeksas1);

console.log('-------------------------');

// *) pusiau automatinis optimizuotas skaiciavimo budas
// nebealternuotas
// jei norime atnaujinti to paties kintamojo reiksme
// let a = 5
// a = a + 2
// trumpesne uzrasymo versija
// a +=2

let altersuma6 = 0;
let indeksas2 =0;


altersuma6 += skaiciai[indeksas2];
console.log(altersuma6, 'indeksas', indeksas2);

indeksas2 += 1;
altersuma6 += skaiciai[indeksas2];
console.log(altersuma6, 'indeksas', indeksas2);

indeksas2 += 1;
altersuma6 += skaiciai[indeksas2];
console.log(altersuma6, 'indeksas', indeksas2);

indeksas2 += 1;
altersuma6 += skaiciai[indeksas2];
console.log(altersuma6, 'indeksas', indeksas2);

indeksas2 += 1;
altersuma6 = skaiciai[indeksas2];
console.log(altersuma6, 'indeksas', indeksas2);


console.log('-------------------------');


// 
// let a = 5
// a++ - padidinti 1 po panaudojimo
// ++a - padidinti 1 pries panaudojima
// a-- - sumazinti 1 po panaudojimo
// --a - sumazinti 1 pries panaudojima
let altersuma7 = 0;
let indeksas3 =0;

altersuma7 += skaiciai[indeksas3];
console.log(altersuma7, 'indeksas', indeksas3);

++indeksas3;
altersuma7 += skaiciai[indeksas3];
console.log(altersuma7, 'indeksas', indeksas3);

++indeksas3;
altersuma7 += skaiciai[indeksas3];
console.log(altersuma7, 'indeksas', indeksas3);

++indeksas3;
altersuma7 += skaiciai[indeksas3];
console.log(altersuma7, 'indeksas', indeksas3);

++indeksas3;
altersuma7 += skaiciai[indeksas3];
console.log(altersuma7, 'indeksas', indeksas3);

console.log('-------------------------');

let altersuma8 = 0;
let indeksas4 =-1;

altersuma8 += skaiciai[++indeksas4];
console.log(altersuma8, 'indeksas', indeksas4);
altersuma8 += skaiciai[++indeksas4];
console.log(altersuma8, 'indeksas', indeksas4);
altersuma8 += skaiciai[++indeksas4];
console.log(altersuma8, 'indeksas', indeksas4);
altersuma8 += skaiciai[++indeksas4];
console.log(altersuma8, 'indeksas', indeksas4);
altersuma8 += skaiciai[++indeksas4];
console.log(altersuma8, 'indeksas', indeksas4);

console.log('-------------------------');

// arba indeksa pakeiciant po panaudojimo:

let altersuma9 = 0;
let indeksas5 = 0;

altersuma9 += skaiciai[indeksas5++];
console.log(altersuma9, 'indeksas', indeksas5);
altersuma9 += skaiciai[indeksas5++];
console.log(altersuma9, 'indeksas', indeksas5);
altersuma9 += skaiciai[indeksas5++];
console.log(altersuma9, 'indeksas', indeksas5);
altersuma9 += skaiciai[indeksas5++];
console.log(altersuma9, 'indeksas', indeksas5);
altersuma9 += skaiciai[indeksas5++];
console.log(altersuma9, 'indeksas', indeksas5);

console.log('-------------------------');

// 2021-01-06
// tekstinio saraso elementu apjungimas per kableli is galo

const zodziai1 = ['avilys', 'bites', 'cukrus', 'duona'];
console.log(zodziai1);

// tikimasi rezultato duona, cukrus, bites, avilys

// 1 - budas
console.log('1 - budas');

const zodziuSeka1 = zodziai1[3] + ', ' + zodziai1[2] + ', ' + zodziai1[1] + ', ' + zodziai1[0];
console.log(zodziuSeka1);

console.log('-------------------------');

// 2 - budas
console.log('2 - budas');
const zdz1 = zodziai1[0];
const zdz2 = zodziai1[1];
const zdz3 = zodziai1[2];
const zdz4 = zodziai1[3];
const atskyrejas1 = ', ';

const zodziuSeka2 = zdz4 + atskyrejas1 + zdz3 + atskyrejas1 + zdz2 + atskyrejas1 + zdz1;
console.log(zodziuSeka2);

console.log('-------------------------');

// 3 - budas

console.log('3 - budas');

const atskyrejas2 = ', ';
let skaitliukas3 = 4;
let zodziuSeka3 = ' ';



zodziuSeka3 += zodziai1[--skaitliukas3];
zodziuSeka3 += atskyrejas2 + zodziai1[--skaitliukas3];
zodziuSeka3 += atskyrejas2 + zodziai1[--skaitliukas3];
zodziuSeka3 += atskyrejas2 + zodziai1[--skaitliukas3];

console.log(zodziuSeka3);

console.log('-------------------------');

// 4 - budas

console.log('4 - budas');

const atskyrejas4 = ', ';
let skaitliukas4 = 3;
let zodziuSeka4 = ' ';



zodziuSeka4 += zodziai1[skaitliukas4--];
zodziuSeka4 += atskyrejas4 + zodziai1[skaitliukas4--];
zodziuSeka4 += atskyrejas4 + zodziai1[skaitliukas4--];
zodziuSeka4 += atskyrejas4 + zodziai1[skaitliukas4--];

console.log(zodziuSeka4);

console.log('============================================');
console.log('---veiksmu su kintamaisiais pabaiga---------');
console.log('============================================');

// 