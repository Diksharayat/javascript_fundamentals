//1.Object constructor function
"strict";
//create
// const person = new Object();

// //add properties
// person.name = "John";
// person.age = 30;
// person.isMarried = true;
// person.hobbies = ["Sports", "Cooking"];

// const person = new Object({
//   name: "Jonh",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   isMarried: true,
// });

//Object literal syntax

// const person = {};

//add properties
// person.name = "John";
// person.age = 30;
// person.isMarried = true;
// person.hobbies = ["Cooking", "Sports"];

// const person = {
//   name: "John",
//   age: 30,
//   isMarried: true,
//   hobbies: ["Cooking", "Sports"],
// };

// person.anotherProperty = "I do not know";

//-----Accessing Object properties---

// const person = {
//   name: "John",
//   age: 30,
//   isMarried: true,
//   hobbies: ["Cooking", "Sports"],
// };

//--------
//using the dot noation
//-------
//get the name of the person
// const personName = person.name;

//get the person married status
// const personStaus = person.isMarried;
//get the age of the person
// const personAge = person.age;

//get the person Hobbies
// const personHobbies = person.hobbies;

//--------
//using the bracket noation
//-------

// const personAge = person["age"];
// //get the person Hobbies
// const personHobbies = person["hobbies"];

//------
//UPDATING OBJECT PROPERTIES
//------

// const person = {
//   name: "John",
//   age: 30,
//   isMarried: true,
//   hobbies: ["Cooking", "Sports"],
// };

//using the dot notation

//update the person name
// person.name = "Billy";
// person.age = 100;
// person.hobbies = ["Hiking", "Dancing"];

//using the bracket notation

// person["age"] = 90;
// person["hobbies"] = ["Coding", "Outing"];

//----
//DELETING OBJECT PROPERTIES
//----

// const person = {
//   name: "John",
//   age: 30,
//   isMarried: true,
//   hobbies: ["Cooking", "Sports"],
//   isAdmin: true,
//   status: "not verified",
// };

//using the dot notation

//delete the age property

//delete person.age;

//using the bracket notation

// delete person["hobbies"];

//-------
//ADDING METHODS TO OBJECT
//-------

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   viewsCount: 100,
//   isMarried: true,
//   hobbies: ["Cooking", "Sports"],
//   isAdmin: true,
//   status: false,
//   printFullName: function () {
//     console.log(`Your full name is ${this.firstName} ${this.lastName}`);
//   },
//   checkStatus: function () {
//     if (this.status === false) {
//       delete this.isAdmin;
//     }
//   },
// };
// person.checkStatus();

//add printFullName method to the object
// person.printFullName = function () {
//   console.log(`Your full name is ${this.firstName} ${this.lastName}`);
// };

//How to call the function
//person.printFullName();

//-----
//This keyword
//-----

//--------
//ITERATING OVER OBJECT PROPERTIES
//------
// const personObj = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   viewsCount: 100,
//   isMarried: true,
//   hobbies: ["Cooking", "Sports"],
//   isAdmin: true,
//   status: false,
// };

//1. for..in loop
//2. object.keys
//3. object.values
//object.entries

// for in loop

//syntx

// for (let key in personObj) {
//   console.log(key);
// }

//-----
//object.keys

// const myKeys = Object.keys(personObj);

// console.log(myKeys);

// const arr = [1, 4, 6, 2, 8];

// myKeys.forEach(function (data) {
//   console.log(data);
// });

//OBJECT.VALUES()

// const personObj = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   viewsCount: 100,
//   isMarried: true,
//   hobbies: ["Cooking", "Sports"],
//   isAdmin: true,
//   status: false,
// };

// const objValues = Object.values(personObj);

// console.log(objValues);

//---
//OBJECT.ENTRIES()
//----

// const personObj = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   viewsCount: 100,
//   isMarried: true,
//   hobbies: ["Cooking", "Sports"],
//   isAdmin: true,
//   status: false,
// };

// const objEntries = Object.entries(personObj);
// objEntries.forEach(function (entry) {
//   console.log(entry);
// });

//Destructuring assignment

// objEntries.forEach(function ([key, value]) {
//   console.log(`${key}: ${value}`);
// });

//----Challenge 1:
//Create an object called user which has the following properties:
//name: "John"
//age: 30
//location: "New York"
//Create a function called printInfo which prints the name and age property of the user object.

//SOLUTION
// const user = {
//   name: "John",
//   age: 30,
//   location: "New York",
//   printInfo: function () {
//     return `${this.name} is ${this.age} years old`;
//   },
// };

// //call the fn
// const ans = user.printInfo();
// console.log(ans);

//----Challenge 2:
//Create an object called user which has the following properties:
//name: "John"
//age: 30
//location: "New York"
//Create a function called printInfo which prints the name and age property of the user object.
//Add a property called married which is a boolean value.
//Add a method called isMarried which prints whether the user is married or not.

//SOLUTION

// const user = {
//   name: "John",
//   age: 30,
//   location: "New York",
//   married: true,
// };

// //add obj method
// user.isMarried = function () {
//   if (this.married) {
//     console.log(`${this.name} is married`);
//   } else {
//     console.log(`${this.name} is not married`);
//   }
// };

// //invoke th fn
// user.isMarried();

//----Challenge 3:
// Write a function that iterates over an object and prints out each key-value pair in the format "key: value" on separate lines.

//SOLUTION
// const bookObj = {
//   name: "Web development guide",
//   author: "i-Novotek Academy",
//   numPages: 5000,
//   ISBN: "IN234",
// };

// const printObj = function (obj) {
//   for (let key in obj) {
//     console.log(`${key} : ${obj[key]}`);
//   }
// };

// printObj(bookObj);
