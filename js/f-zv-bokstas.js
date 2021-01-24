// 2021-01-15, Pirma DataTransferItemList, nuo 1:10 min

console.log('========================================');
console.log('------ funkcija zvaigzduciu medis-------');
console.log('========================================');

function zvBokstas (eiliuSk) {
    const rezul = [];
    for (let k =  0; k < eiliuSk; k++) {
        const tarpai = eiliuSk - k - 1;
        const zv = k *2 +1;
        const tekstoEil = ' '.repeat(tarpai) + '*'.repeat(zv) + ' '.repeat(tarpai);
        // rezul.push(tekstoEil);
        console.log(tekstoEil);
    }
    return rezul;
}

zvBokstas(13);
// console.log (zvBokstas (13));

console.log('========================================');
console.log('------ funkcijos pabaiga --------------');
console.log('========================================');