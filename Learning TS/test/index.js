// String: '', "", ``
// Number: NaN, infinity, 10, 0.5, 0.0001, -50, 4e10
// Boolean: true, false
var isBirthdayData = true;
var ageData = 40;
var userNameData = 'John';
function logBrtMsg(isBirthday, userName, age) {
    if (isBirthday) {
        console.log("Congrats ".concat(userName, ", age: ").concat(age + 1));
    }
}
function logBrtMsg2(isBirthday, userName, age) {
    if (isBirthday) {
        return "Congrats ".concat(userName, ", age: ").concat(age + 1);
    }
    else {
        return 'Error';
    }
}
var arrowlogBrtMsg = function (isBirthday, userName, age) {
    if (isBirthday) {
        return "Congrats ".concat(userName, ", age: ").concat(age + 1);
    }
    else {
        return 'Error';
    }
};
logBrtMsg(isBirthdayData, userNameData, ageData);
logBrtMsg2(isBirthdayData, userNameData, ageData);
arrowlogBrtMsg(isBirthdayData, userNameData, ageData);
