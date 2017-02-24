//Napisati funkciju koja racuna faktorijel zadatog broja

function faktorijel(broj) {
    if(broj <= 1) {
        return broj;
    } else {
       return broj * faktorijel(broj-1);
    }
}
var rezultat = faktorijel(5);
document.write(rezultat);