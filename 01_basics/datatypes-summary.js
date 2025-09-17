// //primitive
// //7  types: string,number,boolean,null,undefined,symbol,BigInt

// const score=100
// const scoreValue=100.3

// const isLoggedIn=false
// const outsideTemp=null

// let userEmail; 

// const id=Symbol('123')
// const anotherId=Symbol('123')
// console.log(id===anotherId);

// //reference or non primitive
// // arrays,objects,functions

// const heroes=["shaktimaan","naagraj","doga"];

//    let myObj={
//     name:"ayushi",
//     age: 22,
// }


//  const myFunction=function(){
//     console.log("hello world");
//  }

//  //kisis variable ka type pta krne k liye
//  console.log(typeof outsideTemp);

//  //non primitive ka data type function hota hai usme function ko object function bolte hai
//     console.log(typeof myFunction);
//     console.log(typeof heroes);
//     console.log(Array.isArray(heroes));
//     console.log(heroes instanceof Array);


    //stack and heap memeory

    //stack(primitive data type) and heap(non primitive data type)
    // let myname="ayushi" //stack
    // let anotherName=myname;
    // console.log({myname,anotherName});
    // myname="something else"
    // console.log({myname,anotherName});
let userOne={
    email:"ayushi@gmail.com",
    upi:"ayushi@okaxis"
}

let userTwo=userOne;

userTwo.email="user@ybl"             //by reference me origional vale change ho gyi

console.log(userOne.email);
console.log(userTwo.email);