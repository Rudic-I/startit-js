//Napraviti novi objekat koji će da sadrži zbir godina iskustva po departmentima, dakle:
//  {
//    Engineering: 20,
//    IT: 10,
//    Management: 11
//  }
var people = [
    {name: 'Joe Schmoe', yearsExperience: 1, department: 'IT'},
    {name: 'Sally Sallerson', yearsExperience: 15, department: 'Engineering'},
    {name: 'Bill Billson', yearsExperience: 5, department: 'Engineering'},
    {name: 'Jane Janet', yearsExperience: 11, department: 'Management'},
    {name: 'Bob Hope', yearsExperience: 9, department: 'IT'}
];

function godineIskustvaDpt(data){
	var godineIskustva = {};
	var totalEngineering = 0;
    var totalIt = 0;
    var totalManagement = 0
	for(var i = 0; i < data.length; i++){
		if(data[i].department == 'Engineering'){
        	totalEngineering += data[i].yearsExperience;
		}
		else if(data[i].department == 'IT'){
        	totalIt += data[i].yearsExperience;
		}
		else{
        	totalManagement += data[i].yearsExperience;
		}
	}
	godineIskustva.Engineering = totalEngineering;
	godineIskustva.IT = totalIt;
	godineIskustva.Management = totalManagement;
	console.log(godineIskustva);
}
godineIskustvaDpt(people);