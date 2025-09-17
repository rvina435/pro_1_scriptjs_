//primitive
//7  types: string,number,boolean,null,undefined,symbol,BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null

let userEmail; 

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);

//reference or non primitive
// arrays,objects,functions

const heroes=["shaktimaan","naagraj","doga"];

   let myObj={
    name:"ayushi",
    age: 22,
}


 const myFunction=function(){
    console.log("hello world");
 }

 //kisis variable ka type pta krne k liye
 console.log(typeof outsideTemp);

 //non primitive ka data type function hota hai usme function ko object function bolte hai
    console.log(typeof myFunction);
    console.log(typeof heroes);
    console.log(Array.isArray(heroes));
    console.log(heroes instanceof Array);
