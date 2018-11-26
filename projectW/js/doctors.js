'use strict'

function todayAppoitments(){
$$("doctors").attachEvent("onAfterSelect", function(id){
$$("docProf").clearAll();
appoitments.forEach(function(item, i){

var today = new Date;
if(id == item.toDocid && today.getDate() == item.dateA.getDate()
&& today.getMonth() == item.dateA.getMonth()
&& today.getFullYear() == item.dateA.getFullYear() ){
$$("docProf").add({id: i, patientSur: item.patientSur, patientName: item.patientName, patientId: item.pId});
}
});
closeAllPages();
$$("docProf").show();
});
}
