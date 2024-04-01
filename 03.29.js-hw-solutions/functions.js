function sayHi(username) {
  return `Hello ${username}`;
}

console.log(sayHi("Lala"));

function sumOfTwoNums(a, b) {
  let result = a + b;
  return result;
}

sumOfTwoNums(2, 4);
//callback
//high order functions

function mainFun(func) {
  console.log(func());
}

mainFun(() => {
  return "CB";
});
// mainFun(function () {});

// mainFun(cb);

// function cb() {
//   return "Hi, I am cb function";
// }

const employees = [
  { name: "Jamil", salary: 50000, department: "IT" },
  { name: "Jale", salary: 60000, department: "HR" },
  { name: "Bayram", salary: 55000, department: "IT" },
  { name: "Sahil", salary: 75000, department: "HR" },
  { name: "Maryam", salary: 65000, department: "IT" },
  { name: "Elnara", salary: 80000, department: "HR" },
  { name: "Davud", salary: 70000, department: "IT" },
];

// console.log(employees[0]["name"]);

// console.log(employees.filter(test));

// function test(item, index, array) {
//   //   return item.salary > 60000;
//   console.log(`${index} `);
//   console.log(item);
// }

const numbers = [10, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"]; // array of strings, vegetables

// numbers[numbers.length - 1] = "salam";
// numbers[0] = "hello";
// numbers[numbers.length] = 11;
// numbers.push(11)
// numbers.unshift(11)
numbers.shift()
// numbers.pop();

numbers.length = numbers.length - 1;
console.log(numbers);
