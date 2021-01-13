/*
Ternary operatoprius
salyga ? "ka daryti, kai tenkina" : "ka daryti, jei netenkina"

*/

console.log('-------------------------------');
console.log('-----Ternary operatorius---------');
console.log('-------------------------------');

const amzius = 88;
const amziausriba = 18;

const arpilnametis = amziausriba > amzius ? 'nepilnametis' : 'pilnametis';
console.log(arpilnametis);

// is esmes tai sutrumpintas/supaprastintas if'as
// tik butina nurodyti, ka daryti, kai tenkina, kai netenkina

// || reiskia "arba"
// && reiskia "ir"


const age = 8;
const agelimit = 18;
let isAdult = null;

if (age >=agelimit) {isAdult = true}
else {isAdult = false}
console.log(isAdult);


const dienakelinta = 7;

const arSavaitgalis = dienakelinta > 5 ? true : false;
console.log('Ar savaitgalis:',  arSavaitgalis);

const arSavaitgalis1 = dienakelinta === 6 || 7 ? true : false;
console.log('Ar savaitgalis1:',  arSavaitgalis1);

