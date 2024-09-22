
//  Nullish Coalescing Operator ==> ??



//agar userinput  main kuch hain tou wo count main dalay agar nahee hain tou by default us main 100 dalay but agar userinput ==0 tou wih usay false manta hain es say bachnay k leye ?? use krtain hain


let userInput = 0;
let count = userInput || 100
console.log(count);


// this is use of nullish 
let myInput = 0
let myCount = myInput ?? 140;
console.log(myCount);