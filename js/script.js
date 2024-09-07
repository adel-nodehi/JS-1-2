// type Conversion

// console.log(Number("20"));
// console.log(String(20));

// type Coercion

// console.log("hello" + 23); // "hello" + "23"
// console.log(typeof ("12" + 11));

// const userInput = prompt("enter a number");

// console.log(typeof userInput, userInput);

// if (userInput) {
//   console.log(userInput);
// } else {
//   console.log("user input noting");
// }

// console.log(Boolean(0));
// console.log(Boolean(""));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean(NaN));

// if ("0") {
//   console.log(true);
// } else {
//   console.log(false);
// }

const firstName = "shiva";
const age = 20;
const isAsleepy = false;

const blockList = "adel";

if (age >= 18 && !isAsleepy && firstName !== blockList) {
  console.log(`${firstName} can drive`);
} else {
  console.log(`${firstName} can not drive`);
}
