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

const users=[
    {
        id:1,email:"ayu@gmail.com"
    },
    {
  name:"ayushi"
    }
]

users[1].email
console.log(tinderuser);

console.log(Object.keys(tinderuser));

console.log(Object.values(tinderuser));
console.log(Object.entries(tinderuser));
console.log(tinderuser.hasOwnProperty('isLoggedIn'));


const course={
    coursename:"hindi",
    price:"999",
    courseinstructor:"ayushi"
}
//object de-structure
const{courseinstructor:instructor}=course

console.log(instructor);