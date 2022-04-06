// alert("hello wold");
//-----------------------------------------------------------------------------
//2. Write a JavaScript function to check whether an `input` is an array or not.
//------------------------------------------------------------------------------
// Test Data :
// console.log(isArray(‘I am a string.)); output- false
// console.log(isArray([1, 2, 4, 0, ‘array’])); output- true
//----------------------------------------------------------------------------

//---------------------------------
//3. Find the length of following
//---------------------------------
// a. [5, 12, 8, 130, 44]
// b. ['g','e','e','k','s']
// c. ['shoes', 'shirts', 'socks', 'sweaters']
// d. [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]
// e. ['Monday', 90, false, undefined, ‘90’, ‘g’, ‘CAT]
//------------------------------------------------------------------------------------

// const a = [5, 12, 8, 130, 44];
// console.log(a.length);
// const b = ["g", "e", "e", "k", "s"];
// console.log(b.length);
// const c = ["shoes", "shirts", "socks", "sweaters"];
// console.log(c.length);
// const d = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// console.log(d.length);
// const e = ["Monday", 90, false, undefined, 90, g, CAT];
// console.log(e.length);

//-----------------------------------------
// 4. Find the element at ( use at, [ ])
//-----------------------------------------
// a. [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ] at 3rd
// positions
// b. ['shoes', 'shirts', 'socks', 'sweaters'] at 4th positions
// c. ['Monday', 90, false, undefined, ‘90’, ‘g’, ‘CAT] at 5th positions
// d. ['g', 'e', 'e', 'k', 's'] at 10th position
//-------------------------------------------------------------------

// const days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];
// console.log(days[2]);
// const cloth = ["shoes", "shirts", "socks", "sweaters"];
// console.log(cloth[3]);
// const mix = ["Monday", 90, false, undefined, "90", "g", "CAT"];
// console.log(mix.at(4));
// const alpha = ["g", "e", "e", "k", "s"];
// console.log(alpha.at(9));

//---------------------------
// 5. Add two array (concat)
//---------------------------
// a. Array1 –> [ 'Sunday', 'Monday']
// Array2 –> [ 'Friday', 'Saturday' ]
// Array3 → ['Tuesday', 'Wednesday', 'Thursday']
// b. [5, 12, 8, 130, 44]
// ['g','e','e','k','s']
//---------------------------------
const array1 = ["Sunday", "Monday"];
const array2 = ["Friday", "Saturday"];
const array3 = ["Tuesday", "Wednesday", "Thursday"];
console.log(array1.concat(array3.concat(array2)));

const num = [5, 12, 8, 130, 44];
const alphabet = ["g", "e", "e", "k", "s"];
console.log(num.concat(alphabet));
//----------------------------
// 6. Sort following arrays.
//----------------------------
// a. [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]
// b. [‘z',g','e','e','k','s']
// c. [15, 54, 101, -52, -10, 0.56, 5, 12, 8, 130, 44]
// d. ['shoes', 'shirts', 'socks', 'sweaters']
// e. ['Monday', 90, false, undefined, ‘90’, ‘g’, ‘CAT]
//-----------------------------------------------------------

const newDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log(`The short day is ==> ${newDays.sort()}`);
const newAlpha = ["z", "g", "e", "e", "k", "s"];
console.log(`The sort alphabet is ==> ${newAlpha.sort()}`);
const newNum = [15, 54, 101, -52, -10, 0.56, 5, 12, 8, 130, 44];
console.log(`The sort number is ==> ${newNum.sort()}`);

const newCloth = ["shoes", "shirts", "socks", "sweaters"];
console.log(`The sort cloth is==> ${newCloth.sort()}`);
const newMix = ["Monday", 90, false, undefined, "90", "g", "CAT"];
console.log(newMix.sort());

//--------------------------------
//7. Reverse the following arrays.
//--------------------------------
// a. [210, 'Sunday', 702, true, null, ‘90’, ‘vinay’, ‘CAT]
// b. [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]
// c. [‘z',’i','a','x','k','s']
// d. [115, 54, 101, -52, -10, 0.56, 5, 12, 8, 130, 44]
// e. ['shoes', 'shirts', 'socks', 'sweaters']
//-------------------------------------------------------------------

