// 2021-01-08, Pirma dalis

console.log('========================================');
console.log('-------- ilgiai ------------------------');
console.log('========================================');

/*
loginiai operatoriai
GALIMI : >,  <, <=, >=, ==, !=, ===, !==, !
REKOMENDUOTINI : >, <, <=, >=, ===, !==, !
NEREKOMENDUOTINI: ==, !=
*/


const koksIlgis = 4;
const tekstas3 = 'Labas, kaip laikais?'.length;
console.log(koksIlgis, tekstas3);

if (koksIlgis === tekstas3) {
    console.log('Ilgis atitinka');
} else {
    console.log('Ilgis neatitinka');
}

const sarA = [2, 3, 6, 7];
const sarAilgis = sarA.length;
const sarB = ['a', 'sd', 'fe'];
const sarBilgis = sarB.length;

console.log(sarA);
console.log(sarB);

console.log(sarAilgis);
console.log(sarBilgis);

if (sarAilgis === sarBilgis) {
    console.log('Taip');
} else {
    console.log('ne');
}


// ! - pasakymas, kokia yra atvirkstine logine reiksme

/*
true === !false
false === !true
*/

const tiesa2 = true;

if (tiesa2) {  
    console.log('tiesa2');

} else {
    console.log('netiesa')
}
// toks uzrasymas auksciau if () galimas, kai kintamojo reiksme yra TRUE

console.log('========================================');
console.log('-------- ilgiu pabaiga -----------------');
console.log('========================================');
