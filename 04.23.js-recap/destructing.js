const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

const products = [
  {
    id: 1,
    title: "Smartphone",
    description: "A high-end smartphone with the latest features.",
    price: 799.99,
    count: 2,
  },
  {
    id: 2,
    title: "Laptop",
    description: "Powerful laptop with a large screen and fast processor.",
    price: 1299.99,
    count: 7,
  },
  {
    id: 3,
    title: "Coffee Maker",
    description: "An automatic coffee maker with a built-in grinder.",
    price: 99.99,
    count: 3,
  },
  {
    id: 4,
    title: "Headphones",
    description: "Wireless over-ear headphones with noise-cancellation.",
    price: 199.99,
    count: 4,
  },
  {
    id: 5,
    title: "Smart TV",
    description: "55-inch 4K Smart TV with streaming apps built-in.",
    price: 699.99,
    count: 3,
  },
];

// console.log("hello");

// array destructing

const students = [
  "aytac",
  "aysel",
  "zakir",
  "aydan",
  "farid",
  "ilvin",
  "ilqar",
];

// let first = students[0];
// let second = students[1];

let [a, b, c, ...restStudents] = students;

console.log(a, b, c);
console.log(restStudents);
// object destructing

let first = 4;
let second = 3;
// let temp = first;
// first = second;
// second = temp;

[first, second] = [second, first];

console.log(first);

const studentObj = {
  firstName: "Aysel",
  lastName: "Javadjada",
  uniInfo: {
    uniName: "BDU",
    gpa: 3.5,
    skills: ["html", "css", "js"],
  },
};

// let fn = studentObj.firstName;
// let ln = studentObj.lastName;

// let { firstName, ...restStudent } = studentObj;
// let { firstName: ad, ...restStudent } = studentObj;
// let { firstName: ad, uniInfo } = studentObj;
let {
  firstName: ad,
  uniInfo: { skills },
} = studentObj;

console.log(ad);
console.log(skills);
