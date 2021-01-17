// 2021-01-11, Pirma dalis, nuo 54 min

console.log('=====================================');
console.log('------ Funkcija mokesciai -----------');
console.log('=====================================');


function mokesciai(pinigai, mokdydis) {
    console.log(pinigai, mokdydis);
    return (pinigai * mokdydis / 100);
}

const mok1 = mokesciai (1000, 21); //210
const mok2 = mokesciai (500, 15); //75
const mok3 = mokesciai (0, 15); //0

console.log(mok1, '>>>', 210);
console.log(mok2, '>>>', 75);
console.log(mok3, '>>>', 0);


console.log('=====================================');
console.log('------ Funkcijos mokesciai pabaiga --');
console.log('=====================================');