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

function showSearchResultApoDoc() {
    var sur = $$('searchFormApo3').getValues().sur;
    $$("doctors2").clearAll();
    doctors.forEach(function(item, i){
      if(sur.toLowerCase() == item.docSur.toLowerCase()){
        $$("doctors2").add({id: item.id, docSur: item.docSur, docName: item.docName,
          sd: item.sd
        });
      }
    });
}

'use strict'
function addNewAppoitment() {
    var surP = $$('addApo').getValues().surP;
    var nameP = $$('addApo').getValues().nameP;
    var idP = $$('addApo').getValues().idP;
    var idD = $$('addApo').getValues().idD;
    var dateApo = $$('addApo').getValues().dateA;

    appoitments.push({id: (appoitments.length - 1), patientSur: surP,
      patientName: nameP, toDocid: idD, pId: idP, dateA: dateApo});

    closeAllPages();
    $$('sucAddPatient').show();
}
