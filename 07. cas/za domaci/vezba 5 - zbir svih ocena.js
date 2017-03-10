var test_objekat1 = {ime: "Petar", prezime: "Petrovic", ocene: [1, 6, 2, 5, 7, 2, 8, 3]};
var test_objekat2 = {ime: "Marko", prezime: "Markovic", ocene: [45, 62, 123, 63, 74, 85, 21, 77]};
var test_objekat3 = {ime: "Jovan", prezime: "Jovanovic", ocene: [-6, 23, 10, 0, -22, 52, 86, 2]};

// Suma svih ocena, funkcija vraća broj
function getSumOfGrades(grades) {
	var sumOfGrades = 0;
	for(var i = 0; i < grades.length; i++){
		sumOfGrades += grades[i];
	}
	return sumOfGrades;
}

console.log(getSumOfGrades(test_objekat1.ocene));
console.log(getSumOfGrades(test_objekat2.ocene));
console.log(getSumOfGrades(test_objekat3.ocene));