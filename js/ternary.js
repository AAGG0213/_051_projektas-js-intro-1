
// 2021-01-06, Pirma dalis, nuo 58 min, Antra dalis
/*
Ternary operatorius
salyga ? "ka daryti, kai tenkina" : "ka daryti, jei netenkina"

*/

console.log('========================================');
console.log('-------- ternary operatorius -----------');
console.log('========================================');

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

const dienad = 6;
const arSavaitgalis2 = dienad <= 5 ? true : false;
console.log('Ar savaitgalis2:', arSavaitgalis2); 

const arSavaitgalis3 = dienad < 8 && dienad > 5 ? true : false;
console.log('Ar savaitgalis3:', arSavaitgalis3); 

const arSavaitgalis4 = 8 > dienad && 5 < dienad ? true : false;
console.log('Ar savaitgalis4:', arSavaitgalis4); 

if (8 > dienad && 5 < dienad) {
    console.log(true);
} else {
    console.log(false);
}

console.log('Ar savaitgalis4:', arSavaitgalis4);

const dienad5 = 7;

// if'as auksciau pakeistas i ternary operatoriu:
// 
// const arsavaitgalis5 = 8 > dienad5
//                          ? 5 < 5 dienad5
//                                 ? true
//                                 : false;
//                          : false;
// visa tai vienoje eiluteje zemiau (bet taip geriau nerasyti):

const arsavaitgalis5 = 8 > dienad5 ? 5 < dienad5 ? true : false : false;                        

console.log('Ar savaitgalis5', arsavaitgalis5);


const manosk1 = 4;
const manosk2 = 7;

const kokiskaiciuissirinkau = manosk1 >= manosk2 ? manosk1 :manosk2;
console.log(kokiskaiciuissirinkau);


/* ar gali vairuoti
// if (pilnametis &&
        praejes medicine &&
        isklauses pirma pagalba &&
        islaikes vairavimo egz &&
        islaikes vairavimo teor &&
        blaivus &&
        neapsinese &&
        nemiegantis
    ) {console.log(true);}
 else {console.log(false);}
*/

// dvigubas ternary operatorius





console.log('========================================');
console.log('- ternary operatoriaus pabaiga pabaiga -');
console.log('========================================');