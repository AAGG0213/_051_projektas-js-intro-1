// 2021-01-13, Pirma dalis, nuo xx min

console.log('========================================');
console.log('---- funkcija didziausias sk sarase ----');
console.log('========================================');

/*
a.	priima vieną kintamąjį
b.	jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
c.	jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
d.	priešingu atveju, funkcija tęsia darbą
e.	pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
f.	gražina didžiausią surastą skaičių
g.	TESTAI:
*/

function didziausiasSkaiciusSarase (skSarasas) {

//    validacija

if (!Array.isArray(skSarasas)) {
    return 'ERROR: parametras turi buti array tipo';
}

    // // tai nera tinkamas budas atskirti array -->> if (typeof skSarasas !== 'object') {
    // if (typeof skSarasas !== 'object') {

    //     return 'ERROR: parametras turi buti saraso tipo';
    // }
    if (skSarasas.length === 0) {
        return 'ERROR: sarasas turi buti netuscias';
    }


//    logika

    let didziausiasSk = -Infinity; //turi buti pats maziausias galimas skaicius   
    
    for (let i = 0; i < skSarasas.length; i++) {
        const kitasSkaicius = skSarasas[i];
        if (typeof kitasSkaicius !== 'number' || 
            !isFinite(kitasSkaicius)) {
            continue;
        }

        if (kitasSkaicius > didziausiasSk) {
            didziausiasSk = kitasSkaicius;
        }
    }
// patikrinimas po logikos
if (didziausiasSk === -Infinity) {
    return 'ERROR: sarase nera nei vieno skaiciaus';
}
// rezultato grazinimas

    return didziausiasSk;
} 

console.log( didziausiasSkaiciusSarase('pomidoras'));
console.log( didziausiasSkaiciusSarase( [] ));
console.log( didziausiasSkaiciusSarase( [ 1 ] ), '1' );
console.log( didziausiasSkaiciusSarase( [ 1, 2, 3 ] ), '3' );
console.log( didziausiasSkaiciusSarase( [ -5, 78, 14, 0, 18 ] ), '78');
console.log( didziausiasSkaiciusSarase( [ 69, 69, 69, 69, 66 ]), '69');
console.log( didziausiasSkaiciusSarase( [ -1, -2, -3, -4, -5, -6, -7, -8 ]), '-1');

console.log( didziausiasSkaiciusSarase(['asdf']), '- blogai' );
console.log( didziausiasSkaiciusSarase( ['a', 'vvv', 'f', 'z'] ), '- blogai' );
console.log( didziausiasSkaiciusSarase( ['s', 3, 1] ), '3' );
console.log( didziausiasSkaiciusSarase( [ -Infinity, 4, 2] ), '4' );

//intarpas apie objektus, 2021-01-13, Antra dalis, 

// console.clear();

console.log(didziausiasSkaiciusSarase({}));
console.log(didziausiasSkaiciusSarase({vardas: 'Jonas'}));


console.log(typeof(didziausiasSkaiciusSarase));


console.log('========================================');
console.log('------ funkcijos pabaiga ---------------');
console.log('========================================');


