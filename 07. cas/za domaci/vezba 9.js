var test_objekat1 = {ime: "Petar", prezime: "Petrovic", ocene: [1, 6, 2, 5, 7, 2, 8, 3]};
var test_objekat2 = {ime: "Marko", prezime: "Markovic", ocene: [45, 62, 123, 63, 74, 85, 21, 77]};
var test_objekat3 = {ime: "Jovan", prezime: "Jovanovic", ocene: [-6, 23, 10, 0, -22, 52, 86, 2]};

// Ako je treći argument true treba napraviti novi niz od ocena osobe koji su VEĆE ili JEDNAKE od zadatog broja.
// Ako je treći argument false treba napraviti novi niz od ocena osobe koji su MANJE od zadatog broja.
// Funkcija vraća niz
function filterOutGrades(array, limit, direction) {
	var newArray = [];
	if(direction == true){
		for(var i = 0; i < array.ocene.length; i++){
			if(array.ocene[i] >= limit){
				newArray.push(array.ocene[i]);
			}
		}
	}
	else{
		for(var i = 0; i < array.ocene.length; i++){
			if(array.ocene[i] < limit){
				newArray.push(array.ocene[i]);
			}
		}
	}
	return newArray;
}

console.log(filterOutGrades(test_objekat1, 5, true));
console.log(filterOutGrades(test_objekat1, 7, false));

console.log(filterOutGrades(test_objekat2, 47, false));
console.log(filterOutGrades(test_objekat2, 47, true));

console.log(filterOutGrades(test_objekat3, 1, true));
console.log(filterOutGrades(test_objekat3, 5, false));