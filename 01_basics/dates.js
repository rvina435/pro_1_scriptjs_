//dates

 let myDate=new Date()
 console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

 let newdate=new Date(2003,1,21)
console.log(newdate.toDateString());
 console.log(newdate.toLocaleString());


let date=new Date("02-21-2003")
 console.log(date.toLocaleString());

let mytimestamp=Date.now()
console.log(mytimestamp);
 console.log(date.getTime());


console.log(Math.floor(Date.now()/1000));
let newDate=new Date();
console.log(newDate.getFullYear());
console.log(newDate.getMonth());
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getHours());
console.log(newDate.getMinutes());
console.log(newDate.getSeconds());
console.log(newDate.getMilliseconds());







