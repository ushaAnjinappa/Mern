// Array multiplication

const numArr = [10, 20, 30, 40, 26];

numArr.forEach((numbers1) => {
  console.log(numbers1 * 2);
});

// first letter string

const stringArr = ["usha", "is", "good", "girl"];
//let op = stringArr;
function capital() {
  stringArr.forEach((items) => {
    console.log(items[0].toUpperCase());
  });
}

capital();
// Remove Duplicates

function removeDuplicates(arr) {
  return arr.filter((value, index, self) => self.indexOf(value) === index);
}

const arr = [1, 2, 3, 4, 1, 3, 4, 56, 6, 7];
const newarr = removeDuplicates(arr);
console.log(newarr);

//console.log(arr); // 10

// average that takes an array

const array = [1, 2, 3, 4, 45, 8];
let sum = 0;
let avg;
let idx = 0;
function avgNumber(arr) {
  for (let idx = 0; idx < arr.length; idx++);
  {
    sum = sum + arr[idx];
    avg = sum / arr.length;
    console.log(avg);
    console.log(sum);
  }
  return avg;
}

const newresult = avgNumber(arr);
console.log(newresult);

// object practice

const person = [
  {
    name: "usha",
    age: 25,
    city: "davanagere",
  },
  {
    name: "nithin",
    age: 30,
    city: "Banglore",
  },
  {
    name: "Vinu",
    age: 12,
    city: "Harihar",
  },
  {
    name: "guru",
    age: 17,
    city: "Koppala",
  },
];

function printPerson(person) {
  console.log(person);
}

const op = printPerson(person);

function changeCity(city) {
  person.city = city;
}
changeCity("Hyderbad");
console.log(person.city);

// Adults checking

const adult = [
  {
    name: "vaibhav",
    age: 27,
  },
  {
    name: "Ramya",
    age: 16,
  },
  {
    name: "Sakshi",
    age: 19,
  },
  {
    name: "Vrushlai",
    age: 39,
  },
];

const adultage = adult.filter((ages) => ages.age > 18);
console.log(adultage);
