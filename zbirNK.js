/* Napisati funkciju koja izracunava zbir svih celih brojeva u
zadatom opsegu N i K, pri cemu je N uvek manje od K. 
N i K mogu biti i negativni*/

function zbirNK(n, k){
	var zbir = 0;
	if(n % 1 === 0 && k % 1 === 0 && n < k){
		for(var i = n; i <= k; i++){
			zbir += i;
		}
	return zbir;
	}
	else{
		return ("Uneti dva cela broja, pri cemu prvi broj mora biti manji od drugog");
	}
}
var rezultat1 = zbirNK(-1, 3);
var rezultat2 = zbirNK(2, 3.5);
var rezultat3 = zbirNK(2, 'k');
var rezultat4 = zbirNK(4, 2);
document.write(rezultat1 + '<br>' + rezultat2 + '<br>' + rezultat3 + '<br>' + rezultat4);
