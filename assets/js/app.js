/*
    projectJavaScript
    08FEB2023 
    v1.1
    #git
*/

/*
    Section 2: JavaScript Language Fundamentals
    Using The Console
*/ 

// alert('Hello World')

// // Log to console
// console.log('Hello World!');                    // string
// console.log(2212);                              // numbers
// console.log(true);                              // boolean #true / #false
// var welcome = 'Hi JavaScript';                  // variable
// console.log(welcome);
// console.log([1,2,3,4]);                         // Array of numbers
// console.log({a:1, b:2});                        // Objects literal
// console.table({a:1, b:2})                       // table

// console.error('This is error');                 // error
// console.clear();                                // clear
// console.warn('This is warning');                // warning

// console.time('Hello');                          // time Identify 
//     console.log('Hello World!');                // start point
//     console.log('Hello World!');
//     console.log('Hello World!');
//     console.log('Hello World!');                // Load Time will display
//     console.log('Hello World!');
//     console.log('Hello World!');
//     console.log('Hello World!');                // end point
// console.timeEnd('Hello')                        // timeEnd


/*
    27MAR2023 
    Section 2: JavaScript Language Fundamentals
    Variables - var, let & const
*/
// // var, let, const
// var name = 'Dinesh B';
// console.log(name);
// // Reassigning
// name = 'Srilatha'
// console.log(name);

// // Init var
// var greeting;
// console.log(greeting);
// greeting = 'Hi there!'
// console.log(greeting);

// // Rules and conventions for variables can include
// // letters, numbers, _, $
// // can not start with number
// //var 1name = 'Dini'

// // if you are using jQuery Object we use $
// var $name = '$ Dinesh';
// console.log($name);

// // for private variables we can use _
// var _name = '_ Dinesh';
// console.log(_name);

// /* Multi word vars */
// // Camel case - Regular Use
// var firstName = "Jhon"; 

// // Underscore
// var first_name = "Sara"; 

// //Pascal case -- 
// // When we get into 
// // Object Oriented Programmings, 
// // Constructive function, and 
// // for ES6 class we should use uppercase 
// var FirstName = 'Maya'; 

// var firstname;


// LET
// let name;
// name = 'Dinesh B';
// console.log(name);
// // Reassigning
// name = 'Srilatha'
// console.log(name);

// CONST 
// const name = 'Dinesh';
// console.log(name);
// Can not be reassign
// name = 'Srilatha';
// Have to assign a value
// const greeting;

// const person = {
//     name: 'Dinesh',
//     age: 30
// }

// person.name = 'Srilatha';
// person.age = 22;

// // console.log(person);

// const numbers = [1,2,3,4,5];
// numbers.push(6,7);
// // we can not declare a brand new array
// // numbers = [1,2,3,4,5,6,7,8];

// console.log(numbers);


// /* PRIMITIVE TYPES */
// // String
// const name = 'Dinesh B'
// console.log(typeof name);

// // Number
// const age = 30;
// console.log(typeof age);

// // Boolean
// const hasKids = true;
// console.log(typeof hasKids);

// // NUll
// const car = null;
// console.log(typeof car);

// // Undefined
// let test;
// console.log(test);

// // Symbol
// const sym = Symbol();
// console.log(sym);

// /* REFERENCE TYPES - Objects */
// //Array
// const hobbies = ['Movie', 'Music']
// console.log(typeof hobbies);

// // Object literal
// const address = {
//     city: 'Bengaluru',
//     state: 'KA'
// }
// console.log(typeof address);

// // Date
// const today = new Date();
// console.log(today);
// console.log(typeof today);


/* Type Conversion */
let val;

// Number to String
val = String(5);
val = String(4+10)
//Bool to String
val = String(true);
// Date to String
val = String(new Date());
// Array to String
val = String([1,2,3,4]);

// toString()
val = (5).toString();
val = (true).toString();

// String to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('Hello');              // Nan(Not a Number)
val = Number([1,2,3,4]);

val = parseInt('100.50');
val = parseFloat('100.30');

// // Output
// console.log(val);
// console.log(typeof val);
// // console.log(val.length);
// console.log(val.toFixed(2));

/* Type Co-version */
const val1 =  String(5);
const val2 = 6;
// const sum = val1 + val2;
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum);