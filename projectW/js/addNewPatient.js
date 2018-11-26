'use strict'
function addNewPatient() {
    var sur = $$('addNewPatientForm').getValues().surAdd;
    var name = $$('addNewPatientForm').getValues().nameAdd;
    var midName = $$('addNewPatientForm').getValues().midnameAdd;
    var city = $$('addNewPatientForm').getValues().cityAdd;
    var street = $$('addNewPatientForm').getValues().streetAdd;
    var home = $$('addNewPatientForm').getValues().homeAdd;
    var flat = $$('addNewPatientForm').getValues().flatAdd;
    var phone = $$('addNewPatientForm').getValues().phoneAdd;
    var age = $$('addNewPatientForm').getValues().ageAdd;

    patients.push({id: (patients.length + 1), surname: sur, name: name,
       midName: midName, city: city,
      street: street, home: home, flat: flat, phone: phone, age: age});
    closeAllPages();
    $$('sucAddPatient').show();
}
