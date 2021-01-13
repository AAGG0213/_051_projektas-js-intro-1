// 2021-01-08, Antra dalis, nuo 15 min
console.log('========================================');
console.log('-------- reverse pabaiga ---------------');
console.log('========================================');

/*
panaudojant cikla perrasyti tekstinio tipo kintamuju reiksmes is kito galo
pvz : "asdf" i "fdsa"
*/

const duotastekstas = 'asdfqwer';
tekstoilgis = duotastekstas.length;
let atbulai = '';

console.log(duotastekstas);
for (let r1 = 0; r1 < tekstoilgis; r1++) {
    const raide = duotastekstas[r1];
    console.log(raide);
    atbulai = raide + atbulai;
    console.log(atbulai);
}

const duotastekstas2 = 'asdfqwer';
tekstoilgis2 = duotastekstas2.length;
let atbulai2 = '';

console.log(duotastekstas2);
for (let r21 = tekstoilgis2; r21 > 0; r21--) {
    const raide2 = duotastekstas2[r21-1];
    console.log(raide2);
    atbulai2 = atbulai2 + raide2;
    console.log(atbulai2);

// grizti nuo 34 min

console.log('========================================');
console.log('-------- reverse pabaiga ---------------');
console.log('========================================');


