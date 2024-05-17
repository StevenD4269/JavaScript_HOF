console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
// 1. Declare a function plus that takes in a number parameter.
function plus(number) {
  // Inside the body of plus, use the return keyword to return an anonymous function
  // The return function will take in a plusNumber parameter, and return the value of plusNumber with the first parameter number
  return function (plusNumber) {
    return number + plusNumber;
  };
}

// Next, declare a variable plus15 that is assigned the value of plus with 15 passed in
const plus15 = plus(15);
// console.log the result of plus15 with 10 passed in
console.log(plus15(10));

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
// Use the Array forEach method to print the names of each user within the list.
let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];

users.forEach(function (user) {
  console.log(user.name);
});

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");
// Use the Array map method to RETURN a new array just containing objects with names and scores. Start with the previously defined users array.
let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];

// users has a bucket filled with properties of different users
// The Map method will take out each bucket item and create a new bucket item, in this case it returns a new object with 2 properties
let nameScore = users.map((element) => {
  return {
    //   this takes the two properties in the bucket and remakes them into a new object with new properties
    name: element.name,
    score: element.score,
  };
});
// console log it
console.log(nameScore);

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");
// Use the Array filter method to return a new array that only contains users that are listed as active. Start with the previously defined users array.
const filteredUsers = users.filter((user, index, array) => {
  console.log(user);
  return user.isActive;
});
console.log(filteredUsers);

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");
// The sort method pulls items out of the "bucket" and sorts them according to a paramater you set
// Sort will change the array directly
// "a" and "b" are kind of telling it to take two items and compare them and sort them appropriately
// LONG way
// users.sort((a, b) => {
//   if (a.score > b.score) {
//     return -1;
//   } else if (a.score < b.score) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

users.sort((a, b) => {
  return b.score - a, score;
});
// the sort method is going "is this a positive number, negative numbner, or zero" and sort them
console.log(users);

// Exercise 6 Section
console.log("EXERCISE 6:\n==========\n");
// The reduce method simplifies the information down to one item/peice of information
// Everytime it repeats it will give you an accumulated value
// the basic template is:
// array.reduce((accumulator, currentValue, currentIndex, array) => {logic to accumulate the value}, initialValue);

const totalScore = users.reduce((accumulator, user) => {
  return accumulator + user.score;
}, 0);

const averageScore = totalScore / users.length;

console.log('Total Score:', totalScore); 
console.log('Average Score:', averageScore); 


// jsjhsh