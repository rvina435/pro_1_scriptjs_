function myname(){
console.log("A");
console.log("y");
console.log("s");
console.log("h");
console.log("i");
}

myname()


// function addnumber(num1,num2){
//     console.log(num1+num2);
// }
// const result=addnumber(3,4)
// console.log("result:",result);

// function addnumber(num1,num2){
// //   let result=num1+num2;
// //   return result
// //or

// return num1+num2

// }

// // const result=addnumber(3,4)
// // console.log("result:",result);


function loginuser(username="sam"){
    if(username=== undefined){     //!undefined 
        console.log("enter username");
        return
    }
    return `${username} just logged in`
}
console.log(loginuser())





function calculateCartPrice(val1,val2,...num1){    //rest operator
    return num1

}

console.log(calculateCartPrice(200,400,500))


//passing object into function
const user={
    username:"Ayushi",
    price:111
}
function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price} `);

}
handleObject(user)