var people = [
    {name: 'Joe Schmoe', yearsExperience: 1, department: 'IT'},
    {name: 'Sally Sallerson', yearsExperience: 15, department: 'Engineering'},
    {name: 'Bill Billson', yearsExperience: 5, department: 'Engineering'},
    {name: 'Jane Janet', yearsExperience: 11, department: 'Management'},
    {name: 'Bob Hope', yearsExperience: 9, department: 'IT'}
];


function godineIskustvaPoDepartmentima(data){
	var godineIskustva = {
    	IT: 0,
    	Engineering: 0,
    	Management: 0
    };
	for(var i = 0; i < data.length; i++){
		if(data[i].department == 'IT'){
			godineIskustva.IT += data[i].yearsExperience;
		}
		else if(data[i].department == 'Engineering'){
			godineIskustva.Engineering += data[i].yearsExperience;
		}
		else{
			godineIskustva.Management += data[i].yearsExperience;
		}
	}
	console.log(godineIskustva);
}
godineIskustvaPoDepartmentima(people);