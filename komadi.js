/*Napisati funkciju koja izracunava
koliko komada proizvoda mozemo da kupimo
ako znamo koliko para imamo na racunu
i koliko kosta jedan proizvod*/

function kolikoKomada(stanje, cena){
	return Math.floor(stanje/cena);
}
var rezultat = kolikoKomada(325, 14);
document.write(rezultat);