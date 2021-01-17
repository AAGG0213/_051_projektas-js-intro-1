// 2021-01-11, Pirma dalis, nuo 38 min

console.log('========================================');
console.log('-------- Funkcija liekana --------------');
console.log('========================================');


function liekana(nuo, iki, daliklis) {
        let kiek1 = 0;

        for (let i = nuo; i<= iki; i++) {
        if (i % daliklis === 0) {
            kiek1++;
            
            }
                    
        }
        // console.log(kiek1);
        return 'Skaiciu intervale nuo ' + nuo + ' iki ' + iki + ', besidalijanciu is ' + daliklis + ' be liekanos, yra ' + kiek1;
        
        }

const liek1 = liekana(8, 11, 3);
console.log(liek1);

const liek2 = liekana(3, 33, 3);
console.log(liek2);

console.log('======================================');
console.log('-------- Funkcijos liekana pabaiga --');
console.log('======================================');