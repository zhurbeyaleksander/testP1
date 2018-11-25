'use strict'
function showSearchResult() {
    var sur = $$('searchForm').getValues().sur;
    $$("searchResult").clearAll();
    patients.forEach(function(item, i){
      if(sur.toLowerCase() == item.surname.toLowerCase()){
        $$("searchResult").add({id: i, surname: item.surname, name: item.name, city: item.city});
      }
    });
      $$("searchResult").show();
}

export {showSearchResult};
