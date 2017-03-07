//Napisati funkciju koja će kao jedini parametar da prima objekat.
//Funkcija treba da vrati NOVI NIZ čiji će elementi biti elementi niza
//sa ocenama unutar objekta plus sufiks "/10".
//Znači ako je ocena npr. 3 u novom nizu će biti string "3/10".

var testObjekat = {
	naziv: "Startit kurs pravljenja sajtova",
	trajanjeNedelja: 33,
	predavac: {
		ime: "Petar",
		prezime: "Popovic"
	},
	ocenePolaznika: [3, 2, 7, 4, 8, 1, 9, 2, 10, 10, 3, 6, 3, 1, 7, 3, 5, 4, 10, 9, 1, 9],
	organizacija: "Startit",
	kursJosTraje: true
};
var noviNiz = [];

function ocene(data){
	for(var i = 0; i < data.ocenePolaznika.length; i++){
		noviNiz.push(data.ocenePolaznika[i] + "/10");
	}
	console.log(noviNiz);
}
ocene(testObjekat);