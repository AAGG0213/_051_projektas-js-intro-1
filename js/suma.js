/*
const a1 = 5;
const b1 = 7;
const r1 = a1 + b1;

const a2 = 53;
const b2 = 73;
const r2 = a2 + b2;

const a3 = 526;
const b3 = 76;
const r3 = a3 + b3;
*/

console.log('---------------------------');
console.log('-------funkcijos----------');
console.log('---------------------------');


function sumafunc(a, b) {
    const rezultatas = a + b;
    return rezultatas;
}

const s1 = sumafunc(5, 7);
console.log('Suma =', s1);

function liekana(nuo, iki, daliklis) {
        let kiekis3 = 0;

        for (let i = nuo; i<= iki; i++) {
        if (i % daliklis === 0) 
        kiekis++;
        return 'Skaiciu intervale nuo ' + nuo + ' iki ' + iki + ', besidalijanciu is ' + daliklis + ' be liekanos, yra ' + kiekis;
        
        }
}
// console.log('Skaiciu intervale nuo ' + nuo2 + ' iki ' + iki + ', besidalijanciu is ' + daliklis + ' be liekanos, yra ' + kiekis);
const l1 = liekana(8, 11, 3);
console.log('Be liekanos is 3 dalijasi ' + l1 + ' skaiciu is intervalo');

console.log('---------------------------');
console.log('-------mokesciu funkcija----------');
console.log('---------------------------');

function mokesciai(pinigai, mokdydis) {
    console.log(pinigai, mokdydis);
    return (pinigai * mokdydis / 100);
}

const m1 = mokesciai (1000, 21);
const m2 = mokesciai (500, 15);

console.log(m1);
console.log(m2);

console.log('---------------------------');
console.log('-------funkcija tuscia ----------');
console.log('---------------------------');

function tuscia() {
    const atsakymas = false;
    console.log(' "Tuscia funkcija. Atsakymas: " ', atsakymas );
    // return ;
}

const t1 = tuscia();


console.log('---------------------------');
console.log('-------funkcijos----------');
console.log('---------------------------');





