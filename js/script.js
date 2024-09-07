const userName = "negin";
const age = 15;
let result;

if (age >= 18) {
  result = `${userName} can drive.`;
} else {
  result = `${userName} can not drive. you must wait ${18 - age} year's more.`;
}

console.log(result);
