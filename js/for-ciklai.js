// 2021-01-08, PirmA DataTransferItemList, nuo 49 min

console.log('========================================');
console.log('-------- ciklai ------------------------');
console.log('========================================');

// suskaiciuok nuo 1 iki 500. Atvaizdavimas console.log(skaicius)

let skaiciusC1 = 0;

console.log(skaiciusC1)

// 1 var. - "rankinis darbas" (analogiskai su skaiciusC1++, pradeti nuo 1)
console.log('----- "Rankinis" ciklas ------')

console.log(++skaiciusC1);
console.log(++skaiciusC1);
console.log(++skaiciusC1);
console.log(++skaiciusC1);
console.log(++skaiciusC1);

// 2 var. - for
console.log('----- for ciklas ------')

let skaiciusC2 = 1;

for (let i=0; i<5; i++) {
    console.log(skaiciusC2++);
}
console.log('----- for ciklo pabaiga ------');

const menesiai3 = ['Saus', 'vasa', 'kova', 'baland'];

for (let m = 0; m < menesiai3.length; m++) {
    console.log(menesiai3[m]);
}

const pazymiaivisi = [10, 2, 8, 4, 8, 2, 10];
// const vidurkis = 0;
let pazymiusuma = 0;
let pazymiuskaicius = pazymiaivisi.length;
console.log(pazymiuskaicius);

for (let iip = 0; iip < pazymiuskaicius; iip++) {
    pazymiusuma = pazymiusuma + pazymiaivisi[iip];
    console.log(pazymiaivisi[iip], pazymiusuma);
}
const vidurkis = pazymiusuma / pazymiuskaicius;
console.log('Pazymiu vidurkis:', vidurkis);



console.log('========================================');
console.log('-------- ciklu pabaiga -----------------');
console.log('========================================');
