$(document).ready(function(){	
	/*********** PUT THINGS HERE ****************/

	/****** QUESTION 1 ************/
	document.getElementById('return5th_submit').onclick = function(){
			var text = document.getElementById('return5th_input').value;
			document.getElementById('return5th_display').innerHTML = text.charAt(4);
	}
    /****** QUESTION 2 ************/
    // Same as above except output second to last char of a input string

document.getElementById('returnLast_submit').onclick = function(){
			var text = document.getElementById('returnLast_input').value;
			document.getElementById('returnLast_display').innerHTML = text.charAt(text.length-2);
	}

	/****** QUESTION 3 ************/
	// Check to see if a word exists in a hard-coded paragraph, display "YES" if found and "NO" if not

var test = 'Hello World';
	if( test.indexOf('World') >= 0){
  	// Found world
}


	/****** QUESTION 4 ************/
	// Reverse string inputted by user

function reverseString(str) {
    return str;
}
reverseString("hello");

	/****** QUESTION 5 ************/
	// Output HELLO WORLD into a div, but you must first store "hello world" into a variable and then output the variable

document.getElementById("demo").innerHTML = 5 + 6;

	/****** QUESTION 6 ************/
	// Provide an input for user to type their name and greet them with their name "Hello BLANK, welcome to the website" should go in greet1 display

		document.getElementById('greet1_submit').onclick = function(){
          var text = document.getElementById('greet1_input').value; 
			text="Hello"+ name + ("welcome to my website");

			document.getElementById('greet1_display').innerHTML = text.charAt(name);

}

	/****** QUESTION 7 ************/
	// Do the same as above but only greet them if their names are Alice, Bob, or YOUR NAME

		document.getElementById('greet2_submit').onclick = function(){
          var name = document.getElementById('greet2_input').value;
          var text=" ";
          if(name=="Bob" || name=="Alice" || name=="Ying"){
			text="Hello "+name+" welcome to the website";
		}
       document.getElementById('greet2_display').innerHTML = text;
}



	/****** QUESTION 8 ************/
	// Accept two integers from the user and display the larger



	/****** QUESTION 9 ************/
	// Accept three integers from the user and display the SIGN of the product of the three (aka: display + or -)



	/****** QUESTION 10 ************/
	// Write a JavaScript program to sort three numbers. Display them in order from greatest to smallest



	/****** QUESTION 11 ***********/
	// Write a function called play() to play rock, paper, scissors and output the winner (player 1 or player 2). This requires ressearch on how to make a function



	/****** QUESTION 12 ***********/
	// Calculate the factoral of a number inputted by the user

function fact(x) {
       if(x == 0) {
           return 1;
       }
       if(x < 0 ) {
           return undefined;
       }
       for(var i = x; --i; ) {
           x *= i;
       }
       return x;
}


	/****** QUESTION 13 ***********/
	//Write a JavaScript program to construct the following pattern:
	//*
	//**
	//***
	//****
	//*****				

var chr;
for(x=1; x <=6; x++){}
      chr=chr+"*";        
 	console.log(chr);    
}

	/****** QUESTION 14 ***********/
	//Write a function that multiplies a base by itself a certain number of times (exponent)

	var str = "Hello world!";
str.repeat(2);

	/****** QUESTION 15 ***********/
	//Write a program that prints the numbers from 1 to 100. But for multiples of three print "Foo" instead of the number and for the multiples of five print "Bar". For numbers which are multiples of both three and five print "FooBar"
	
	
});	
