//this and arrow fuction 

//arrow
//functions k andar this use nhi ho pa raha sirf objects k andar hi access
//kr paa rhe


//this inside function ya arrow function is undefined
// function chai(){
//     let username="me"
//     console.log(this.username);
// }
// chai()


//this inside objects
// const user={
//     username:"Ravina",
//     price:99,

//     welcomemessage:function(){
//         console.log(`${this.username},welcome to website`);
//          console.log(this);
//         }
// }
// user.welcomemessage()
// user.username="vinu"
// user.welcomemessage()
//    console.log(this);





//arrow functions
// const addtwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addtwo(3,5))


//another way =implicit function

const addtwo=(num1,num2)=> num1+num2   
//note agar curly braces use kre to return keyword likhna padega
//nhi to bina bracket ya roud bracket bhi chalega


console.log(addtwo(3,5))

