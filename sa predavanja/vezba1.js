// Napraviti novi objekat koji će da sadrži broj zaposlenih u svakom departmentu, dakle:
//   {
//     Engineering: 2,
//     IT: 2,
//     Management: 1
//   }

var people = [
    {name: 'Joe Schmoe', yearsExperience: 1, department: 'IT'},
    {name: 'Sally Sallerson', yearsExperience: 15, department: 'Engineering'},
    {name: 'Bill Billson', yearsExperience: 5, department: 'Engineering'},
    {name: 'Jane Janet', yearsExperience: 11, department: 'Management'},
    {name: 'Bob Hope', yearsExperience: 9, department: 'IT'}
];

function brojZaposlenih(data){
	var zaposleni = {};
	var totalEngineering = 0;
    var totalIt = 0;
    var totalManagement = 0
	for(var i = 0; i < data.length; i++){
		if(data[i].department == 'Engineering'){
        	totalEngineering ++;
		}
		else if(data[i].department == 'IT'){
        	totalIt ++;
		}
		else{
        	totalManagement ++;
		}
	}
	zaposleni.Engineering = totalEngineering;
	zaposleni.IT = totalIt;
	zaposleni.Management = totalManagement;
	console.log(zaposleni);
}

brojZaposlenih(people);