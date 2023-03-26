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

// Log to console
console.log('Hello World!');                    // string
console.log(2212);                              // numbers
console.log(true);                              // boolean #true / #false
var welcome = 'Hi JavaScript';                  // variable
console.log(welcome);
console.log([1,2,3,4]);                         // Array of numbers
console.log({a:1, b:2});                        // Objects literal
console.table({a:1, b:2})                       // table

console.error('This is error');                 // error
console.clear();                                // clear
console.warn('This is warning');                // warning

console.time('Hello');                          // time Identify 
    console.log('Hello World!');                // start point
    console.log('Hello World!');
    console.log('Hello World!');
    console.log('Hello World!');                // Load Time will display
    console.log('Hello World!');
    console.log('Hello World!');
    console.log('Hello World!');                // end point
console.timeEnd('Hello')                        // timeEnd


/*
    27MAR2023 
    Section 2: JavaScript Language Fundamentals
    Variables - var, let & const
*/
// var, let, const
var name = 'Dinesh B';
console.log(name);
name = 'Srilatha'
console.log(name);

// Init var
var greeting;
console.log(greeting);
greeting = 'Hi there!'
console.log(greeting);

// Rules and conventions for variables can include
// letters, numbers, _, $
// can not start with number
//var 1name = 'Dini'

// if you are using jQuery Object we use $
var $name = '$ Dinesh';
console.log($name);

// for private variables we can use _
var _name = '_ Dinesh';
console.log(_name);

/* Multi word vars */
// Camel case - Regular Use
var firstName = "Jhon"; 

// Underscore
var first_name = "Sara"; 

//Pascal case -- 
// When we get into 
// Object Oriented Programmings, 
// Constructive function, and 
// for ES6 class we should use uppercase 
var FirstName = 'Maya'; 

var firstname;


