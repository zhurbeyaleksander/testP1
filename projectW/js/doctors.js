'use strict'

function todayAppoitments(){
$$("doctors").attachEvent("onAfterSelect", function(id){
$$("docProf").clearAll();
appoitments.forEach(function(item, i){
             if(id == item.toDocid){
            $$("docProf").add({id: i, patientSur: item.patientSur, patientName: item.patientName, patientId: item.pId});
              }
});
closeAllPages();
$$("docProf").show();
});
}
