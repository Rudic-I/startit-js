// Napraviti novi niz koji će da sadrži imena zaposlenih, dakle:
//   [
//        "Joe Schmoe",
//        "Sally Sallerson",
//        "Bill Billson",
//        "Jane Janet",
//        "Bob Hope",
//        "John Doe"
//   ]

var people = [
    {name: 'Joe Schmoe', yearsExperience: 1, department: 'IT'},
    {name: 'Sally Sallerson', yearsExperience: 15, department: 'Engineering' },
    {name: 'Bill Billson', yearsExperience: 5, department: 'Engineering'},
    {name: 'Jane Janet', yearsExperience: 11, department: 'Management'},
    {name: 'Bob Hope', yearsExperience: 9, department: 'IT'},
    {name: 'John Doe', yearsExperience: 7, department: 'Management'}
];

function imenaZaposlenih(data){
	var nizZaposlenih = [];
	for(var i = 0; i < data.length; i++){
		nizZaposlenih.push(data[i].name);
	}
	return nizZaposlenih;
}

imenaZaposlenih(people);