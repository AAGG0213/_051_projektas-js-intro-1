console.log('========================================');
console.log('-------- Kintamieji --------------------');
console.log('========================================');

/*
2021-01-04, Pirma dalis

Kintamųjų iniciavimo būdai:
1.	var - senas, nenaudoti 
2.	let – jei dėl kokios nors priežasties nenaudojama const
3.	const – prioritetinis pasirinkimas visais atvejais

Kintamųjų saugomos reikšmės tipai:
-	skaičius (number)
-	tekstas (string)
-	loginė reikšmė (boolen)
-	sąrašas (array)
-	objektas (object)
-	funkcija (function)
*/

// Tikslas - moketi i atminti irasyti tai, ka reikia atsiminti

const gimimometai = 1991;
console.log(5);
console.log(gimimometai);

const pirmas = 2;
const antras = 4;
const suma = pirmas + antras;
console.log(pirmas, antras, suma);

const desimtainis = -2.5;
console.log(desimtainis);

console.log('-------------------------');

const vardas = 'Dede Miegas';
console.log(vardas);

const zodis1 = 'Labas';
const zodis2 = 'vakaras!';
console.log(zodis1, zodis2);

const sakinys = zodis1 + ' ' + zodis2;
console.log(sakinys);

console.log('-------------------------');

const pavarde = 'Pavardenis';
const miestas = "Vilnius";
console.log(pavarde, miestas);

const kabute1 = 'Tekstas su vienguba kabute';
console.log(kabute1);

const kabute2 = "Kaip atspausdinti vienguba (') kabute";
console.log(kabute2);

const kabute3 = 'Kaip atspausdinti dviguba (") kabute';
console.log(kabute3);

const kabute4 = "Kaip atspausdinti ir vienguba (\'), ir dviguba (\") kabutes kartu tekste (v1)";
console.log(kabute4);

const kabute5 = 'Kaip atspausdinti ir vienguba (\'), ir dviguba (\") kabutes kartu tekste (v2)';
console.log(kabute5);

console.log('variantai v1 ir v2 vienodai naudotini');

console.log('-------------------------');

const tiesa = true;
console.log(tiesa);

const melas = false;
console.log(melas);

const matauateiti = false;
console.log(matauateiti);

console.log('-------------------------');

// const pazymiai - sarasui naudoti pavadinimus daugiskaita

const tusciasSarasas = [];
console.log(tusciasSarasas);

const pazymiai = [10, 2, 7, 3, 6, 0];
console.log(pazymiai);
// viename sarase turetu buti tokio paties tipo elementai
// gali buti ir ivairus, bet geriau vienodi

const miestai = ['Anyksciai', 'Birzai', 'Cekoniskes', 'Druskininkai'];
console.log(miestai);

const ivairiatipisSarasas = [5434, true, 'Labutis', [3, 4, 3, 5]];
console.log(ivairiatipisSarasas);
// tiks sarasas neturi prasmes - ka su juo daryti???

console.log('-------------------------');

const adresas = 'Gyvenamoji vieta';
console.log(adresas);
// jei adresas keiciasi, tai vietoj const t.b. let

let adresaskintamas = 'Gedimino pr 9, Vilnius';
console.log(adresaskintamas);

adresaskintamas = 'Savanoriu pr 9';
console.log(adresaskintamas);

let pinigineje = 0.01;
console.log('Pinigineje', pinigineje);

pinigineje = 3.00;
console.log('Pinigineje', pinigineje);

pinigineje = 17.05;
console.log('Pinigineje', pinigineje);

console.log('========================================');
console.log('-------- Kintamuju temos pabaiga -------');
console.log('========================================');