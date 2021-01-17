// 2021-01-08, Antra dalis, nuo 15 min
console.log('========================================');
console.log('-------- reverse  ---------------');
console.log('========================================');

/*
panaudojant cikla perrasyti tekstinio tipo kintamuju reiksmes is kito galo
pvz : "asdf" i "fdsa"
*/

const duotastekstas = 'asdfqwer';
tekstoilgis = duotastekstas.length;
let atbulai = '';

console.log('var 1:', duotastekstas, tekstoilgis);
for (let r1 = 0; r1 < tekstoilgis; r1++) {
    const raide = duotastekstas[r1];
    console.log(raide);
    atbulai = raide + atbulai;
    console.log(atbulai);
}

const duotastekstas2 = 'asdfqwerasdfqwer';
tekstoilgis2 = duotastekstas2.length;
let atbulai2 = '';

console.log('var 2:', duotastekstas2, tekstoilgis2);
for (let r21 = tekstoilgis2; r21 > 0; r21--) {
    const raide2 = duotastekstas2[r21-1];
    console.log(raide2);
    atbulai2 = atbulai2 + raide2;
    console.log(atbulai2);
}

const duotastekstas3 = 'zxcvasdf';
tekstoilgis3 = duotastekstas3.length;
let atbulai3 = '';

console.log('var 3:', duotastekstas3, tekstoilgis3);
for (let r31 = tekstoilgis3; r31 > 0; r31--) {
    const raide3 = duotastekstas3[r31];
    atbulai3 += raide3;
    console.log(atbulai3);
}

const duotastekstas4 = 'zxcvasdfzxcvasdf';
tekstoilgis4 = duotastekstas4.length;
let atbulai4 = '';

console.log('var 4:', duotastekstas4, tekstoilgis4);
for (let r41 = 0; r41 < tekstoilgis4; r41++) {
    const raide4 = duotastekstas4[r41];
    atbulai4 += raide4;
    console.log(atbulai4);
}

const duotastekstas5 = 'zxcvasdfzxcvasdf';
tekstoilgis5 = duotastekstas5.length;
let atbulai5 = '';

console.log('var 5:', duotastekstas5, tekstoilgis5);
for (let r51 = 0; r51 < tekstoilgis5; r51++) {
    const raide5 = duotastekstas4[tekstoilgis4 - r51 - 1];
    atbulai5 += raide5;
    console.log(atbulai5);
}


console.log('========================================');
console.log('-------- reverse pabaiga ---------------');
console.log('========================================');


