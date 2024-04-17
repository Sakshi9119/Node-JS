//filter

// const ages = [90, 67, 23, 45, 11];
// const result = ages.filter(checkAge);

// function checkAge(age) {
//   return age <= 40;
// }
// console.log(result);

// *******************************

var prompt = require("prompt-sync")();
const age = prompt("Please Enter your age: ");

if (age < 18) {
  console.log("You'll get 30% discount");
} else {
  console.log("No Discount!");
}

// *******************************

var add = (a, b) => a + b;
var result = add(90, 87);
console.log(result);

// *******************************

(function () {
  console.log("Sakshi!");
})();
