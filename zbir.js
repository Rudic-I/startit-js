//Napisati funkciju koja racuna sumu prvih N prirodnih brojeva

function zbir(broj) {
    if(broj <= 1) {
        return broj;
    }
    else {
       return broj + zbir(broj-1);
    }
}
var rezultat = zbir(4);
document.write(rezultat);