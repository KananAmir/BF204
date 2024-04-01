// Function 2 - 2 string qəbul edən bir function yazın və 2 string-dəki ortaq hərflərin sayını return etməlidir.
// Məsələn: alma və salam daxil olunarsa, a,l və m hərfləri, yəni 3 return etməlidir.
// Təkrarlanan hərflər bir dəfə sayılmalıdır. (anonym function)

let a = "alma";
let b = "salam";

const getCommonCharCount = (str1, str2) => {
  let arr = str1.split(""); // [a,b,c,d]

  let res = [];
  for (let i = 0; i < str2.length; i++) {
    if (arr.includes(str2[i]) && !res.includes(str2[i])) {
      //   console.log(str2[i]);
      res.push(str2[i]);
    }
  }

  //   return [...new Set(res)];
  return res;
};

// console.log("bf204".split(""));

console.log(getCommonCharCount(a, b));

// let obj = {
//     a: [],
//     b: {},
//     c: "salam"
// };
// let obj2 = obj;
