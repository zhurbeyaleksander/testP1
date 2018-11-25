'use strict'
function showSearchResultApo() {
    var sur = $$('searchFormApo2').getValues().sur;
    $$("searchResultApo").clearAll();
    patients.forEach(function(item, i){
      if(sur.toLowerCase() == item.surname.toLowerCase()){
        $$("searchResultApo").add({id: i, surname: item.surname, name: item.name,
          midName: item.midName, city: item.city, street: item.street, home: item.home,
        flat: item.flat, phone: item.phone, age: item.age
        });
      }
    });
      $$("searchResultApo").show();
}


function eventSearchResultApo(){
$$("searchResultApo").attachEvent("onAfterSelect", function(id){

  $$("addApo").setValues({
     surP: $$("searchResultApo").getItem(id).surname,
     nameP: $$("searchResultApo").getItem(id).name,
     idP: $$("searchResultApo").getItem(id).id,

   });

});

}

function eventSearchResultApoDoc(){
$$("doctors2").attachEvent("onAfterSelect", function(id){
var surP = $$("addApo").getValues().surP;
var nameP = $$("addApo").getValues().nameP;
var idP = $$("addApo").getValues().idP;


  $$("addApo").setValues({
     surD: $$("doctors2").getItem(id).docSur,
     nameD: $$("doctors2").getItem(id).docName,
     idD: $$("doctors2").getItem(id).id,
     surP: surP,
     nameP: nameP,
     idP: idP
   });

});

}
