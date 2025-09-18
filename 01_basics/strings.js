const name="ayushi"
const repocount=50

// console.log(name+repocount+"value");

console.log( `hello my name is ${name} and my repocount is${repocount}`);

const gamename=new String('ayush-iii');  //key value type bhi aa jata hai

console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.charAt(2));
console.log(gamename.indexOf('y'));

// const newString= gamename.substring(0,6)
// console.log(newString);

const anotherString=gamename.slice(-3);
console.log(anotherString);

const newstring="   ayushi   "
console.log(newstring);
console.log(newstring.trim());

const url="https://ayushi.com%21"

console.log(url.replace('%21','-'));
console.log(url.includes('sundar'));

const love=new String('i-love-you');

console.log(love.split('-'));