//Napisati funkciju koja će kao jedini parametar da prima objekat sa rezultatima.
//Funkcija treba da vrati prosečnu ocenu polaznika

var testObjekat = {
	naziv: "Startit kurs pravljenja sajtova",
	trajanjeNedelja: 33,
	predavac: {
		ime: "Petar",
		prezime: "Popovic"
	},
	ocenePolaznika: [3, 2, 7, 4, 8, 1, 9, 2, 10, 10, 3, 6, 3, 1, 5, 7, 3, 4, 10, 9, 1, 9],
	organizacija: "Startit",
	kursJosTraje: true
};

function prosek(data){
	var prosecnaOcena = 0;
	for(var i = 0; i < data.ocenePolaznika.length; i++){
		prosecnaOcena += data.ocenePolaznika[i];
	}
	return prosecnaOcena / data.ocenePolaznika.length;
}

prosek(testObjekat);