const a1 = [210, "Sunday", 702, true, null, "90", "vinay", "CAT"];
const b2 = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const c3 = ["z", "i", "a", "x", "k", "s"];
const d4 = [115, 54, 101, -52, -10, 0.56, 5, 12, 8, 130, 44];
const e5 = ["shoes", "shirts", "socks", "sweaters"];

console.log(`a1 revers value is ==> ${a1.reverse()}`);
console.log(`b2 revers value is ==> ${b2.reverse()}`);
console.log(`c3 revers value is ==> ${c3.reverse()}`);
console.log(`d4 revers value is ==> ${d4.reverse()}`);
console.log(`e5 revers value is ==> ${e5.reverse()}`);
//-------------------------------------------
// 8. Find the index in the following arrays.
//--------------------------------------------
// a. [210, 'Sunday', 702, true, null, ‘90’, ‘vinay’, ‘CAT] find index of (90, true, ‘Ajay’)
// b. [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ] find
// index of (‘Thursday’, ‘TuesDay, ‘Funday’, Monday)
// c. [‘z',’i','a','x','k','s']find index of (‘k’, ‘t’, ‘a’)
// d. [115, 54, 101, -52, -10, 0.56, 5, 12, 8, 130, 44] find index of (90, -52,0.56)
// e. ['shoes', 'shirts', 'socks', 'sweaters'] find index of (‘shoes’,’socks’,
// ‘Sweaters’)
//---------------------------------------------------------------------------------

const a8 = [210, "Sunday", 702, true, null, "90", "vinay", "CAT"];
const findIndexIs = a8.findIndex((value) => value == "Ajay");
console.log(`find index is ${findIndexIs}`);
const b8 = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const c8 = ["z", "i", "a", "x", "k", "s"];
const d8 = [115, 54, 101, -52, -10, 0.56, 5, 12, 8, 130, 44];
const e8 = ["shoes", "shirts", "socks", "sweaters"];

//--------------------------------------------------
// 9. Find the last index in the following arrays.
//--------------------------------------------------
// a. [210, 'Sunday', 702, true, null, ‘90’, ‘vinay’, ‘CAT] find last index of (‘vinay’, null,
// ‘Ajay’)
// b. [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ] find
// last index of (‘Tuesday’, ‘TuesDay, ‘Funday’, Wednesday)
// c. [‘z',’i','a','x','k','s']find last index of (‘k’, ‘t’, ‘z’)
// d. [115, 54, 101, -52, -10, 0.56, 5, 12, 8, 130, 44] find last index of (115,
// 54,0.56, 81)
// e. ['shoes', 'shirts', 'socks', 'sweaters'] find index of (‘shoes’,’socks’,
// ‘Sweaters’)
//------------------------------------------------------------------------------------------
// 10. Find the index in the arrays. [314,115, 54, 101, -52, -10, 0.56, 5, 12, 8, 130, 44]
//-------------------------------------------------------------------------------------------
// a. If element > 11
// b. If element * 10 +5 >= 100
// c. If element is less than 0
// d. If element is equal to 8
// e. If element is equal to 11 OR 12
//--------------------------------------------------
// 11. Please verify if following includes in array
//--------------------------------------------------
// a. [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]
// (‘Sunday’, ‘wednesday’, ‘Friday’)
// b. [101, -52, -10, 0.56, 5] if includes → (5, 8, ‘10’, 100+1, 10-5)
//------------------------------------------------
// 12. Please Insert the element at end of array
//------------------------------------------------
// a. [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ] (insert
// ‘Friday’)
// b. [101, -52, -10, 0.56, 5] insert → (15, 8, 10+1)
//-------------------------------------------------
// 13. Please remove the element from end of array
//-------------------------------------------------
// a. [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]
// (remove ‘Saturday’)
// b. [101, -52, -10, 0.56, 5] remove → (5, 0.56)
// --------------------------------------------------
// 14. Please Insert the element at 0 index of array
//---------------------------------------------------
// a. [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ] (insert
// ‘Friday’)
// b. [101, -52, -10, 0.56, 5] insert → (15, 8, 10+1)
// -----------------------------------------------------
// 15. Please remove the element from 0 index of array
// -----------------------------------------------------
// a. ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']; remove
// (‘Jan’, ‘Feb’)
// b. [11, -152, -10, 2.56, -5] remove → (11, -152)
