// function getCaptalizeWord(str) {
//   str = str.split(" ");

//   for (i = 0; i < str.length; i++) {
//     str[i] = str[i][0].toUpperCase() + str[i].slice(1);
//   }

//   return str.join(" ");
// }

// console.log(getCaptalizeWord("Biz kenan mellimin telebeleriyik"));

let strstr = "lorem impsum dosgrgdre";
function maxLengthWord(str) {
  let arr = str.split(" "); // ['lorem' , 'impsum' , dore]
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > max.length) {
      max = arr[i];
    }
  }
  return max;
}

console.log(maxLengthWord(strstr));

// # daxil edilən string daxilində sadecə unique simvollari saxlayan function yazin

function selectOnlyUniqueChars(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      result.push(str[i]);
    }
  }

  return result;
}

console.log(selectOnlyUniqueChars("aabcccdeeee"));

let mixArray = [
  2,
  undefined,
  9,
  -5,
  -4,
  "AzerBayCan",
  true,
  12,
  null,
  "Baku",
  NaN,
  182,
  "4",
];

function findAllNums(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    // arr[i] * 1 === arr[i] && res.push(arr[i]);

    arr[i] == +arr[i] && res.push(arr[i]);
  }

  return res;
}

console.log(findAllNums(mixArray));

let countries = ["azerbaijan", "Albania", "norwey", "canada", "america"];

let newArr = [];
// for (let i = 0; i < countries.length; i++) {
//   if (
//     countries[i][0] === "a" &&
//     countries[i][countries[i].length - 1] === "a"
//   ) {
//     newArr.push(countries[i]);
//   }
// }
for (let i = 0; i < countries.length; i++) {
  if (
    countries[i].toLocaleLowerCase().startsWith("a") &&
    countries[i].toLocaleLowerCase().endsWith("a")
  ) {
    newArr.push(countries[i]);
  }
}

console.log(newArr);

const students = [
  { name: "Ali", scores: [90, 85, 92] },
  { name: "Davud", scores: [100, 100, 100] },
  { name: "Mammal", scores: [75, 80, 85] },
  { name: "Camil", scores: [90, 95, 85] },
];

//   #studentlərin ortalama score'nu yeni bir arrayda yığın

let studentResults = [];
for (let i = 0; i < students.length; i++) {
  let sum = 0;
  for (let j = 0; j < students[i].scores.length; j++) {
    sum += students[i].scores[j];
  }
  studentResults.push({ ...students[i], average: sum / students[i].scores.length });
}

console.log(studentResults);
