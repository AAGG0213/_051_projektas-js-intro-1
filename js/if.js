/* loginis palyginimas
if (salyga) {
        ka daryti, kai salyga tenkinama
} else {
        ka daryti, kai salyga netenkinama
}

loginiai operatoriai
GALIMI : >,  <, <=, >=, ==, !=, ===, !==, !
REKOMENDUOTINI : >, <, <=, >=, ===, !==, !
NEREKOMENDUOTINI: ==, !=
*/

/*
SABLONAI:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} ... else if () {}
if () {} else if () {} ... else if () {} else {}
*/ 



const a = 9;
const b = 7;
console.log(a);
console.log(b);

console.log('-------------------------------');

if (a > b) 
    console.log('jei a daugiau uz b ir nera else');

console.log('-------------------------------');

if (a > b) {
    console.log('a daugiau uz b');
} else {
    console.log('a maziau arba lygu uz b');
}

console.log('-------------------------------');

const diena2 = 'tre';

if (diena2 === 'pirm') {
    console.log('Pirmadienis');
} else {
    if (diena2 === 'antr') {
        console.log('Antradienis');
        } else {
        console.log('Kita savaites diena');
}
}

console.log('-------------------------------');
console.log('-------------------------------');
console.log('-------------------------------');
console.log('-------------------------------');