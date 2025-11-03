//iife

(function chai(){                      //named iife
    console.log(`DB CONNECTED`);
})
();
//or
((name)=>{
    console.log(`DB CONNECTED ${name}`);  // unnamed iife
})(`Ayushi`)