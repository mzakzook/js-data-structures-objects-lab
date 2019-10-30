// Write your solution in this file!
 const driver = { max: 'audi' };

 function updateDriverWithKeyAndValue(driver, key, value) {
     return Object.assign({}, driver, { [key]: value});
 }

 function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
     return Object.assign(driver, {[key]: value});
 }

 function deleteFromDriverByKey(driver, key) {
     const newObject = Object.assign({}, driver);
     delete newObject[key];
     return newObject;
 }

 function destructivelyDeleteFromDriverByKey(driver, key) {
     delete driver[key];
     return driver;
 }