// alert("hello wold");
//-----------------------------------------------------------------------------
//2. Write a JavaScript function to check whether an `input` is an array or not.
//------------------------------------------------------------------------------
// Test Data :
// console.log(isArray(‘I am a string.)); output- false
// console.log(isArray([1, 2, 4, 0, ‘array’])); output- true
//----------------------------------------------------------------------------
const array = [1, 2, 4, 0, "array"];
const string = "I am a string";
const result = array != string && length >= 0;
const result2 = string != array && length > 0;
console.log(result);
console.log(result2);

//---------------------------------
//3. Find the length of following
//---------------------------------
// a. [5, 12, 8, 130, 44]
// b. ['g','e','e','k','s']
// c. ['shoes', 'shirts', 'socks', 'sweaters']
// d. [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ]
// e. ['Monday', 90, false, undefined, ‘90’, ‘g’, ‘CAT]
//------------------------------------------------------------------------------------

const a = [5, 12, 8, 130, 44];
console.log(a.length);
const b = ["g", "e", "e", "k", "s"];
console.log(b.length);
const c = ["shoes", "shirts", "socks", "sweaters"];
console.log(c.length);
const d = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log(d.length);
const e = ["Monday", 90, false, undefined, 90, "g", "CAT"];
console.log(e.length);

//-----------------------------------------
// 4. Find the element at ( use at, [ ])
//-----------------------------------------
// a. [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday' ] at 3rd
// positions
// b. ['shoes', 'shirts', 'socks', 'sweaters'] at 4th positions
// c. ['Monday', 90, false, undefined, ‘90’, ‘g’, ‘CAT] at 5th positions
// d. ['g', 'e', 'e', 'k', 's'] at 10th position
//-------------------------------------------------------------------

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
console.log(days);
console.log("find element is days 3rd", days[2]);
const cloth = ["shoes", "shirts", "socks", "sweaters"];
console.log(cloth);
console.log("find element is cloth 4th", cloth[3]);
const mix = ["Monday", 90, false, undefined, "90", "g", "CAT"];
console.log(mix);
console.log("find element is mixed 5th", mix.at(4));
const alpha = ["g", "e", "e", "k", "s"];
console.log(alpha);
console.log("find element is alphabet 10th", alpha.at(9));

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
const findIndexIs1 = a8.findIndex((value) => value == 90);
const findIndexIs2 = a8.findIndex((value) => value == true);
console.log(a8);
console.log(`find index is ${findIndexIs}`);
console.log(`find index is ${findIndexIs1}`);
console.log(`find index is ${findIndexIs2}`);
const b8 = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const findIndex2 = b8.findIndex((day) => day == "Thursday");
const findIndex3 = b8.findIndex((day) => day == "Tuesday");
const findIndex4 = b8.findIndex((day) => day == "funday");
const findIndex5 = b8.findIndex((day) => day == "Monday");
console.log(b8);
console.log(`Thursday index is ${findIndex2}`);
console.log(`Tuesday index is ${findIndex3}`);
console.log(`funday index is ${findIndex4}`);
console.log(`Monday index is ${findIndex5}`);

const c8 = ["z", "i", "a", "x", "k", "s"];
const findIndexC8 = c8.findIndex((alphabet) => alphabet == "k");
const findIndexC81 = c8.findIndex((alphabet) => alphabet == "t");
const findIndexC82 = c8.findIndex((alphabet) => alphabet == "a");
console.log(c8);
console.log(`k index is ${findIndexC8}`);
console.log(`t index is ${findIndexC81}`);
console.log(`a index is ${findIndexC82}`);
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
const lastIndex1 = [210, "Sunday", 702, true, null, "90", "vinay", "CAT"];
const lastIndex2 = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const lastIndex3 = ["z", "i", "a", "x", "k", "s"];
const lastIndex4 = [115, 54, 101, -52, -10, 0.56, 5, 12, 8, 130, 44];
const lastIndex5 = ["shoes", "shirts", "socks", "sweaters"];
console.log(lastIndex1);
const answer1 = lastIndex1.lastIndexOf("vinay");
const answer2 = lastIndex1.lastIndexOf(null);
const answer3 = lastIndex1.lastIndexOf("Ajay");
console.log("this is value of last index", answer1);
console.log("this is value of last index", answer2);
console.log("this is value of last index", answer3);
console.log(lastIndex2);
const answer11 = lastIndex2.lastIndexOf("Tuesday");
const answer22 = lastIndex2.lastIndexOf("TuesDay");
const answer33 = lastIndex2.lastIndexOf("Funday");
const answer44 = lastIndex2.lastIndexOf("Wednesday");
console.log(`this is value of last index ${answer11}`);
console.log(`this is value of last index ${answer22}`);
console.log(`this is value of last index ${answer33}`);
console.log(`this is value of last index ${answer44}`);
console.log(lastIndex3);
const answerA = lastIndex3.lastIndexOf("k");
const answerB = lastIndex3.lastIndexOf("t");
const answerC = lastIndex3.lastIndexOf("z");
console.log(
  `1st value last index of ${answerA} 2nd value last index of ${answerB} 3nd value last index of ${answerC}`
);
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

const includes = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const includes2 = [101, -52, -10, 0.56, 5];
console.log(includes);
const inValue = includes.includes("Sunday");
const inValue1 = includes.includes("wednesday");
const inValue2 = includes.includes("Friday");
console.log(inValue, inValue1, inValue2);
console.log(includes2);
const inNum1 = includes2.includes(5);
const inNum2 = includes2.includes(8);
const inNum3 = includes2.includes("10");
const inNum4 = includes2.includes(100 + 1);
const inNum5 = includes2.includes(10 - 5);
console.log(inNum1, inNum2, inNum3, inNum4, inNum5);
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
