console.log('========================================');
console.log('------ daugybos funkcija ---------------');
console.log('========================================');

function daugink(d1, d2) {
    const sandauga = d1 * d2;
    return (sandauga);
}

const sk1 = 3;
const sk2 = 7;
const sk3 = 5;

console.log(sk1 + '*' + sk2 + ' = ' + daugink(sk1, sk2));
console.log(sk3 + '*' + sk2 + ' = ' + daugink(sk3, sk2));
console.log(sk1 + '*' + sk3 + ' = ' + daugink(sk1, sk3));


// reikia moketi patikrinti, ar logika teisinga
console.log('-----reikia moketi patikrinti, ar logika teisinga----------');

// skaiciai : teigiami, nulis, neigiami, 
// skaiciai: sveikieji, desimtainiai

console.log(daugink(3, 7), '->', 21);
console.log(daugink(-5, 7), '->', -35);
console.log(daugink(-5, -8), '->', 40);
console.log(daugink(4, -2.5), '->', 10);
console.log(daugink(2, 0), '->', 0);
console.log(daugink(0, 0), '->', 0);
console.log(daugink(-2, 0), '->', 0); 


// validation : 2021-01-11, Antra dalis, nuo 17 min, 
// 2021-01-13





console.log('========================================');
console.log('------ daugybos funkcijos pabaiga ------');
console.log('========================================');