//This is a comment
/*This is also a comment*/
//Linking a JavaScript File using <script src="script.js"></script>
////////////////////////////////////////////////////////////////////////////////////////////
// Values and Variables

let name = 'Sithila'; //Let variable
const pi = 3.14; // Const Variable

// console.log() is used to print in the console.
console.log(name); 
console.log(pi);

//This is a block scope!
{
    //var name = 'Sihan'; is wrong! Because there's let name and var name;
    //You can do var a = 0; var a = 1; but you cannot do this with let or const because they cannot be rediclared! 
    var nome = 'Sihan'; // Var variable
    //let nome = 'Sihan'; is wrong!
    //const nome = 'Sihan'; is wrong!
}
console.log(nome)
// Data Types
let surname = 'Somaratne'; //This is a string.
let city = "Milan"; //This is a string too.
console.log(surname+" is a "+typeof(surname)+" and "+city+" is a "+typeof(city));
//String can be defined with '' or "" quotes.
let bool1 = true; 
let bool2 = false; 
console.log(bool1+" is a "+typeof(bool1)+" and "+bool2+" is a "+typeof(bool2));
//Booleans are true or false.
let num = 10;
let number = 10.5;
console.log(num+" is a "+typeof(num)+" and "+number+" is a "+typeof(number));
//Numbers can be like 10 or 10.5
let symbol = Symbol("SSS");
console.log(symbol);
console.log(typeof symbol)
//Symbols are defined with Symbol("and then everyting you want")
let NuLL = null;
let obj = {attribute : "Hi"};
console.log(NuLL+" is a "+typeof(NuLL)+" and "+obj+" is a "+typeof(obj));
//Objects are defined as null and with {attribute : "something"} or like {}
let und = undefined;
console.log(und+" is a "+typeof(und));
//Undefined are known like undefined
let bigInt = BigInt(Number.MAX_SAFE_INTEGER); 
console.log(bigInt+" is a "+typeof(bigInt));
//BigInt are big numbers
//Operators
let x = 10;
console.log("Before...");
console.log(x);
x++; //Increments by 1 : 10+1;
console.log("After...");
console.log(x);
// = vs ==  vs ===
let y = 11; // = is use to assign a value.
console.log(0 == '0'); // It checks whether they are equal for their value
console.log(0 === '0'); // It whether they are equal for their value AND for their datatype