'use strict'
function addCase() {
  alert('add case');
    var sur = $$('addCase').getValues().surCase;
    var name = $$('addCase').getValues().nameCase;
    var id = $$('addCase').getValues().idCase;
    var textCase = $$('addCase').getValues().textCase;
    cases.push({id: (cases.length), surname: sur, name: name, pId: id, text: textCase});
    closeAllPages();
    $$('sucAddCase').show();
}


function putValueInForm(){

  $$("docProf").attachEvent("onAfterSelect", function(id){
  closeAllPages();
  $$("addCase").setValues({
          surCase: $$("docProf").getItem(id).patientSur,
          nameCase: $$("docProf").getItem(id).patientName,
          idCase: $$("docProf").getItem(id).patientId
      });
  $$("addCase").show();

  });

}
