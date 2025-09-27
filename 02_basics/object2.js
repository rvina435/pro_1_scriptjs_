//objects with the help of constructor orr singleton object
const tinderuser=new Object();
const tinderuser1={}
 tinderuser.id="123abc"
tinderuser.name="sam"
tinderuser.isLoggedIn=false

// console.log(tinderuser);
// console.log(tinderuser1);

const regularUser={
    email:"ayu@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Ayushi",
            lastname:"saini"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

//combining objects
const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

 const Object3=Object.assign({},obj1,obj2)
console.log(Object3);


//another way
const obj3={...obj1,...obj2}
console.log(obj3);