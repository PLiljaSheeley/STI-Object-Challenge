var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];

var employees = [atticus, jem, boo, scout];

var employeeObject = {
  name:[],
  idNum:[],
  sal:[],
  perform:[],
  bonusPercent:[],
  totalSal:[]
};
  
function arrayToObject() {

  for(i=0;i<employees.length;i++){
    employeeObject.name[i]=employees[i][0]
    employeeObject.idNum[i]=employees[i][1]
    employeeObject.sal[i]=employees[i][2]
    employeeObject.perform[i]=employees[i][3]
  } 
  return employeeObject;
}

arrayToObject();

(sti(employeeObject));

totalComp(employeeObject);

console.log(employeeObject);

function sti(object){
  for(var i = 0; i<employees.length; i++){
    var bonus = 0;
      switch(object.perform[i]){
        case 3:
          bonus = 0.04;
          break;
        case 4:
          bonus = 0.06;
          break;
        case 5:
          bonus = 0.10;
          break;
      }
      if(object.idNum[i].length === 4){
        bonus += 0.05;
      }
      if(object.sal[i] > 65000 && bonus > 0){
        bonus -= 0.01;
      }
      if(bonus > 0.13){
        bonus = 0.13;
      }
      employeeObject.bonusPercent[i] = bonus;
    }
  return employeeObject.bonusPercent;
}

function totalComp(name){
	for(var i = 0; i<employees.length; i++){
		var total = 0;
			total = ((name.sal[i])*1 *name.bonusPercent[i]+(name.sal[i])*1);
			employeeObject.totalSal[i] = total;

}
return employeeObject.totalSal;
}
