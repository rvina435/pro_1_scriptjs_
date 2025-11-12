// const coding=["js","hello","me","y"]

// const values=coding.forEach((item)=>{
// console.log(item);
// })
// console.log(values);

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// //  Using filter()
// const newNums = myNums.filter((num) => num > 4);
// console.log(newNums);

// //  Using forEach()
// const newNums2 = [];
// myNums.forEach((num) => {
//   if (num > 4) {
//     newNums2.push(num);
//   }
// });
// console.log(newNums2);




//filter on objects inside array
// const users = [
//   { name: "Ravi", age: 22 },
//   { name: "Anjali", age: 28 },
//   { name: "Karan", age: 31 },
//   { name: "Pooja", age: 19 },
//   { name: "Rohit", age: 26 }
// ];

// // Filter users whose age is greater than 25
// const filteredUsers = users.filter((user) => user.age > 25);

// console.log(filteredUsers);



//map
// const hello = [1,2,3,4,5,6,7,8,9];

// // map only
// const hii = hello.map(num => num + 10);
// console.log("map result:", hii);

// // filter + map chaining
// const chainResult = hello
//   .filter(num => num > 5)   // first filter numbers greater than 5
//   .map(num => num + 10);    // then add 10 to each

// console.log("chain result:", chainResult);



//reduce
const nums = [1, 2, 3, 4, 5];

const total = nums.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(total);



