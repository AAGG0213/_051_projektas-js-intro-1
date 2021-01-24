// 2021-01-13, Antra dalis, nuo 46 min 
// 2021-01-15, Pirma dalis

// isrinkti kas kelinta raide tekste

console.log('========================================');
console.log('------ funkcija raides tekste   --------');
console.log('========================================');

function isrinktiRaides(tekstas, zingsnis) {
// ivedimo parametru validacija
    if (typeof tekstas !== 'string') {
        return 'ERROR: pirmasis parametras turi buti teksto tipo';
    }

    if (tekstas === '') {
        return 'ERROR: pirmasis parametras negali buti tuscias tekstas';
    }

    if (typeof zingsnis !== 'number') {
        return 'ERROR: antrasis parametras turi buti skaiciaus tipo';
    }

    if (zingsnis === 0) {
        return 'ERROR: zingsnis negali buti nulis';
    }

    if (isNaN(zingsnis) ) {
        return 'ERROR: zingsnis turi buti tikras skaicius';
        
    }

    if (!isFinite(zingsnis)) {
        return 'ERROR: zingsnis turi buti tikras skaicius';

    }

    if (zingsnis % 1 !==0) {
        return 'ERROR: zingsnis turi buti sveikas skaicius';
    }

    const tekstoilgis = tekstas.length;
    if (tekstoilgis < zingsnis) {
        return 'ERROR: zingsnis negali buti didesnis nei teksto ilgis';
    }


//  logika
// let isrinktasTekstas = '';
// for (let n = 0; n < tekstoilgis; n++) {
//     const raide = tekstas[n];
//     if (n % zingsnis === (zingsnis - 1) )
//         {
//             isrinktasTekstas = isrinktasTekstas + raide;
//         }
// }

let isrinktasTekstas = '';

if (zingsnis >0) {

    for (let n = zingsnis - 1; n < tekstoilgis; n += zingsnis) {
               isrinktasTekstas += tekstas[n];

    } 
}else {
        for (let n = tekstoilgis + zingsnis; n >=0; n += zingsnis) {
            isrinktasTekstas +=  tekstas[n];

        }
    }



// post logic validacija
if (isrinktasTekstas === '') {
    return 'ERROR: nenumatytas atvejis - tuscias tekstas';
}


// grazinamas rezultatas
return isrinktasTekstas;


}

console.log(isrinktiRaides(2567, 2));
console.log(isrinktiRaides(true, 2));
console.log(isrinktiRaides([], 6));
console.log(isrinktiRaides('asdfqwer', true));
console.log( isrinktiRaides('abc', 0 ));
console.log(isrinktiRaides('asdf', NaN));
console.log(isrinktiRaides('asdf', Infinity));
console.log(isrinktiRaides('asdf', -Infinity));
console.log(isrinktiRaides('', 3));
console.log(isrinktiRaides('asdf', 0));
console.log( isrinktiRaides('abc', 4 ) );

console.log(isrinktiRaides('abcdefg', 2), '->', 'bdf' );
console.log(isrinktiRaides('abcdefghijkl', 3 ), '->', 'cfil' );
console.log(isrinktiRaides('asdfqwerasdfqwer', 4), '->', 'frfr');

// kai zingsnis neigiamas - tekstas skaitomas atbulai

console.log(isrinktiRaides('asdfasdfwertwert', -3), '->', 'erfas');
console.log(isrinktiRaides('asdfasdfwertwert', 1.5));

console.log('========================================');
console.log('------ funkcijos pabaiga --------------');
console.log('========================================');