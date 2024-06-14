 // Task 1
 var myNumber = 10;
 var myString = "Hello, JavaScript!";
 console.log("Value of myNumber:", myNumber);
 console.log("Value of myString:", myString)
 // Task 2
 
 // Task 2.1
 console.log("Numbers from 0 to 10:");
 for (var i = 0; i <= 10; i++) {
     console.log(i);
 }
 // TAsk 2.2
 console.log("First 5 multiples of 3:");
 for (var j = 1; j <= 5; j++) {
     console.log(3 * j);
 }
 // Task 3
 
 // TAsk 3.1
 function addNumbers(num1, num2) {
     return num1 + num2;
 }
 // Task 3.2
 function multiplyNumbers(num1, num2) {
     return num1 * num2;
 }
 
 
 var resultAddition = addNumbers(5, 7);
 console.log("Result of addition:", resultAddition);
 
 
 var resultMultiplication = multiplyNumbers(4, 6);
 console.log("Result of multiplication:", resultMultiplication);