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
////////////////////////////////////////////////////////////////////////////////////
//Arrays
const friend1 = `Armenia`;
const friend2 = `Azerbaijian`;
const friend3 = `Georgia`;
let friends = [friend1, friend2, friend3];
console.log(friends);
console.log(friends.length);
console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
let friend = new Array(`Danapala`, `Gunapala`, `Somapala`, `Siripala`, `Amara`, ``);
console.log(friend);
friend[4] = `Amarapala`;
console.log(friend);
let setName = document.getElementById('setName');
let newName = document.getElementById('name').value;
friend[5] = newName;
console.log(friend);
//Add Element
friend.push("Weerapala");
//Remove Element
friend.unshift("Dunapala");
console.log(friend);
friend.pop();
console.log(friend);
friend.shift();
console.log(friend);
console.log("Contains Dunapala : "+friend.includes('Dunapala'));
console.log("Contains Danapala : "+friend.includes('Danapala'));
///////////////////////////////////////////////////////////////////////////////////
// Looping Array
for (let i = 0; i < friend.length; i++) {
    console.log("For Loop : "+friend[i]);
}
let j = 0;
while(j!=friend.length){
    console.log("While Loop: "+friend[j]);
    j++;
}
let k = -1;
do {
    console.log("Do-While Loop: "+friend[k]);
    k++;
} while (k!=friend.length);
///////////////////////////////////////////////////////////////////////////////////
//Sorting Arrays
let ar = [52,74,36,58,96,32,56,41];
console.log(ar);

function sortAr(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
           if (array[i]>array[j]) {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
           } 
        } 
    }
    return array;
}
console.log(sortAr(ar));
////////////////////////////////////////////////////////////////////////////////
// Introdution to objects

const vimal = [
    'Vimal',
    'Sanjeewa',
    '23',
    'student'
];
console.log(vimal)
console.log(vimal[0]+" "+vimal[1]+" is "+vimal[2]+" and he is a "+vimal[3]);
const nimal = {
    firstName : 'Nimal',
    lastName : 'Sangeetha',
    age : 23,
    occupation : 'student' 
};
console.log(nimal)
console.log(nimal.firstName+" "+nimal.lastName+" is "+nimal.age+ "and he is a "+nimal.occupation);