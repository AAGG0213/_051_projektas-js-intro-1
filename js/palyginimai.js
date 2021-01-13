// 2021-01-08, Pirma dalis

console.log('========================================');
console.log('-------- palyginimai -------------------');
console.log('========================================');

/*
loginiai operatoriai
GALIMI : >,  <, <=, >=, ==, !=, ===, !==, !
REKOMENDUOTINI : >, <, <=, >=, ===, !==, !
NEREKOMENDUOTINI: ==, !=
*/

if (4 >= 4.001) {
    console.log('taip');

} else {
    console.log('Ne');
}

// === - turi sutapti ne tik skaicius/tekstas, bet ir ivesties tipas, 
// t.y., BUTINAS tipu suderinamumas
// lygu, jei skaicius lyginamas su skaiciumi, tekstas su tekstu etc.

const riba = 4;
const kiekRatu = 3;

if (kiekRatu == riba) {
    console.log('Galite vaziuoti');
} else {
    console.log('ups ... stovime');
}

console.log('========================================');
console.log('-------- palyginimu pabaiga ------------');
console.log('========================================');
