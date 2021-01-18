// 2021-01-13, Antra dalis, nuo 46 min 
// 2021-01-15, Pirma dalis

// isrinkti kas kelinta raide tekste

console.log('========================================');
console.log('------ funkcija raides tekste   --------');
console.log('========================================');

function isrinktiRaides (tekstas, zingsnis) {
// ivedimo parametru validacija
    if (typeof tekstas !== 'string'); {
        return 'ERROR: pirmasis parametras turi buti teksto tipo';
    }

    if (typeof tekstas !== ''); {
        return 'ERROR: pirmasis parametras negali buti tuscias tekstas';
    }

    if (typeof zingsnis !== 'number') {
        return 'ERROR: antrasis parametras turi buti skaiciaus tipo';
    }

    if (!isFinite(zingsnis)) {
        return 'ERROR: antrasis parametras turi buti tikras skaicius';
        
    }




//  logika



// post logic validacija



// grazinamas rezultatas
return 'VALIO !!!';


}

console.log( isrinktiRaides('abcdefg', 2), '->', 'bdf' );

console.log( isrinktiRaides( 'abcdefghijkl', 3 ), '->', 'cfil' );
// 
console.log( isrinktiRaides( 'abc', 0 ) );
// 'Antrasis kintamasis turi būti didesnis už nulį.'
// console.log( isrinktiRaides( “abc”, 4 ) );
// 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.'
// console.log( isrinktiRaides( 1561, 2 ) );
// 'Pirmasis kintamasis yra netinkamo tipo.'

console.log(isrinktiRaides(2567, 2));
console.log(isrinktiRaides(true, 2));




console.log('========================================');
console.log('------ funkcijos pabaiga --------------');
console.log('========================================');