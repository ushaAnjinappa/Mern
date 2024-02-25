//1 What is the result of typeof(42)

typeof 42; // No result

// evaluate the expression 5 +"5" and explain the result .
const s1 = 5;
const s2 = 6;
console.log(s1 && s2); // Output is 55 ->

//what does the expression true && false evaluate to ?

const t1 = true;
const t2 = false;
console.log(t1 && t2); // False

// what is the result of !true
//False;

//2][1,2,3] and [4,5,6] combine these 2 array and console a new array
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const newArray = [...arr1, ...arr2];

console.log(newArray);

//3 create an array with elements 1,2 and 3 , use an array method tp add 4 to the end of the array

const arrElements = [1, 2, 3];
arrElements.push(4);
console.log(arrElements);

//4 Given an array [10,20,30,40,50] use an array method to remove last element

const elements = [10, 20, 30, 40, 50];
elements.pop(50);
console.log(elements.length);
//elements.splice()

// create an object car with properties make and model and see their values to "Toyata" and "Camry" , respectively

const carModels = {
  make: "Toyota",
  model: "Camry",
};
carModels["model"] = "corola";
console.log(carModels);
carModels["year"] = 2022;
console.log(carModels);

//6 create an object student with properties name, age ,and grade set the values to name and age to "Alice" and 20 respectively , then write
// conditional statement to check if student has a grade property if it does log the values of student.grade otherwise log "grade not avialable
const studentDetails = {
  name: "alice",
  age: 20,
};
if (studentDetails.age >= 20) {
  studentDetails["Grade"] = "A+";
  console.log(studentDetails);
} else {
  console.log("grade not avilable ");
}

//object person properties name , gender , age then write a constional statement to check if the age property of person is less than 21 if its log "underage "
// otherwise log "adult"

const person = {
  name: "Usha",
  gender: "Female",
  age: 25,
};
if (person.age <= 21) {
  console.log("Your Underage");
} else {
  console.log("Adult");
}

//8 array names containing strings represting names of people write a javascript funstion to check if the array constains the name "john,
//if its dows log "john is in e array otherwise "john is not in the array"

const peoplesname = ["John", "Usha", "Asha", "Mani", "Jasu"];
let find = peoplesname.includes("John");
if (find == true) {
  console.log("John is in array");
} else {
  console.log("John not in array");
}

//9 Temparature Checker
const tempChecker = ["Hot", "moderate", "cold"];
if (tempChecker.includes("Hot") >= 30) {
  console.log("Hot");
} else if (tempChecker.includes("Hot") >= 30) {
}

//10 car with properties make , model and year

const carUpdates = {
  make: "BMW",
  model: "Xtra",
  year: "2010",
};
carUpdates["model"] = "vintage";
if (carUpdates.year <= 2010 && carUpdates.model == "vintage") {
  console.log("modified car object");
} else {
  console.log("no updates ");
}
console.log(carUpdates);
