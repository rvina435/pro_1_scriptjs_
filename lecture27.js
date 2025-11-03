// for(let index=0;index<=10;index++){
//     const element=index;
//     if(element===5){
//         console.log("5 is best number");
//     }
//     console.log(element);
// }

// for(let i=0;i<=10;i++){
//     console.log(`outer loop:${i}`);
//     for(let j=0;j<=10;j++){
//         console.log(`inner loop value ${j} and outer loop ${i}`);

//         console.log(i+'*'+j+'='+i*j);
//     }

//     let myarray=["i","love","dududuu"]
//     // console.log(myarray.length);
//     for(let i=0;i<myarray.length;i++)
// {
//     const element=myarray[i];
//     console.log(element);
// }

//break and continue 
// for(let i=0;i<=20;i++){
//     if(i==5){
//         console.log(`5 detected`);
//         break;  
//     }
//   console.log(`value of i is ${i}`);
// }

// for(let i=0;i<=20;i++){
//     if(i==5){
//         console.log(`5 detected`);
//         continue;  
//     }
//   console.log(`value of i is ${i}`);
// }


//while loop

let myarray=["i","love","dudu"]
let i=0
while(i<=myarray.length)
{
    console.log(`my love ${myarray[i]}`);
    i=i+1;
}

//do while
let score=1
do
{
console.log(`score is${score}`);

score++
}
while(score<=10);