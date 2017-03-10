// Napraviti novi objekat koji će da sadrži zaposlene razvrstane po iskustvu, dakle:
//   {
//     AMATEUR: ["Bill Billson"],
//     EXPERT: ["Sally Sallerson", "Jane Janet"],
//     NEWBIE: ["Joe Schmoe"],
//     PRO: ["Bob Hope", "John Doe"]
//   }

var people = [
    {name: 'Joe Schmoe', yearsExperience: 1, department: 'IT'},
    {name: 'Sally Sallerson', yearsExperience: 15, department: 'Engineering' },
    {name: 'Bill Billson', yearsExperience: 5, department: 'Engineering'},
    {name: 'Jane Janet', yearsExperience: 11, department: 'Management'},
    {name: 'Bob Hope', yearsExperience: 9, department: 'IT'},
    {name: 'John Doe', yearsExperience: 7, department: 'Management'}
];

function iskustvoZaposlenih(data){
    var iskustvo = {};
    var amateur = [];
    var expert = [];
    var newbie = [];
    var pro = [];
    for(var i = 0; i < data.length; i++){
        if(data[i].yearsExperience <= 2){
            newbie.push(data[i].name);
        }
        else if(data[i].yearsExperience <= 5){
            amateur.push(data[i].name);
        }
        else if(data[i].yearsExperience <= 10){
            pro.push(data[i].name);
        }
        else{
            expert.push(data[i].name);
        }
    }
    iskustvo.AMATEUR = amateur;
    iskustvo.EXPERT = expert;
    iskustvo.NEWBIE = newbie;
    iskustvo.PRO = pro;
    return iskustvo;
}

iskustvoZaposlenih(people);