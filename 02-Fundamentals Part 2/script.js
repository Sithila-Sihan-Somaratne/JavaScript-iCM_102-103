'use strict'
//If we active the strict  mode, then, in the console you can see unexcepted errors that you cannot see.
let isAdded = false;
const pass = true;
if(pass)isAdded = true;
if(isAdded)console.log("It's added");
////////////////////////////////////////////////////////////////////////////////////////////////////////
//Functions

function logger() {
    console.log('Logger!');
}
logger();
function numberLogger(num1, num2){
    console.log(num1+num2*num2+num1);
}
numberLogger(5,6);
function sum_minus_multi_divide(number1,number2,number3,number4,number5){
    return (number1+number2-number3*number4/number5);
}
let x = sum_minus_multi_divide(6,0,4,2,8);
console.log(`Number is ${x}`);
const fullName = function(fName, sName){
    console.log(`${fName} ${sName}`);
}
fullName("Sithila Sihan", "Somaratne")
/*Arrow Functions*/
const theName = (fName, sName) => {
    return `${fName} ${sName}`;
}
let Name = theName("Sithila Sihan", "Somaratne");
console.log("My full name is "+Name);
const isPrime = (number) =>{
    if(number > 0 && number > 1){
        if(number % 2 == 0 && number != 2){
            console.log("Number is not prime");
        }else{
            console.log("Number is  prime")
        }
    }
}
isPrime(2);