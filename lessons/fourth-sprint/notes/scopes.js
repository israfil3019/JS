//Javascript scopes 

// SCOPES DETERMINES THE ACCESSIBILITY (VISIBILITY) OF VARIABLES 

//Javascript function scope
// in javascript there are 2 scopes

//Local scope
//Global scope

// Javascript has function scopes and each function creates new scopes
// Scope determines the accessibility of these variables

//VARIABLES THAT DEFINED INSIDE THE FUNCTION ARE NOT ACCESSABLE FROM OUTSIDE THE FUNCTION

//Local Javascript Variables

//Variables declared within a javascript function is local to that function
// local variables have function scope which means they are only be accessed from within the function


//Example

// code here can NOT use carName

//function myFunction() {
//  var carName = "Volvo";

// code here CAN use carName

//}



//Since local variables are only recognized inside their functions, variablees with the same na me can be used in different functions

// Local variables are created when a function starts,and deleted when the function is completed


//Global Javascript variables

//A variable declared outside of a function becomes global
// and they are available to use from anywhere of the cod

var carName = "Volvo";

// code here can use carName

function myFunction() {

    // code here can also use carName

}



// if you assign a value to a variable that has not been declared, it will automatially become global variable

myFunction();

// code here can use carName

function myFunction() {
    carName = "Volvo";
}


//Do NOT create global variables unless you intend to.

//Your global variables (or functions) can overwrite window variables (or functions).
//Any function, including the window object, can overwrite your global variables and functions.


///The Lifetime of JavaScript Variables
//The lifetime of a JavaScript variable starts when it is declared.

//Local variables are deleted when the function is completed.

//In a web browser, global variables are deleted when you close the browser window (or tab).



// Function Arguments
// Function arguments (parameters) work as local variables inside functions



//Javascript Hoisting


//Hoisting is javascripts default behavior of moving declarations to top

// thanks to execution context

//JAVASCRIPT DECLARATIONS ARE HOISTED

//In JavaScript, a variable can be declared after it has been used.

//In other words; a variable can be used before it has been declared.

// Because Javascript reads the whole code before executing so that allows it to recognize the variables before declarations
//thats what we call execution context

//But when it comes to let and const keyword, yes they are hoisted as well
//BUT THEY ARE NOT INITIALIZED
//  THEY ARE IN TEMPORAL DEAD ZONE FROM THE START OF THE BLOCK UNTIL DECLARED


//UNTIL THE INTERPRETER REACHES THE VARIABLE (NO MATTER WHICHONE IT IS)
// IT WILL BE UNDEFINED

//ONLY DECLARATIONS ARE HOISTED NOT THE VALUES SO THEY BE UNDEFINED

// SO DECLARE YOUR VARIABLES AT TOP, IT WILL SAVE YOU SO MUCH TIME





//Javascript this Keyword

//Example
var person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}


    //What is "this" keyword

    //The javascript this keyword refers to the object it belongs to
    // it has different values depending on where it is used

    // IN A METHOD , this refers to  the owner object

    // ALONE, this keyword refers to the global object

    //In a function, this refers to the global object

    //In an event, this refers to the element that recieved the element 

    // Methods like call(), and apply() can refer this to any object







//EXPLICIT FUNCTION BINDING

//The call() and apply() methods are predefined JavaScript methods.

//They can both be used to call an object method with another object as argument.


//EXAMPLE
var person1 = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}
var person2 = {
    firstName: "John",
    lastName: "Doe",
}
person1.fullName.call(person2);  // Will return "John Doe"

//when calling person1.fullName with person2 as argument, this will refer to person2, even if it is a method of person1