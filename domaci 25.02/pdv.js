/*Cene različitih proizvoda su zadate u vidu niza.
Za proizvode čija je cena manja od 50 dodati porez od 18%
u suprotnom porez od 8%.
Izračunati krajnji trošak (sabrati cene i njihov porez). 
cene = [5, 145, 69, 56, 13, 456, 78, 4, 30]*/

var cene = [5, 145, 69, 56, 13, 456, 78, 4, 30];
var cenePDV = [];
var trosak = 0;
for(i in cene){
	if(cene[i] < 50){
		cenePDV.push(cene[i]*1.18);
	}
	else{
		cenePDV.push(cene[i]*1.08);
	}
	trosak += cenePDV[i];
}
console.log("Ukupan trosak je " + Number(trosak.toFixed(2)) + " dinara.");