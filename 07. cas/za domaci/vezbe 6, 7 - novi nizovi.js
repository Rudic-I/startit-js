var test_objekat1 = {ime: "Petar", prezime: "Petrovic", ocene: [1, 6, 2, 5, 7, 2, 8, 3]};
var test_objekat2 = {ime: "Marko", prezime: "Markovic", ocene: [45, 62, 123, 63, 74, 85, 21, 77]};
var test_objekat3 = {ime: "Jovan", prezime: "Jovanovic", ocene: [-6, 23, 10, 0, -22, 52, 86, 2]};

// Novi niz koji se dobija množenjem parnih ocena sa 3, a neparnih sa 4, funkcija vraća niz
function getMappedGrades(person) {
	var newArray = [];
	for(var i = 0; i < person.ocene.length; i++){
		if(person.ocene[i] % 2 === 0){
			newArray.push(person.ocene[i] * 3);
		}
		else{
			newArray.push(person.ocene[i] * 4);
		}
	}
	return newArray;
}

console.log(getMappedGrades(test_objekat1));
console.log(getMappedGrades(test_objekat2));
console.log(getMappedGrades(test_objekat3));

// Novi niz koji se dobija stavljanjem parnih ocena na početak niza, a neparnih na kraj.
// Mogu se praviti pomoćni nizovi za parne i neparne pa da se na kraju spoje. Funkcija vraća niz
function reorderGrades(grades) {
	var reorderedArray = [];
	var oddArray = [];
	for(var i = 0; i < grades.length; i++){
		if(grades[i] % 2 === 0){
			reorderedArray.push(grades[i]);
		}
		else{
			oddArray.push(grades[i]);
		}
	}
	return reorderedArray.concat(oddArray);
}

console.log(reorderGrades(test_objekat1.ocene));
console.log(reorderGrades(test_objekat2.ocene));
console.log(reorderGrades(test_objekat3.ocene));