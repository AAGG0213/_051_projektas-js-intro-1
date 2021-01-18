console.log('========================================');
console.log('----- skaitmenu skaiciavimas skaiciuje -');
console.log('========================================');

/*
a.	priima vieną kintamąjį
b.	jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
c.	priešingu atveju, funkcija tęsia darbą
d.	į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
e.	gražina skaitmenų kiekį
f.	TESTAI:
i.	
*/

function skaitmenuSkaiciusSkaiciuje(skaicius) {
    if (typeof skaicius !== 'number') {
        return 'ERROR: reikia skaiciaus tipo reiksmes';
    }
    // Zemiau pakanka salygos su !isFinite apima isNaN
    if (isNaN (skaicius) || !isFinite(skaicius)) {
        return 'ERROR: reikia skaiciaus tipo reiksmes';
    }
    
    skaiciusKaipTekstas = ''  +  skaicius;
    let  ilgis = skaiciusKaipTekstas.length;
   
    if (skaicius % 1 !== 0) {
        ilgis--;
    }

    if (skaicius < 0) {
        ilgis--;
    }





    return ilgis;
}


// const skaicius = '' ;
// tokiu budu skaicius paverciamas tekstu
// let kiekskaitmenu = skaiciuseka.length;

console.log(skaitmenuSkaiciusSkaiciuje(5), '1' );
console.log(skaitmenuSkaiciusSkaiciuje(781), '3' );
console.log(skaitmenuSkaiciusSkaiciuje(37060123456), '11' );
console.log(skaitmenuSkaiciusSkaiciuje(true), 'Pateikta netinkamo tipo reikšmė.');
console.log(skaitmenuSkaiciusSkaiciuje('asd'), 'Pateikta netinkamo tipo reikšmė.');
console.log(skaitmenuSkaiciusSkaiciuje(NaN), 'Pateikta netinkamo tipo reikšmė.');
console.log(skaitmenuSkaiciusSkaiciuje(1.5), '2' );
console.log(skaitmenuSkaiciusSkaiciuje(0.3456), '5');
console.log(skaitmenuSkaiciusSkaiciuje(-10.3456), '6');
console.log(skaitmenuSkaiciusSkaiciuje(Infinity));

// neispresti atvejai. pameginti kitam kartui
// standartine skaiciaus israiska - paziureti !!! 
console.log(skaitmenuSkaiciusSkaiciuje(1234123412341234123412341234123412341234123412412341243123412341241234123412341), '79');
console.log(skaitmenuSkaiciusSkaiciuje(-123412341234123412341234124), '27');
console.log(skaitmenuSkaiciusSkaiciuje(0.12341234123412341234123412341234), '33');
console.log(skaitmenuSkaiciusSkaiciuje(Infinity));



// pasiskaityti - standartine skaiciaus israiska
// 



console.log('========================================');
console.log('------ skaitmenu skaiciavimo pabaiga ---');
console.log('========================================');