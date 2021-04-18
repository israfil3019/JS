
//Javascript this Keyword

//Example
var person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
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
  
  
  
  
  //This in a method
  //In an object method, this refers to the "owner" of the method.
  
  //At the example on the top of this section, this refers to the person object.
  
  //The person object is the owner of the fullName method.
  
  
  //This alone
  
  // when used alone, the owner is the global object, so this refers to the global object
  
  //In a browser window global object is [object Window]
  
  
  
  // this in function
  //In a JavaScript function, the owner of the function is the default binding for this.
  
  //So, in a function, this refers to the Global object [object Window].
  
  
  //this in a Function (Strict)
  
  //Javascript strict mode does not allow bindings so this is undefined
  
  //this in Event Handlers
  
  //In HTML event handlers, this refers to the HTML element that received the event:
  {/* <button 
  onclick="this.style.display='none'">
    Click 
  </button>
   */}
  
  
  
  //EXPLICIT FUNCTION BINDING
  
  //The call() and apply() methods are predefined JavaScript methods.
  
  //They can both be used to call an object method with another object as argument.
  
  
  //EXAMPLE
  // var person1 = {
  //   fullName: function() {
  //     return this.firstName + " " + this.lastName;
  //   }
  // }
  // var person2 = {
  //   firstName:"John",
  //   lastName: "Doe",
  // }
  // person1.fullName.call(person2);  // Will return "John Doe"
  
  //when calling person1.fullName with person2 as argument, this will refer to person2, even if it is a method of person1
  
  //The JavaScript apply() Method
  //The apply() method is similar to the call() method (previous chapter).
  
  //In this example the fullName method of person is applied on person1:
  
  Example
  var person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  var person1 = {
    firstName: "Mary",
    lastName: "Doe"
  }
  person.fullName.apply(person1);  // Will return "Mary Doe"
  
  //The Difference Between call() and apply()
  //The difference is:
  
  //The call() method takes arguments separately.
  
  //The apply() method takes arguments as an array.
  
  //The apply() method is very handy if you want to use an array instead of an argument list.
  
  //The apply() Method with Arguments
  //The apply() method accepts arguments in an array:
  
  var person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  var person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  person.fullName.apply(person1, ["Oslo", "Norway"]);
  
  //Compared with the call() method:
  
  var person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  var person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  person.fullName.call(person1, "Oslo", "Norway");
  
  //Javascript Closures
  var add = (function () {
    var counter = 0;
    return function () {counter += 1; return counter}
  })();
  
  add();
  add();
  add();
  
  // the counter is now 3
  
  //The variable add is assigned to the return value of a self-invoking function.
  
  //The self-invoking function only runs once. It sets the counter to zero (0), and returns a function expression.
  
  //This way add becomes a function. The "wonderful" part is that it can access the counter in the parent scope.
  
  //This is called a JavaScript closure. It makes it possible for a function to have "private" variables.
  
  //The counter is protected by the scope of the anonymous function, and can only be changed using the add function.
  
  //A closure is a function having access to the parent scope, even after the parent function has closed.
  