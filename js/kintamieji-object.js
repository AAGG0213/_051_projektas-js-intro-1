// 2021-01-13, Antra dalis, nuo 15 min

/*
objektas - vienas is kintamuju tipo


*/

const petras = {
    vardas : 'Petras',
    amzius: '99',
    plaukuspalva: 'juoda',
    arVairuoja: true,
    arMeluoja: false,
    aplankytiMiestai: ['Vilnius', 'Skuodas', 'Riga'],
    /*
    vaikai 
    */
}


console.log(petras);
// universalus objekto reiksmiu istrukimo budas

console.log(petras['vardas']);
console.log(petras['plaukuspalva']);
console.log(petras['arMeluoja']);
console.log(petras['aplankytiMiestai']);
console.log(petras['aplankytiMiestai'][2]);

// console.clear();

// patogiausias budas - jei parametrai 
console.log(petras.vardas);
console.log(petras.plaukuspalva);
console.log(petras.arMeluoja);
console.log(petras.aplankytiMiestai);
console.log(petras.aplankytiMiestai[2]);


