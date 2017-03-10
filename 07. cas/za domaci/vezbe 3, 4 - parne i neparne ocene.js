var test_objekat1 = {ime: "Petar", prezime: "Petrovic", ocene: [1, 6, 2, 5, 7, 2, 8, 3]};
var test_objekat2 = {ime: "Marko", prezime: "Markovic", ocene: [45, 62, 123, 63, 74, 85, 21, 77]};
var test_objekat3 = {ime: "Jovan", prezime: "Jovanovic", ocene: [-6, 23, 10, 0, -22, 52, 86, 2]};

// Novi niz koji se sastoji od parnih ocena osobe, funkcija vraća niz
function getArrayOfEvenGrades(person) {
	var arrayOfEvenGrades = [];
	for(var i = 0; i < person.ocene.length; i++){
		if(person.ocene[i] % 2 === 0){
			arrayOfEvenGrades.push(person.ocene[i]);
		}
	}
	return arrayOfEvenGrades;
}

console.log(getArrayOfEvenGrades(test_objekat1));
console.log(getArrayOfEvenGrades(test_objekat2));
console.log(getArrayOfEvenGrades(test_objekat3));


// Novi niz koji se sastoji od neparnih ocena osobe, funkcija vraća niz
function getArrayOfOddGrades(grades) {
	var arrayOfOddGrades = [];
	for(var i = 0; i < grades.length; i++){
		if(grades[i] % 2 === 1){
			arrayOfOddGrades.push(grades[i]);
		}
	}
	return arrayOfOddGrades;
}

console.log(getArrayOfOddGrades(test_objekat1.ocene));
console.log(getArrayOfOddGrades(test_objekat2.ocene));
console.log(getArrayOfOddGrades(test_objekat3.ocene));