// 1. Bir reqem daxil edirsiniz ve hemin reqeme uygun olan ayin adini qaytarir, meselen 5 daxil olunsa function "May" return etmelidir, eger 12-den boyuk ve ya menfi olan bir deyer daxil olunsa invalid input return etmelidir.
// 2. Prompt-dan 2 dəyər qəbul edirsiniz. biri bir simvoldur, biri isə bir rəqəm və nəticədə həmin rəqəm sayı qədər simvol-u ekrana çap etməlidir. Məsələn, inputlar: b ve 5 daxil olunubsa, nəticə bbbbb olmalıdır.
// 3. Daxil olunmuş ədədin mərtəbələrinin cəmini qaytaran alqoritm yazın. Məsələn: 125 daxil olunarsa, nəticə 1+2+5=>8 qaytarmalıdır.
// 4. Bir alqoritm yazın, bir ədəd qəbul edir ve hemin ədədin perfect number olub-olmamasini yoxlayir. Perfect number - ededin ozunden bashqa butun bolenlerinin cemin ededin ozune beraberdir-se o zaman eded perfect number hesab olunur. Meselen 6 -->  1+2+3 =  6, demeli 6 perfect number-dir. (perfect numbers - 6, 28, 496, 8128, and 33550336)
// 5. Daxil olunan ədədin polindrome olub-olmamasını yoxlayan alqoritm yazın. Polindrome ədədlər soldan-sağa və sağdan-sola eyni olan ədədlərdir. Məsələn: 121, 4554, 12321 etc. Əgər polindrome-dursa true çap olunsun, əks halda isə false.
// 6. Listdəki sadə ədədlərin ədədi ortasını qaytaran bir alqoritm yazın. Məsələn: [3,7,9,4,24,25,8]; bu listdəki sadə ədədlərin ədədi ortasını hesablayıb qaytarılmalıdır.
// 7. Listdəki ən böyük və ən kiçik element-lərin ədədi ortasını tapıb qaytaran alqoritm yazın. Math objectindən istifadə edə bilməzsiniz. Məsələn: [4,2,7,9,3,12,46,32,19]; => min: 2, max: 46 => ededi ortasi (46+2)/2 => 24 qaytarmalıdır.

// 2

// let number = +window.prompt("enter number here..");
// let char = window.prompt("enter char here..");

// let result = "";
// for (let i = 0; i < number; i++) {
//   result += char;
// }

// console.log(result);

// 3

// version 1
// let n = 1567;
// let sumOfDigits = 0;

// while (n > 0) {
//   sumOfDigits += n % 10;
//   n = parseInt(n / 10);
// }
// console.log(sumOfDigits);

// version 2

// let n = 1567;
// let numStr = "" + n;
// let sumOfDigits = 0;
// for (let i = 0; i < numStr.length; i++) {
//   sumOfDigits += Number(numStr[i]);
// }
// console.log(sumOfDigits);

// 4

// let sumOfDividers = 0;
// let number = 496;
// for (let i = 1; i < number; i++) {
//   number % i === 0 ? console.log(i) : null;
//   if (number % i === 0) {
//     sumOfDividers += i;
//   }
// }

// sumOfDividers === number
//   ? console.log(`${number} is PERFECT number`)
//   : console.log(`${number} is NOT PERFECT number`);
// let number = window.prompt("ededi daxil edin");
// let reverse = "";
// for (let i = number.length - 1; i >= 0; i--) {
//   //   console.log(number[i]);
//   reverse += number[i];
// }
// // console.log("reverse" ,reverse)
// if (number === reverse) {
//   console.log(`${number} is polindrome`);
// } else {
//   console.log(`${number} is not polindrome`);
// }

// let n = +window.prompt("Enter number:");
// let originalNumber=n;
// let reverse=0;
// let digit;
// while(n>0){
//     digit=n%10;
//     //digit=1;2;1
//     reverse=reverse*10+digit;//reverse=1,12,121
//     n=parseInt(n/10);//n=12,1,0
// }
// if(originalNumber===reverse){
//     console.log("true");
// }
// else{
//     console.log("false");
// }

// let array = [3, 7, 9, 4, 24, 25, 8];
// let count = 0,
//   sum = 0;

// for (let i = 0; i < array.length; i++) {
//   if (array[i] > 1) {
//     let bool = true;
//     for (let j = 2; j <= Math.sqrt(array[i]); j++) {
//       if (array[i] % j === 0) {
//         bool = false;
//         break;
//       }
//     }
//     if (bool) {
//       sum += array[i];
//       count++;
//     }
//   }
// }

// console.log(`Result: ${sum / count}`);

// let digits = [] ;
// let l = 0 ;
// let answer = true ;
// while(a){ //ədədin rəqəmlərini array içinə  qoyulması
//     digits[l] = a%10 ;
//     a = parseInt(a/10) ;
//     l++ ;
// }
// let j =  digits.length-1 ; ////sonuncu elementin indeksi
// for(let i=0 ; i<j ; i++){ //ədədin rəqəmlərinin muqayisəsi, sağdan və soldan baxaraq gəlirik və fərqli olan tapdıqda cavabı false edirik. Fərqli rəqəm tapılmasa cavab default olaraq true qalır

//     if(digits[i]!=digits[j])
//     answer = false ;
//     j-- ;
// }

// window.alert(answer) ;

const arr = [3, 7, 9, 4, 24, 25, 8];
let sum = 0;
let count = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] <= 1) continue;
  let sade = true;
  for (let j = 2; j < arr[i]; j++) {
    if (arr[i] % j === 0) {
      sade = false;
      break;
    }
  }
  if (sade) {
    count++;
    sum += arr[i];
  }
}

if (count > 0) {
  console.log("ededi orta", sum / count);
} else {
  console.log("sade eded yoxdu");
}

// 7. Listdəki ən böyük və ən kiçik element-lərin ədədi ortasını tapıb qaytaran alqoritm yazın. Math objectindən istifadə edə bilməzsiniz. Məsələn: [4,2,7,9,3,12,46,32,19]; => min: 2, max: 46 => ededi ortasi (46+2)/2 => 24 qaytarmalıdır.
const numbers = [2, 1, 4, 3]; // array of numbers

function findMinElementInArray(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}
function findMaxElementInArray(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}

console.log("MIN", findMinElementInArray(numbers));
console.log("MAX", findMaxElementInArray(numbers));
