console.log('========================================');
console.log('------ skaitmenu skaiciavimas ----------');
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
    if (typeof skaicius !== 'number'); {
        return 'ERROR: reikia skaiciaus tipo reiksmes';
    }
    if (isNaN (skaicius)); {
        return 'ERROR: reikia skaiciaus tipo reiksmes';
    }
    if (skaicius % 1 !== 0)
    return ilgis
}

const skaiciuseka = '' + skaicius;
// tokiu budu skaicius paverciamas tekstu
let kiekskaitmenu = skaiciuseka.length;

console.log(skaitmenuSkaiciusSkaiciuje( 5 ), '1' );
console.log(skaitmenuSkaiciusSkaiciuje( 781 ), '3' );
console.log(skaitmenuSkaiciusSkaiciuje( 37060123456 ), '11' );
console.log(skaitmenuSkaiciusSkaiciuje( true ), 'Pateikta netinkamo tipo reikšmė.');
console.log(skaitmenuSkaiciusSkaiciuje('asd'), 'Pateikta netinkamo tipo reikšmė.');
console.log(skaitmenuSkaiciusSkaiciuje(NaN), 'Pateikta netinkamo tipo reikšmė.');

// neispresti atvejai. pameginti kitam kartui

// pasiskaityti - standartine skaiciaus israiska
// 



console.log('========================================');
console.log('------ skaitmenu skaiciavimo pabaiga ---');
console.log('========================================');