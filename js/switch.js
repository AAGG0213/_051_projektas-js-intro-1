// 2021-01-06, Antra dalis, nuo 38 min

console.log('========================================');
console.log('--------- switch operatorius -----------');
console.log('========================================');

/*
const day = 'pir';
switch () {}

switch ideja - gauti kintamaji

silpnybe - negalima palyginti

kaip zodymo principas
kaip su tekstu, taip ir su skaiciais


*/

const day = 'antrad';
switch (day) {
    case 'pirmad':
        console.log('pirmadienis');
        break;

    case 'antrad':
        console.log('antradienis');
        break;

    case 'treciad':
        console.log('treciadienis');

    default:
        console.log('tokia diena neegzistuoja');


}

// vienintelis uzdavinys, kur lenkia if'a - 
// pavyzdys su marsrutais, kuriais autobusai sukasi ratu
// swith prades vykdyti nuo tos vietos, kur atitinka, ir vykdys logika, 
// kol sutiks break


const stoteleKurIlipau = 'Parko';

switch (stoteleKurIlipau) {
    case 'N.V. ziedas' : console.log('N.V.ziedas');
    
    case 'Parko' : console.log('Parko');
    
    case 'Rudens' : console.log('Rudens');
    
    case 'Zliasis tiltas' : console.log('Galutine stotele : Zaliasis tiltas');
  
    case 'Lvovo' : console.log('Lvovo');
    
    case 'Vasaros' : console.log('Vasaros');
    
    case 'Rudens' : console.log('Rudens');
    
    case 'Parko' : console.log('Galutine marsruto stotele : Parko');
    break;
}

const ardarbodiena = 6;

switch (ardarbodiena) {
    case 1:
    case 2:  
    case 3:
    case 4:
    case 5:
        console.log('Darbadieniai');
        break;

    case 6:
    case 7:
        console.log('Savaitgalis');
        break;
    
    default:  
        console.log('Ne savaites diena');
        break;
}

console.log('========================================');
console.log('-------- switch operatoriaus pabaiga ---');
console.log('========================================');
