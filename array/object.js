//singleton--->constructor se jo banega
//through constrctor=object.create

//object literals

//declaration of objects

//symbol declaration
const mySym=Symbol("key");

const user={
    name:"Ayushi",
    [mySym]:"key1",   //symbol using inside object
    age:19,
    location:"India",
    email:"ayushi@gmail.com",
    isloggedin:false,
}

//accessing objects
// console.log(user.age);

// //or

// console.log(user["email"]);
// console.log(typeof user[mySym]);

// user.email="ravina@gmail.com";
// Object.freeze(user)
// user.email="nonu@gmail.com"
// console.log(user);

user.greeting=function(){
    console.log("hello thereee");
}

user.greetingtwo=function(){
    console.log(`hello theree,${this.name}`);
}

console.log(user.greetingtwo());
// console.log(user.greeting);

