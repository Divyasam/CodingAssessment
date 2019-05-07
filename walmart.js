//Question 1

//Write a multiplication function in javascript to use like this.
//console.log(mul(2)(4)(5));

//Here closure is used
function mul(x) { 
 return function(y) {
   return function(z) {
      return x*y*z;
   }
 }
}


//Question 2

//Please open the below mentioned github link for Question2
//(https://github.com/Divyasam/CountdownChamp)

//Question 3

// Which of the following code snippet append an element value at the end of the array, arr?

// a) arr[arr.length+1] = value

// b) arr[arr.length] = value

// c) arr[arr.length - 1] = value

// d) arr = arr + value 

//Ans: arr[arr.length] = value

//Question 4

// JavaScript: what is the correct way to create a JavaScript array?

// a) var items = ["Orange", "Apple"];

// b) var items = {"Orange", "Apple"};

// c) var items = new array("Orange", "Apple");

// d) var items[] = {"Orange", "Apple"};

//Ans: var items = ["Orange", "Apple"]; 
//However there is another way of creating array. (ie) var items = new Array("Orange", "Apple");

//Question 5

//What is the output of the following code

foo = 1;

(function() { //function 2

   foo = 2; 

})();

var x = function () { //function 3

  foo = 3;

};

(function() { //function 4

   var foo = 4;

})();

console.log(foo);

//Ans: 2 (Because declaring foo in function 2 without var keyword makes it global 
//and function 2 is Immediately Invokable function Expression)
//Inside function 4, foo has a function scope since it is declared with var keyword

