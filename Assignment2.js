// Take a number between 1 and 7 and displays the corresponding day of the week

const dayinputs = 6;

switch (dayinputs) {
  case 1:
    console.log("Monaday");
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednsday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("No day");
}

//Menu-Driven Program
const menuItems = ["Roti", "South Meal", "Dosa", "Ice-Cream"];
console.log(menuItems, typeof menuItems);
//console.log(menuItems[1]);
const userInput = 5;
if (userInput == 1) {
  console.log(menuItems[0], "ordered ");
} else if (userInput == 2) {
  console.log(menuItems[1], "ordered ");
} else if (userInput == 3) {
  console.log(menuItems[2], "ordered ");
} else if (userInput == 4) {
  console.log(menuItems[3], "ordered ");
} else {
  console.log("this food is not avilable ");
}

// 4 Season based on the month name and displys the season
const checkSeasonMonth = "July";
//const checkSeasonMonth = "July";

switch (checkSeasonMonth) {
  case "November":
  case "December":
  case "January":
    console.log(`${checkSeasonMonth} is Winter Season`);
    break;
  case "february":
  case "March":
  case "april":
    console.log(`${checkSeasonMonth} is Spring Season`);
    break;
  case "May":
  case "June":
    console.log(`${checkSeasonMonth} is summer season `);
    break;
  case "July":
  case "August":
  case "September":
  case "october":
    console.log(`${checkSeasonMonth} is fall season `);
    break;
  default:
    console.log("Mixed Season");
}

// 5) Wap based on the color of the traffic light show the message
const trafficLight = "pink";

if (trafficLight == "Red") {
  console.log(`${trafficLight} : Stop! traffic Light is Red`);
} else if (trafficLight == "yellow") {
  console.log(`${trafficLight} : Ready Go slow...`);
} else if (trafficLight == "Green") {
  console.log(`${trafficLight} Go!  traffic light is Green`);
} else {
  console.log("Unknown traffic light");
}

// 6 ) Wap to find fav fruite from array

const favFruite = ["Mango", "Banana", "Apple", "Kiwi"];
console.log(favFruite.length);
let myFav = favFruite.includes("Kiwi");
if (myFav == true) {
  console.log("My fav fruite");
} else {
  console.log("Not My fruite");
}

// 7) Create an array of words and extract a subarray containing the first three words

const wordArr = ["Hi", "usha", "ca", "welcome", "to", "techsim", "plus"];
console.log(wordArr.slice(0, 3));

// Develop a program that takes an array of numbers (10, 20, 30, 40, 50) and uses the slice method to extract a subarray containing only the last two numbers.

const numberArr = [10, 20, 30, 40, 50, 70, 89, 90];
console.log(numberArr.slice(numberArr.length - 2));

//3 Write a program that converts a numerical grade (e.g., 85)into a letter grade (A, B, C, D, F) based on the following criteria:
const marks = 77;
switch (true) {
  case marks >= 90:
    console.log("Grade A+");
    break;
  case marks >= 80:
    console.log("Grade A");
    break;
  case marks >= 60:
    console.log("Grade B+");
    break;
  case marks >= 40:
    console.log("Grade B");
    break;
  default:
    console.log("No grade Failed");
}
