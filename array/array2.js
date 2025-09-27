const color=["purple","blue","red","green"];
const festival=["diwali","holi","dushera"];


// color.push(festival)
 // console.log(color);

const all=color.concat(festival);
console.log(all);

//instead of concat we can use this way

const all_new=[...color,...festival]    //spread operator
console.log(all_new);


const ayush=[1,2,[3,4],5,[6,7,[9,0]]]
const ayushi=ayush.flat(2)   //or Infinity instead of 2
console.log(ayushi);


console.log(Array.isArray("ayushi"))
console.log(Array.from("ayushi"))
//interesting point
console.log(Array.from({name:"ayush"}))

let score1=3
let score2=6
let score3=3

console.log(Array.of(score1,score2,score3));