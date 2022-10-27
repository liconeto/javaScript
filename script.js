
// =======================================================================
//                              VARIABLES
// =======================================================================



// ================================== 1 ==================================
// In this simple exercise we declare a variable called num and assign it a value of 5. 
// Then we try to log the value of the variable using the console.log() method.
// But, the console.log() method contains a small mistake. If you try the run the code, you will see an error message.
// Fix the mistake and run the code again.
console.log("*************** Assignment 1 ***************")
const numberOne = 5;
console.log(numberOne); //The was different!
console.log("********************************************")

// ================================== 2 ==================================
// This exercise is very similar to the previous one. 
// We declare a variable called num, assign it a value of 5, and try to log it. 
// But again, we introduced a small mistake. Fix the code and run it.
console.log("*************** Assignment 2 ***************")
const numberTwo = 5;        //The variable name was wrong 
console.log(numberTwo);
console.log("********************************************")

// ================================== 3 ==================================
// In this exercise we practice how to declare a new variable and how to assign it a number. 
// The console.log() statement below attempts to log a variable named num.
// Declare a variable with this name and assign it a number of your choice. 
// Run the code to see if the number is being logged.
console.log("*************** Assignment 3 ***************")
const numberTree = 11;
console.log('The value of num is: ' + numberTree);
console.log("********************************************")

// ================================== 4 ==================================
// The code below first declares a variable named text with a string value hello. 
// Then, a new value bye is assigned. Finally, the variable is logged.
// But, the code will not work like that. Find the mistake and fix it. Execute the corrected code.
console.log("*************** Assignment 4 ***************")
let textOne = 'hello'; //
textOne = 'bye';
console.log(textOne);
console.log("********************************************")

// ================================== 5 ==================================
// Here again, we want to assign a new value to a variable that we previously declared. 
// Again, the code will not work the way it is. Find the mistake and fix it. Execute the corrected code.
console.log("*************** Assignment 5 ***************")
let textTwo = 'hello';
let text = 'hello world';
console.log(text);
console.log("********************************************")



// =======================================================================
//                              OPERATORS
// =======================================================================



// ================================== 6 ==================================
// In the console.log() statement below we use the Equal operator to check whether numOne and numTwo have the same value. 
// Change the code so that the console.log() statement logs true.
console.log("*************** Assignment 6 ***************")
const numFour = 5;
const numFive = 5;
console.log(numFour == numFive);
console.log("********************************************")

// ================================== 7 ==================================
// In the console.log() statement below we use the Not Equal operator to check whether numOne and numTwo have different values. 
// Change the code so that the console.log() statement logs true.
console.log("*************** Assignment 7 ***************")
const numSix = 6;
const numSeven = 7;
console.log(numSix != numSeven);
console.log("********************************************")

// ================================== 8 ==================================
// In the console.log() statement below we use the Greater 
// Than operator to check whether the value of numOne is greater than the value of numTwo. 
// Change the code so that the console.log() statement logs true.
console.log("*************** Assignment 8 ***************")
const numEight = 80;
const numNine = 9;
console.log(numEight > numNine);
console.log("********************************************")

// ================================== 9 ==================================
// In the console.log() statement below we use the Less Than operator to check whether the value of numOne is less
// than the value of numTwo. Change the code so that the console.log() statement logs true.
console.log("*************** Assignment 9 ***************")
const numTen = 10;
const numEleven = 11;
console.log(numTen < numEleven);
console.log("********************************************")

// ================================== 10 ==================================
// In the console.log() statement below we use the Greater Than Or Equal operator to check whether the value of
// numOne is greater than or equal the value of numTwo. 
// It also checks whether the value of numTwo is greater than or equal the value of numThree. 
// Change the code so that both expressions in the console.log() statement logs true.
console.log("*************** Assignment 10 ***************")
const numTwelve = 16;
const numThirteen = 15;
const numFourteen = 14;
console.log(numTwelve >= numThirteen, numThirteen >= numFourteen);
console.log("********************************************")

// ================================== 11 ==================================
// In the console.log() statement below we use the Less Than operator to check whether the value of
// numOne is less than the value of numTwo. Change the code so that the console.log() statement logs true.
console.log("*************** Assignment 11 ***************")
const numFifteen = 15;
const numSixteen = 16;
console.log(numFifteen < numSixteen)
console.log("********************************************")

// ================================== 12 ==================================
// In the console.log() statement below we use the Greater Than Or Equal operator to check whether the value of
// numOne is greater than or equal the value of numTwo. It also checks whether the value of numTwo is greater than
// or equal the value of numThree. Change the code so that both expressions in the console.log() statement logs true.
console.log("*************** Assignment 12 ***************")
const numFirst = 4;
const numSecond = 4;
const numThird = 2;
console.log( numFirst >= numSecond, numSecond >= numThird)
console.log("********************************************")

// ================================== 13 ==================================
// In the console.log() statement below we use the Less Than Or Equal operator to check whether the value of 
// numOne is less than or equal the value of numTwo. It also checks whether the value of numTwo is less than
// or equal the value of numThree. Change the code so that both expressions in the console.log() statement logs true.
console.log("*************** Assignment 13 ***************")
const numSeventheen = 10;
const numEighteen = 22;
const numNinetheen = 44;
console.log(numSeventheen <= numEighteen, numEighteen <= numNinetheen);
console.log("********************************************")

