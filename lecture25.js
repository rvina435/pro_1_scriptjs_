//conditionals
// if(2==="2"){
//     console.log("executed");
// }


// const score=200
// if(score>100){
//     let power="fly"
//     console.log(`user power:${power}`);
// }
// console.log(`user power:${power}`);


// const balance=1000
// if(balance>500) console.log("test")

// const userloggedin=true
// const debitcard=false

// if(userloggedin && debitcard){
//     console.log("allowed to shop");
// }
// else{
//     console.log('not allowed to shop');
// }






//lecture26

//falsy valuess
//false,0,bigint 0n,"",null,undefined,NaN

const userEmail=[]
// if(userEmail){
//     console.log("got user email");
// } else{
//     console.log("dont have user email");
// }

//truthy values
//"0", "false"," ",[],{},function(){}
// if(userEmail.length===0){
//     console.log("array is empty");
// }

//checking for objects
const emptyObj={}
if(Object.keys(emptyObj).length===0){
    console.log("object is empty");
}

//nullish coalescing operator(??): null undefined

// let val1;
// // val1= 5 ?? 10
// // val2 =null??16
// val1=undefined??12
// console.log(val1);



//ternary operator
// condition?true:false
const iceteaprice=10
iceteaprice>=80?console.log("haaa"):console.log("dududdduuu")