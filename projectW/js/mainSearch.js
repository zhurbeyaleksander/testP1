'use strict'
function showSearchResult() {
    var sur = $$('searchForm').getValues().sur;
    $$("searchResult").clearAll();
    patients.forEach(function(item, i){
      if(sur.toLowerCase() == item.surname.toLowerCase()){
        $$("searchResult").add({id: i, surname: item.surname, name: item.name,
          midName: item.midName, city: item.city, street: item.street, home: item.home,
        flat: item.flat, phone: item.phone, age: item.age
        });
      }
    });
      $$("searchResult").show();
}


function eventSearchResult(){
$$("searchResult").attachEvent("onAfterSelect", function(id){
closeAllPages();
$$("patientProfile").show();
$$("patientCases").show();
$$("patientCases").clearAll();
var item = $$("searchResult").getItem(id);
cases.forEach(function(it, i){
       if(it.pId == (item.id + 1)) {
      $$("patientCases").add({id: i, surname: it.surname, name: it.name, idCase: it.id, text: it.text});
       }

});
createProfile(item.surname, item.name, item.midName, item.city, item.street,
item.home, item.flat, item.phone, item.age);
});

}
