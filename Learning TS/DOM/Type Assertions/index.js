var box = document.querySelector('.box');
box.style; // no error
box === null || box === void 0 ? void 0 : box.classList; // no error
var input = document.querySelector('input');
var someNumber = +input.value;
console.log(someNumber); // 55
var someNumber2 = input.value;
console.log(someNumber2); // 55
console.log(someNumber2 * 2); // 110
var input2 = document.querySelector('input');
