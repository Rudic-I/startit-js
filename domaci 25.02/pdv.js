/*Cene različitih proizvoda su zadate u vidu niza.
Za proizvode čija je cena manja od 50 dodati porez od 18%
u suprotnom porez od 8%.
Izračunati krajnji trošak (sabrati cene i njihov porez). 
cene = [5, 145, 69, 56, 13, 456, 78, 4, 30]*/

var cene = [5, 145, 69, 56, 13, 456, 78, 4, 30];
var trosak = 0;
function ukupanTrosak(niz){
	for(i in niz){
		if(niz[i] < 50){
			trosak += niz[i]*1.18;
		}
		else{
			trosak += niz[i]*1.08;
		}
  	}
	console.log("Ukupan trosak je " + trosak.toFixed(2) + " dinara.");
}
ukupanTrosak(cene);