// ================================== 14 ==================================
// You can chain multiple comparison operators using the logical AND (&&) operator. 
// In the code below, result will only have the value true if both comparison expressions evaluate to true.
// Adjust the code below such that result will have the value true.
console.log("*************** Assignment 14 ***************")
const numTwenty = 13;
const numTwentyOne = 14;
const result = numTwenty > 12 && numTwentyOne > 12;
console.log(result);
console.log("********************************************")

// ================================== 15 ==================================
// In the code below we calculate the sum of numOne and numTwo with the Addition operator +.
// Then, the console.log() statement checks whether the sum equals 10. 
// Change the code so that the console.log() statement logs true.
console.log("*************** Assignment 15 ***************")
const numTwentyTwo = 6;
const numTwentyThree = 4;
const sum = numTwentyTwo + numTwentyThree;
console.log(sum == 10);
console.log("********************************************")

// ================================== 16 ==================================
// In the code below we calculate the difference of numOne and numTwo with the Substraction operator -.
// Then, the console.log() statement checks whether the difference equals 5.
// Change the code so that the console.log() statement logs true.
console.log("*************** Assignment 16 ***************")
const numTwentyFour = 9;
const numTwentyFive = 4;
const dif = numFour - numFive;
console.log(dif == 5);
console.log("*********************************************")

// ================================== 17 ==================================
// In the code below we calculate the product of numOne and numTwo with the Multiplication operator *. 
// Then, the console.log() statement checks whether the product equals 81. 
// Change the code so that the console.log() statement logs true.
console.log("*************** Assignment 17 ***************")
const numTwentySix = 9;
const numTwentySeven = 9;
const product = numTwentySix * numTwentySeven;
console.log(product == 81);
console.log("********************************************")

// ================================== 18 ==================================
// In the code below we divide numOne by numTwo with the Division operator /.
// Then, the console.log() statement checks whether the quotient equals 9.
// Change the code so that the console.log() statement logs true.
console.log("*************** Assignment 18 ***************")
const numTwentyEight = 81;
const numTwentyNine = 9;
const quotient = numTwentyEight / numTwentyNine;
console.log(quotient == 9);
console.log("********************************************")

// ================================== 19 ==================================
// In the code below we calculate numOne to the power of numTwo with the Exponential operator **.
// Then, the console.log() statement checks whether the result of this calculation equals 8.
// Change the code so that the console.log() statement logs true.
console.log("*************** Assignment 19 ***************")
const numThirty = 2;
const numThirtyOne = 3;
const res = numThirty**numThirtyOne;
console.log(res == 8);
console.log("********************************************")



// =======================================================================
//                              Strings
// =======================================================================



// ================================== 20 ==================================
// In this exercise the existing console.log() statement logs the value of the variable text. 
// The variable text has already been declared with an empty string – as indicated by the two single quotes.
// Fill in the string with some characters and run the code to see if the string is being logged.
console.log("*************** Assignment 20 ***************")
const textThree = 'I am String!';
console.log('The value of text is: ' + textThree);
console.log("********************************************")

// ================================== 21 ==================================
// Here, we have declared 3 variables textOne, textTwo, and textThree. An empty string is assigned to all of them.
// Do you see how in each case different symbols are used to create the string? 
// All three of them are valid methods to create a JavaScript string.
// Fill in all 3 strings with some characters and run the code to see if the values get logged.
console.log("*************** Assignment 21 ***************")
const textFour = 'com aspas simples';
const textFive = "com aspas duplas";
const textSix = `Diferente`;
console.log(textFour, textFive, textSix);
console.log("********************************************")

// ================================== 22 ==================================
// After we have learnt how to create JavaScript strings, we will now connect 2 strings together.
// In the code below we use the Addition (+) operator to concatenate textOne and textTwo. 
// The console.log() statement logs the resulting string. Currently, the result would be HelloWorld.
// Change the code below so that the value of res is Hello World
console.log("*************** Assignment 22 ***************")
const textSeven = 'Hello';
const textEight = 'World';
const combined = textSeven + textEight;
console.log(combined);
console.log("********************************************")



// =======================================================================
//                              Conditionals
// =======================================================================


// ================================== 23 ==================================
// In this exercise we will work with our first if-statement. In the code below we declare a variable num with a value 0.
// Then, we have an if-statement. The if-statement consists of a condition – the part inside the parentheses.
// and some code inside a pair of curly braces. The code will assign the variable num a new value 1.
// But it will only run if the condition is met.
// Adjust the condition such that the code inside the curly braces will execute and the console.log() statement logs true.
console.log("*************** Assignment 23 ***************")
let numShift = 0;
if (4 > 2) {
   numShift = 1;

console.log(numShift === 1);
console.log("********************************************")

// ================================== 24 ==================================
// This exercise is very similar to the previous one. But, this time we also have an else statement.
// An else statement is another piece of code – wrapped by curly braces – that only runs if the condition is not satisfied.
// Adjust the condition such that the code inside the else statement will be executed and the console.log() statement logs true.
console.log("*************** Assignment 24 ***************")
let numOrdinal = 0;
if (2 < 1) {
   numOrdinal = 1;
} else {
   numOrdinal = 2;
}
console.log(numOrdinal === 2);
console.log("********************************************")

// ================================== 25 ==================================
// Time to practice what we've learnt so far. In the code below, the if...statement will assign a new value to the variable text.
// But only if its condition is met. Currently, the condition is missing.
// Add any condition that will be satisfied such that the console.log() statement logs true.
console.log("*************** Assignment 25 ***************")

let textShift = 'hello';
if ( textShift == 'hello' ) {
   textShift = textShift + ' world';
}
console.log(textShift === 'hello world');
console.log("********************************************");}