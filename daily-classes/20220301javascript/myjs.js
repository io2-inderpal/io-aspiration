// console.log("Hello world");
// console.log(3 ** 3);
// const number = prompt("type any number");
// let num1 = 25;
// console.log(number * num1);
// console.log(Number(number) + 75);

/* If lengths of three sides of a triangle are input through the keyboard
 * write a program to find the area of the triangle using Heron's formula
 * Formula:
 *  semi-perimeter = s =(a + b + c)/2
 * Area = √s(s−a)(s−b)(s−c)
 */

/**
* 2.
* Write  program to receive Cartesian co-ordinates (x,y) of a point and convert thm into
* into polar co-ordinates (r,Φ)
* 
* //calculate the value of r
   r = sqrt(x*x + y*y);
   //calculate the value of phi
   //for tan inverse we use atan(value)
   phi = atan(y/x);
*/

/**
 * 3. Write a program to receive values of latitude and longitude,
 * in degrees, of two places on the earth and outputs the distance between
 * then in nautical miles. The formula for distance in nautical miles is here
 */

/**
 * 4. The current year and the year in which the employee joined
 * the organisation are entered through the keyboard .
 * If the number of years for which the employee has served
 * the organisation is greater than 3 years then the bonus of
 * Rs.2500/- is given to the employee.
 * If the years of service is not greater than 3,
 * then the program should not do anything.
 */

/**
 * 5. In a company if an employee is paid as under:
 * If his basic salary is less than Rs. 1500,
 * then HRA=10% of basic salary and DA=90% of basic salary.
 * If his salary is either equal to or above Rs. 1500,
 * then HRA = Rs. 500 and DA = 98% of basic salary.
 * If the employee's salary is input through the keyboard
 *  write a program to find his gross salary.
 */

/**
 * 6.if cost price and selling price of an item are input through the keyboard,
 * write a program to determine whether the seller has made profit of incurred loss.
 * Also determine how much profited he made or loss he incurred
 */
// const cost = prompt("Enter cost price :");
// const sell = prompt("Enter selling price :");

// if (sell < cost) {
//   console.log("The shopkeeper is in loss with", cost - sell + "Rs.");
// } else if (cost < sell) {
//   console.log("The shopkeeper is in profit with", sell - cost + "Rs.");
// } else if (cost == sell) {
//   console.log("No profit-No loss");
// }

/**
 * 7. Any integer is input through the keyboard. Write program to find out
 * whether it is an odd Number or even Number
 */
//  const num = prompt('Enter number :');
// if(num % 2 == 0){
//   console.log(num, 'is Even number')
// } else{
//   console.log(num, 'is odd number')
// }

/**
 * 8. Any year is input through the keyboard. Write a program to determine whether
 * the year is leap year or not.
 * (Hint: use the %(modulus) operator)
 */
// const year = prompt("type the year");
// if (year % 4 == 0) {
//   console.log(year, "is the leap year");
// } else {
//   console.log(year, "not a leap year");
// }

/**
 * 9. A five-digit number is entered through the keyboard. Write a program to obtain
 * the reverse number and determine whether the original and reverse numbers are equal or not.
 *
 */

/**
 * 10. If the ages of Ram, Shyam and Ajay are input through the keyboard,
 * Write a program to determine the youngest of the three.
 */
// const Ram = prompt("Enter age of Ram :");
// const Sham = prompt("Enter age of shaam :");
// const Ajay = prompt("Enter age of Ajay :");
// if (Ram < Sham && Ram < Ajay) {
//   console.log("Ram is younger of all and his age is:", Ram);
// } else if (Sham < Ram && Sham < Ajay) {
//   console.log("Sham is younger of all and his age is:", Sham);
// } else {
//   console.log("Ajay is younger of all and his age is:", Ajay);
//  }

/**
 * 11. Write a program to find the triangle is valid or not, when the three angle of a triangle
 * entered through the keyboard. A triangle is valid if all the three angles is equal to 180 degrees.
 */
// const angle1 = prompt("Enter angle 1 of Triangle:");
// const angle2 = prompt("Enter angle 2 of Triangle:");
// const angle3 = prompt("Enter angle 3 of Triangle:");

// if (Number(angle1) + Number(angle2) + Number(angle3) >= 180) {
//   console.log(
//     "This is a valid Triangle with",
//     angle1,
//     angle2,
//     angle3,
//     "total value is",
//     Number(angle1) + Number(angle2) + Number(angle3) + "degree"
//   );
// } else {
//   console.log(
//     "This is not a valid Triangle with",
//     angle1,
//     angle2,
//     angle3,
//     "total value is",
//     Number(angle1) + Number(angle2) + Number(angle3) + "degree"
//   );
// }

/**
 * 12. Write a program to find the absolute value of a number entered through the keyboard.
 *
//  */
// const number = prompt("Enter a number:");

// if (number > -1) {
//   console.log("The absolute value of", number, "is", number * 1);
// } else {
//   console.log("The absolute value of", number, "is", number * Number(-1));
// }

/**
 * 13. The length and breadth of any triangle entered through the keyboard.
 * Write a program to find if the area of triangle is greater then perimeter of rectangle
 */
// const b = prompt("Enter breadth or base:");
// const l = prompt("Enter width or height:");

// const areaOfTri = (b * l) / 2;
// const periOfRec = 2 * (Number(b) + Number(l));

// if (areaOfTri > periOfRec) {
//   console.log(
//     "Area of triangle",
//     areaOfTri,
//     "is greater then Perimeter of Rectangle",
//     periOfRec
//   );
// } else {
//   console.log(
//     "Area of triangle",
//     areaOfTri,
//     "is less then Perimeter of Rectangle",
//     periOfRec
//   );
// }

/**
 * 14. Given three points (x1, y1)(x2, y2)  and (x3, y3) write a program to check
 * if all the three points fall on one straight line
 */

/**
 * 15. Given a point (x,y) write a program to find out if it lies on the x-axis, Y-axis or on the origin
 */
// const x = prompt("Enter x:");
// const y = prompt("Enter y:");

// if (x == 0 && y == 0) {
//   console.log(" You are on the origin with", x, y);
// } else if (x == 0 && y >= 0) {
//   console.log("You are on X Axis:", x, y);
// } else if (x >= 0 && y == 0) {
//   console.log("You are on Y Axis:", x, y);
// } else if (x >= 0 && y >= 0) {
//   console.log("You are not on any Axis:", x, y);
// } else {
//   ("not a valid number");
// }
