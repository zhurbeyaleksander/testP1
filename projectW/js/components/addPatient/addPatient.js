function addNewPatient() {
    var sur = $$('addNewPatientForm').getValues().surAdd;
    var name = $$('addNewPatientForm').getValues().nameAdd;
    var city = $$('addNewPatientForm').getValues().cityAdd;
    patients.push({id: (patients.length - 1), surname: sur, name: name, city: city});
    closeAllPages();
    $$('sucAddPatient').show();
}

export {addNewPatient};
