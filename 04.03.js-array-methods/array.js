let arr = [
  {
    name: "test",
    key: 1,
  },
  {
    name: "task",
    key: 2,
  },
  {
    name: "tanqo",
    key: 3,
  },
  {
    name: "like",
    key: 4,
  },
  {
    name: "task",
    key: 5,
  },
  {
    name: "trust",
    key: 6,
  },
  {
    name: "test",
    key: 7,
  },
  {
    name: "last",
    key: 8,
  },
  {
    name: "tanqo",
    key: 9,
  },
  {
    name: "elephant",
    key: 10,
  },
  {
    name: "love",
    key: 11,
  },
  {
    name: "small",
    key: 12,
  },
  {
    name: "little",
    key: 13,
  },
];

// 1) "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin (filter)

// 2) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin (forEach)

// 3) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin

// 4) "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.

// 5) "name"-i en uzun olan obyekti tapin

let maxElem = arr[0];
let maxIndex = 0;
arr.forEach((item, index, array) => {
  if (item.name.length > maxElem.name.length) {
    maxElem = item;
    maxIndex = index;
  }
});
// console.log(maxElem);
// console.log(maxIndex ** 2);
// console.log(maxElem.key);

// 6) "name"-i en uzun olan obyektin key'ni tapin

// 7)  "name"-i en uzun olan obyektin indexin kvadratini hesablayin

// 8) "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin. (filter)

// console.log(arr.filter((item) => item.name.length === 4));

// 9)  en boyuk "key" - i olan obyektin "name"-i ni tapin

//first solution
let maxKeyElem = arr[0];
arr.forEach((item) => {
  if (item.key > maxKeyElem.key) {
    maxKeyElem = item;
  }
});

// console.log(maxKeyElem.name);

// second solution

let newArr = [...arr];

newArr.sort((a, b) => b.key - a.key);

// console.log(newArr[0]);
// 10) terkibinde 2 'l' (el) herfi olan obyekt(ler)in index(ler)ini tapin.

// arr.forEach((item, index) => {
//   let count = 0;
//   item.name.split("").forEach((char) => {
//     if (char == "l") {
//       count++;
//     }
//   });

//   if (count === 2) {
//     console.log(index);
//   }
// });

let ress = arr.filter((prod) => {
  return (
    prod.name.indexOf("e", 0) != -1 &&
    prod.name.indexOf("e", prod.name.indexOf("e") + 1) != -1 &&
    prod.name.indexOf(
      "e",
      prod.name.indexOf("e", prod.name.indexOf("e") + 1) + 1 === -1
    )
  );
});

console.log(ress);
// 10) keylərin cəmini tapın

// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//   sum += array[i];
// }

function sumOfKeys(array) {
  let res = array.reduce((sum, item) => {
    // console.log(`${sum} + ${item.key} = ${sum + item.key}`);
    return sum + item.key;
  }, 0);

  return res;
}
function sumOfKeys(array) {
  let res = array.reduce((sum, item) => {
    // console.log(`${sum} + ${item.key} = ${sum + item.key}`);
    return sum + item.key;
  }, 0);

  return res;
}

// console.log(sumOfKeys(arr));
// 11) terkibinde ən az 2 't' herfi olan obyekt(ler)i tapın.

// let res = arr.filter((prod) => {
//   return (
//     prod.name.indexOf("e", 0) != -1 &&
//     prod.name.indexOf("e", prod.name.indexOf("e") + 1) != -1
//   );
// });

let res = arr.filter(
  (item) => item.name.indexOf("t") !== item.name.lastIndexOf("t")
);

console.log(res);
// 12) key'leri 10'dan boyuk ve "name"-i 'l' herfi ile bashlayan obyektleri tapaq

function newArr1(array) {
  return array.filter(
    (element) => element.key > 10 && element.name[0].toLocaleLowerCase() === "l"
  );
}
console.log(newArr1(arr));
// console.log("result: ", res);

const nums = [1, 2, 4, 5, 6];

// let sumOfNums = nums.reduce((sum, item) => sum + item);
let sumOfNums = nums.reduce((sum, item) => sum + item, 0);

// console.log(sumOfNums);

const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

// countries arrayindəki ölkələrin ilk 3 hərfini (hər bir hərf böyük olmalıdır) yeni arrayda yığın

// output: ["FIN", "DEN", "SWE", "NOR", "ICE"];

console.log(countries.map((item) => item.slice(0, 3).toLocaleUpperCase()));
