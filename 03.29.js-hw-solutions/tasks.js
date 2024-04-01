//1) printFullName adında funksiya yaradırsız və 2 parameter qəbul edir (firstName: "lorem", lastName: ipsum)
// console.log(printFullName()) // I am jhon doe

function printFullName(firstName, lastName) {
  return `I am ${firstName} ${lastName}`;
}

console.log(printFullName("jhon", "doe"));

// 2) daxil edilən ədədin kvadratını return edən funksiya yazın

function square(number) {}

console.log(square(5)); //25

//3) 4 funksiya yazın. Hər biri 2 parametr qəbul etsin və riyazi əməlləri yerinə yetirsin.

console.log(sum(2, 3)); // 5
console.log(multiply(2, 3)); //6
console.log(subtruct(2, 3)); //-1
console.log(divide(2, 3)); // 0,666666

//4) Elə bir funksiya yazın ki, 3 parametr qəbul etsin, 2 ədəd və 1 ədəd operator. Operatora uygun nəticəni return etsin.

console.log(calculator(2, 5, "+")); //7
console.log(calculator(2, 5, "*")); //10
console.log(calculator(2, 5, "/")); //0.4
console.log(calculator(2, 5, "-")); //-3

// 5) arrayın ilk və son elementinin cəmini return edən function yazın

// const getSum = (array) => {
//   ...
// };

console.log(getSum([1, 2, 3])); // 4
console.log(getSum([80, 5, 58, 17, 100])); // 180
console.log(getSum([15, -500, 0, 50])); //65

//6) arrayın bütün elementlərinin cəmini qaytaran funksiya yazın

// 7) arrayin daxilindəki max elementi return edən funksiya yazın

// 8)

// 8.1 filterEmployees adında funksiya yaradın, parameter kimi bir array alsın və salary > 60000 olan objectləri return etsin

// 8.2 department IT olanlari tapin

const employees = [
  { name: "Jamil", salary: 50000, department: "IT" },
  { name: "Jale", salary: 60000, department: "HR" },
  { name: "Bayram", salary: 55000, department: "IT" },
  { name: "Sahil", salary: 75000, department: "HR" },
  { name: "Maryam", salary: 65000, department: "IT" },
  { name: "Elnara", salary: 80000, department: "HR" },
  { name: "Davud", salary: 70000, department: "IT" },
];

function filterEmployees(arr) {
  let filtered = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].salary > 60000) {
      filtered.push(arr[i]);
    }
  }

  return filtered;
}

// console.log(filterEmployees(employees));

// 9) verilmiş ədədin array'in elementləri arasında olub olmadığını müəyyən edən function yazın

// ex: function findElement(arr, number) {
//   ...
// }

console.log(findElement([33, 28, 45, 17], 45)); // 45 array elemenlərindən biridir
console.log(findElement([33, 28, 45, 17], 38)); // 38 array elementləri arasında yoxdur
console.log(findIndex(["a", "g", "y", "d"], "d")); // d array elementərindən biridir

// 10. let sampleNews = `As software developers, the natural tendency is to start developing applications based on your own
// hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes,
// and new features happen.`;

// task: sampleNews  mətnində olan boşluqların sayını təyin edən proqram yazın.

// 11. Daxil edilən iki arrayi birləşdirən funksiya yazın.
// console.log(concatArray([1,2,3,4,5],[6,7,8,9]))
// Expected Output:
// [1,2,3,4,5,6,7,8,9]

// 12. Bir funksiya yazın 2 parametr qəbul etsin. 2 ci parametr 1ci parametr qədər array-ə yazılsın.
// console.log(array_filled(6, 0));
// Expected Output:
// [0, 0, 0, 0, 0, 0]

// // 13. Bir funksiya yazın , 3 parametr qəbul etsin.Birincisi array olsun ikinci və rəqəm arraydəki elementin hal-hazırda olduğu mövqeni,
// 3cü isə hansı mövqeyə hərəkət etdirməli olduğunuzu göstərsin.Beləliklə arrayın elementlərini bir yerdən başqa yerə hərəkət etdirin.

// Məsələn:
// Expected Output:
[20, 30, 10, 40, 50];

function move(arr, index, shift) {
  let newArr = [];

  
  return newArr;
}

console.log(move([10, 20, 30, 40, 50], 0, 2));

// 14. Bir funksiya yazın 2 parametr qəbul etsin, birinci başlanğıcı ikinci sonu göstərsin. Siz isə arada qalan rəqəmləri doldurun.
// Məsələn:
// console.log(range(1, 4));
// Expected Output:
// [1, 2, 3, 4]
