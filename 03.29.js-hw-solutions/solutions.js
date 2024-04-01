//1) printFullName adında funksiya yaradırsız və 2 parameter qəbul edir (firstName: "lorem", lastName: ipsum)
// console.log(printFullName()) // I am Gulputa Malikova

function printFullName(firstName = "lorem", lastName = "ipsum") {
  return `I am ${firstName} ${lastName}`;
}

console.log(printFullName("gulputa", "malikova"));

//2) 4 funksiya yazın. Hər biri 2 parametr qəbul etsin və riyazi əməlləri yerinə yetirsin.

console.log(sum(2, 3)); // 5
console.log(multiply(2, 3)); //6
console.log(subtruct(2, 3)); //-1
console.log(divide(2, 3)); // 0,666666

//3) Elə bir funksiya yazın ki, 3 parametr qəbul etsin, 2 ədəd və 1 ədəd operator. Operatora uygun nəticəni return etsin.

function calculator(num1, num2, operator) {
  let result;
  if (operator === "+") {
    result = num1 + num2;
  } else if (operator === "*") {
    result = num1 * num2;
  }

  return result;
}

console.log(calculator(2, 5, "+")); //7
console.log(calculator(2, 5, "*")); //10
console.log(calculator(2, 5, "/")); //0.4
console.log(calculator(2, 5, "-")); //-3

// 4) filterEmployees adında funksiya yaradın, parameter kimi bir array alsın və salary > 60000 olan objectləri return etsin
const employees = [
  { name: "Jamil", salary: 50000, department: "IT" },
  { name: "Jale", salary: 60000, department: "HR" },
  { name: "Bayram", salary: 55000, department: "IT" },
  { name: "Sahil", salary: 75000, department: "HR" },
  { name: "Maryam", salary: 65000, department: "IT" },
  { name: "Elnara", salary: 80000, department: "HR" },
  { name: "Davud", salary: 70000, department: "IT" },
];

// # arrayın ilk və son elementinin cəmini return edən function yazın

// const getSum = (array) => {
//   ...
// };

console.log(getSum([1, 2, 3])); // 4
console.log(getSum([80, 5, 58, 17, 100])); // 180
console.log(getSum([15, -500, 0, 50])); //65

// --------------------------------------------------------------------------------------------------

// # verilmiş ədədin array'in elementləri arasında olub olmadığını müəyyən edən function yazın

// ex: function findElement(arr, number) {
//   ...
// }

console.log(findElement([33, 28, 45, 17], 45)); // 45 array elemenlərindən biridir
console.log(findElement([33, 28, 45, 17], 38)); // 38 array elementləri arasında yoxdur
console.log(findIndex(["a", "g", "y", "d"], "d")); // d array elementərindən biridir
