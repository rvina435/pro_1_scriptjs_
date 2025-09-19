//dates

let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);

let newdate=new Date(2003,1,21)
console.log(newdate.toDateString());
console.log(newdate.toLocaleString());


let date=new Date("02-21-2003")
console.log(newdate.toLocaleString());