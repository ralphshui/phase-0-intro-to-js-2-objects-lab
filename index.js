// Write your solution in this file!
const employee = {
    name : "ralph", 
    streetAddress :"123 broadway street", 
};

function updateEmployeeWithKeyAndValue(employee, key, value){
    return {...employee, [key]: value};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;

    return employee;
}
   

function deleteFromEmployeeByKey(employee, key){
    const newRoster = {...employee};
    delete newRoster[key];

    return newRoster;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];

    return employee;
}