var test_objekat1 = {ime: "Petar", prezime: "Petrovic", ocene: [1, 6, 2, 5, 7, 2, 8, 3]};
var test_objekat2 = {ime: "Marko", prezime: "Markovic", ocene: [45, 62, 123, 63, 74, 85, 21, 77]};
var test_objekat3 = {ime: "Jovan", prezime: "Jovanovic", ocene: [-6, 23, 10, 0, -22, 52, 86, 2]};

//Najmanja ocena osobe, funkcija vraća broj
function getMinGrade(person){
	var minGrade = person.ocene[0];
	for(var i = 0; i < person.ocene.length; i++){
		if(person.ocene[i] < minGrade){
			minGrade = person.ocene[i];
		}
	}
	return minGrade;
}

console.log(getMinGrade(test_objekat1));
console.log(getMinGrade(test_objekat2));
console.log(getMinGrade(test_objekat3));


// Najveća ocena osobe, funkcija vraća broj
function getMaxGrade(grades) {
	var maxGrade = grades[0];
	for(var i = 0; i < grades.length; i++){
		if(grades[i] > maxGrade){
			maxGrade = grades[i];
		}
	}
	return maxGrade;
}

console.log(getMaxGrade(test_objekat1.ocene));
console.log(getMaxGrade(test_objekat2.ocene));
console.log(getMaxGrade(test_objekat3.ocene));