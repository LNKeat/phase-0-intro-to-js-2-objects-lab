// Write your solution in this file!
const employee = {
    name: 'laura', 
    streetAddress: '123 street'
};

function updateEmployeeWithKeyAndValue(obj, key, val ) {
  const newEmp = {...obj};
  newEmp[key] = val;
  return newEmp;
}

updateEmployeeWithKeyAndValue(employee, 'city', 'yourtowne');


function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, val) {
    obj[key] = val;
    return obj;
};

destructivelyUpdateEmployeeWithKeyAndValue(employee, 'country', 'usa');


function deleteFromEmployeeByKey(obj, key) {
    let newObj = {...obj};
    delete newObj[key];
    return newObj
  };
  

  function destructivelyDeleteFromEmployeeByKey(obj, key) {
      delete obj[key];
      return obj
  }

  