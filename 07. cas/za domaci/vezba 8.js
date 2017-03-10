var test_objekat1 = {ime: "Petar", prezime: "Petrovic", ocene: [1, 6, 2, 5, 7, 2, 8, 3]};
var test_objekat2 = {ime: "Marko", prezime: "Markovic", ocene: [45, 62, 123, 63, 74, 85, 21, 77]};
var test_objekat3 = {ime: "Jovan", prezime: "Jovanovic", ocene: [-6, 23, 10, 0, -22, 52, 86, 2]};

// Koliko je ocena veće od zadatog broja? Funkcija vraća broj.
function getNumberOfGradesGreaterThan(person, limit) {
	var count = 0;
	for(var i = 0; i < person.ocene.length; i++){
		if(person.ocene[i] > limit){
			count++;
		}
	}
	return count;
}

console.log(getNumberOfGradesGreaterThan(test_objekat1, 5));
console.log(getNumberOfGradesGreaterThan(test_objekat2, 47));
console.log(getNumberOfGradesGreaterThan(test_objekat3, 3));