console.log("Welcome to JavaScript programming!");

// console.log("VAR vs LET");


// console.log("VAR");
// //var is a global variable
// var a = 10;
// console.log(a);
// {
//     a = 20;
//     console.log(a);
// }
// console.log(a);


// console.log("LET");
// //let is a block-scoped variable -> could not be redeclared in the same scope
// let b = 10;
// //let b=20; // This will throw an error because b is already declared in the same scope
// console.log(b);
// {
//     b = 20;
//     console.log(b);
// }
// console.log(b);


// console.log("CONST");
// //const is a block-scoped variable -> could not be redeclared in the same scope and also could not be reassigned
// const c = 10;
// console.log(c);
// // c=20; // This will throw an error because c is a constant and cannot be reassigned
// // console.log(c);


// // data types in JavaScript
// console.log("Data Types in JavaScript");
// let num1 = 10; // number
// let num2 = "Hello"; // string
// let num3 = true; // boolean
// let d = null; // null
// let e = undefined; // undefined
// let f = { name: "John", age: 30 };    // object
// let g = [1, 2, 3, 4, 5]; // array
// let h = Symbol("id"); // symbol   
// let i = BigInt(1234567890123456789012345678901234567890); // BigInt
// console.log(typeof num1);
// console.log(typeof num2);
// console.log(typeof num3);
// console.log(typeof d);
// console.log(typeof e);
// console.log(typeof f);
// console.log(typeof g);
// console.log(typeof h);
// console.log(typeof i);


// console.log("objects in JavaScript");
// let person = {
//     name: "John",
//     age: 30,
//     height: 5.9
// }
// console.log(person["name"])
// console.log(person["age"])
// console.log(person["height"])


// console.log("operators in javascript");
// let x = 10;
// let y = 5;
// console.log("Addition: " + (x + y));
// console.log("Subtraction: " + (x - y));
// console.log("Multiplication: " + (x * y));
// console.log("Division: " + (x / y));
// console.log("Modulus: " + (x % y));
// console.log("Exponentiation: " + (x ** y));
// console.log("Increment: " + (++x));
// console.log("Decrement: " + (--y));
// console.log(x++);
// console.log(x);



// // conditional statements in javascript
// let name11 = prompt("Enter a number: ");
// if (name11 % 2 == 0) {
//     console.log("The number is even");
// } else {
//     console.log("The number is odd");
// }
// alert("The number is: " + name11)



//switch case in javascript
// console.log("switch case in javascript")
// let day = prompt("Enter a day: ");
// switch (day) {
//     case "Monday":
//         console.log("Today is Monday");
//         break;
//     case "Tuesday":
//         console.log("Today is Tuesday");
//         break;
//     case "Wednesday":
//         console.log("Today is Wednesday");
//         break;
//     case "Thursday":
//         console.log("Today is Thursday");
//         break;
//     case "Friday":
//         console.log("Today is Friday");
//         break;
//     case "Saturday":
//         console.log("Today is Saturday");
//         break;
//     case "Sunday":
//         console.log("Today is Sunday");
//         break;
//     default:
//         console.log("Invalid day");
// }



// console.log("ternary operator in javascript");
// let age = prompt("Enter your age: ");
// console.log("you can", age < 18 ? "not drive" : "drive");



// //functions in javascript
// console.log("functions in javascript");
// function average_of_nums(x,y){
//     return (x+y)/2;
//     // console.log("done");
// }
// let p=10;
// let l=20;
// let m=30;
// console.log(average_of_nums(p,l));
// console.log(average_of_nums(p,m));
// console.log(average_of_nums(l,m));


//another way to declare a function is using arrow functions
// const hello = ()=> {
//     console.log("hello this is another way to declare a function")
// }
// hello();


// strings in javascript
// console.log("strings in javascript");
// let str1 = "Hello";
// let str2 = "World"; 
// let sentence=`you are ${str1} with ${str2}`; //this is called String Interpolation
// console.log(sentence)


// let st='           banana\'s        hello           '
// console.log(st) //this is called escape character
// console.log(st.length)//this is called length property
// console.log(st.toUpperCase())//this is called toUpperCase() method
// console.log(st.toLowerCase())//this is called toLowerCase() method
// console.log(st.slice(2,5))//this is called slice() method
// console.log(st.replace('b','B'))//this is called replace() method
// console.log(st.includes('n'))//this is called includes() method
// console.log(st.indexOf('n'))//this is called indexOf() method
// console.log(st.lastIndexOf('n'))//this is called lastIndexOf() method
// console.log(st.trim())//this is called trim() method
// console.log(st.split('a'))//this is called split() method
// console.log(st.concat(' is a fruit'))//this is called concat() method


// let sentence = "please give me Rs 1000";
// let amount = Number.parseInt(sentence.slice(17));
// console.log(amount);


//arrays in javascript
// console.log("arrays in javascript");
// let arr = [1,2,3,4,5];
// console.log("original array:", arr);
// arr.pop(); //removes the last element from the array
// console.log("after pop:", arr);
// arr.push(6); //adds an element to the end of the array
// console.log("after push:", arr);
// arr.shift(); //removes the first element from the array
// console.log("after shift:", arr);
// arr.unshift(0); //adds an element to the beginning of the array
// console.log("after unshift:", arr);
// arr.splice(2,1); //removes an element from the array at a specific index    
// console.log("after splice:",    arr);
// arr.splice(2,0,2); //adds an element to the array at a specific index
// console.log("after splice:", arr);
// arr.splice(2,1,2); //replaces an element in the array at a specific index
// console.log("after splice:", arr);
// arr.sort(); //sorts the array in ascending order
// console.log("after sort:",  arr);
// arr.reverse(); //reverses the array
// console.log("after reverse:", arr);
// arr = arr.concat([7,8,9]); //concatenates two arrays
// console.log("after concat:", arr);
// arr = arr.slice(2,5); //creates a new array from the original array
// console.log("after slice:", arr);


//sorting in javascript
// console.log("sorting in javascript");
// let numbers = [52, 23, 8, 21, 9];
// console.log("original array:", numbers);
// numbers.sort();
// console.log("after sort: this happens because the arr is considered steings so its sorting alphabetically", numbers);
// function ascending_compareNumbers(a, b) {
//     return a - b;
// }
// function descending_compareNumbers(a, b) {
//     return b - a;
// }
// console.log("after sort with compare function:", numbers.sort(ascending_compareNumbers)); //sorts the array in ascending order
// console.log("after sort with compare function in descending order:", numbers.sort(descending_compareNumbers)); //sorts the array in descending order

// //for-of loop in javascript
// console.log("for-of loop in javascript");
// let num=[1,2,3,4,5];
// for(let i of num){
//     console.log(i);
// }


// ///for in loop in javascript
// console.log("for in loop in javascript ->returns `the index of the array`");
// let num=[1,2,3,4,5];
// for(let i in num){
//     console.log(i);
// }



// //map in javascript -> returns a new array with the results of calling a provided function on every element in the calling array
// console.log("map in javascript");
// let num=[1,2,3,4,5];
// let doubled = num.map(x => x * 2);
// console.log(doubled); // Output: [2, 4, 6, 8, 10]


// //filter in javascript -> returns a new array with all elements that pass the test implemented by the provided function
// console.log("filter in javascript");
// let num1=[1,2,3,4,5,100];
// let even = num1.filter(x => x % 2 === 0);
// console.log(even); // Output: [2, 4]

