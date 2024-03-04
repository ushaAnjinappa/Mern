// 1 Calculate Area
const calculateArea = (circle) => {
  const pi = 3.24;
  return pi * circle ** 2;
};

console.log(calculateArea(3));

// 2 is even
const isEven = (number) => {
  if (number % 2 === 0) {
    console.log("True");
  } else {
    console.log("False");
  }
  return number;
};
console.log(isEven(100));

// calculate Factorial
const calculateFactorial = (n) => {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * calculateFactorial(n - 1);
  }
};
//return n * calculateFactorial(n - 1);

const op = calculateFactorial(3);
console.log(op);

// reverseArray

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
array.reverse();
console.log(array);

// 2 solutions
// const reverseArray = [];
// let idx = array.length - 1;
// for (let idx = array.length - 1; idx >= 0; idx--);
// {
//   const valueAtindex = array[idx];
//   reverseArray.push(valueAtindex);
// }

// console.log(reverseArray);

// Get Keys
const orders = {
  ordernum: 100,
  orderdate: "12/07/2023",
};

const getkeys = (ordernum) => {
  return Object.keys(orders);
};
console.log(getkeys());

// calculate BMI
const persons = [
  {
    weight: 45,
    height: 5,
  },
];

const calculateBMI = (weight, height) => {
  const resultBMI = weight / (height * height);
  return resultBMI;
};

console.log(calculateBMI(45, 5));

// extract all the strings that contains a

const stringArr = ["hai", "usha", "usha"];
let takea = stringArr.includes("a");
console.log();

//

const employee = [
  {
    name: "Usha",
    age: 25,
    department: "Engineering",
  },
  {
    name: "Asha",
    age: 28,
    department: "Support",
  },
  {
    name: "mani",
    age: 28,
    department: "Engineering",
  },
];
//const empDetails = (fetchdata) => {
const result = employee.filter((dept) => dept.department === "Engineering");
//};

console.log(result);

//console.log(empDetails("Engineering"));
