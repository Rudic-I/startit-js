/*Napisati program koji će za unetu reč proveriti
da li je palindrom.*/

var novaRec = "";
function palindrom(rec){
	for(var i = rec.length-1; i >= 0; i--){
		novaRec += rec[i];
	}
	if(novaRec === rec){
		console.log("Ova rec je palindrom");
	}
	else{
		console.log("Ova rec nije palindrom");
	}
}