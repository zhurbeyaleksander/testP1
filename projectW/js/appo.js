'use strict'
function showSearchResultApo() {
    var sur = $$('searchFormApo').getValues().sur;
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
