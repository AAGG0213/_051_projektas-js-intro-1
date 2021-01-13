console.log('========================================');
console.log('---Kintamuju palyginimas su if ---------');
console.log('========================================');

// 2021-01-06, Pirma dalis, nuo 27 min

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
    
// Siuo atveju nieko nedaroma, kai salyga netenkinama

console.log('-------------------------------');

if (a > b) {
    console.log('a daugiau uz b');
} else {
    console.log('a maziau arba lygu uz b');
}

console.log('-------------------------------');

const diena2 = 'penkt';

if (diena2 === 'pirm') {
    console.log('Pirmadienis');
} else {
    if (diena2 === 'antr') {
        console.log('Antradienis');
        } else {
            if (diena2 === 'trec') {
                console.log('Treciadienis');
            } else {
                if (diena2 === 'ketv') {
                    console.log('Ketvirtadienis');
                }
                    else {
                        console.log('Kita savaites diena');
                    }             
        }
    }
    
}


const diena3 = 'penk';

if (diena3 === 'pirm') {console.log('Pirmadienis');
} else if (diena3 === 'antr') {console.log('Antradienis');
} else if (diena3 === 'trec') {console.log('Treciadienis');
} else if (diena3 === 'ketv') {console.log('Ketvirtadienis');
} else if (diena3 === 'penk') {console.log('Penktadienis');
} else if (diena3 === 'sest') {console.log('Sestadienis');
} else if (diena3 === 'sekm') {console.log('Sekmadienis');
} else {console.log('Nera tokios dienos');}




console.log('========================================');
console.log('---palyginimo su if pabaiga ------------');
console.log('========================================');
