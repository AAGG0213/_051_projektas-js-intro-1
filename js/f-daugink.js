//2020-01-11, Natra dalis, nuo 2 min

console.log('========================================');
console.log('------ daugybos funkcija ---------------');
console.log('========================================');

// pagal salyga funkcijaq reiketu vadinti @"augyba"


function daugink(d1, d2) {
    //validation (nuo 17 min)
    if (typeof d1 !== 'number') {
        return 'ERROR: pirmas dauginamasis turi būti skaičius';
    }
    if (d1 === Infinity) {
        return 'ERROR: pirmas parametras negali būti begalybė';
    }
    if (isNaN(d1)) {
        return 'ERROR: pirmas parametras negali būti NaN';
    }
    if (typeof d2 !== 'number') {
        return 'ERROR: antras dauginamasis turi būti skaičius';
    }
    if (d2 === Infinity) {
        return 'ERROR: antras parametras negali būti begalybė';
    }
    if (isNaN(d2)) {
        return 'ERROR: antras parametras negali būti NaN';
    }
    const sandauga = d1 * d2;
    // 2021-01-13, Pirma dalis - kad vietoj -0 butu grazinamas 0
    return sandauga  === 0 ? 0 : sandauga;
}

const sk1 = 3;
const sk2 = 7;
const sk3 = 5;

console.log(sk1 + '*' + sk2 + ' = ' + daugink(sk1, sk2));
console.log(sk3 + '*' + sk2 + ' = ' + daugink(sk3, sk2));
console.log(sk1 + '*' + sk3 + ' = ' + daugink(sk1, sk3));


// reikia moketi patikrinti, ar logika teisinga
// 2021-01-11, Antra dalis, nuo 8 min
console.log('-- Reikia moketi patikrinti, ar logika teisinga ----------');

// skaiciai : teigiami, nulis, neigiami, 
// skaiciai: sveikieji, desimtainiai, Infinity, NaN
// reiksmiu tipai: kai nieko neduodam, skaiciai, simboliai (tekstas), boolean

console.log(daugink(3, 7), '->', 21);
console.log(daugink(-5, 7), '->', -35);
console.log(daugink(-5, -8), '->', 40);
console.log(daugink(4, -2.5), '->', 10);
console.log(daugink(2, 0), '->', 0);
console.log(daugink(0, 0), '->', 0);
console.log(daugink(-2, 0), '->', 0); 

// validation : 2021-01-11, Antra dalis, nuo 17 min
console.log(daugink('labas', 'rytas'));
console.log(daugink('labas', 2));
console.log(daugink(3, 'rytas'));

console.log(daugink(1, true));
console.log(daugink(true, 2));
console.log(daugink(3, false));
console.log(daugink(false, 4));

console.log(daugink());

console.log(daugink(Infinity, 5));
console.log(daugink(Infinity, Infinity));
console.log(daugink(Infinity, -Infinity));
console.log(daugink(0, Infinity)); // NaN !!! WolframAlpha

// NaN tipas - skaicius, NaN reiksme - ne skaicius
// analog su Infinity
console.log(daugink(3, NaN));
console.log(daugink(NaN, 7));
console.log(daugink(0, -4));



// 2021-01-13





console.log('========================================');
console.log('------ daugybos funkcijos pabaiga ------');
console.log('========================================');