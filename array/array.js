//array

const myarr=[0,2,3,4,8,9,"ayushi"]
console.log(myarr[2]);

//arrays always make shallow copyy====original me bhi change hoga

    const myarray=new Array(1,2,3,4)
    console.log(myarray);

    //array methods
myarray.push(6)
myarray.pop()
console.log(myarray);

myarray.unshift(8)
myarray.shift()
console.log(myarray);
console.log(myarray.includes(7));


const newarr=myarray.join()
console.log(myarray);
console.log(newarr);
console.log(typeof myarray);
console.log(typeof newarr);

//slice,splice
console.log("a",myarray);

const n1=myarray.slice(1,3)
console.log(n1);
console.log("b",myarray);

//if we use splice instead of slice range last wali include hoti hai

