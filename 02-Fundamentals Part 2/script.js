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
function sum_minus_multi_divide(num1,num2,num3,num4,num5){
    return "Number is "+(num1+num2-num3*num4/num5);
}
sum_minus_multi_divide(6,0,4,2,8);