// let num= 400;

// const num1 = new Number (500.26)

// console.log(typeof num)
// console.log(num1)
// console.log(typeof num1)

// console.log(typeof num1.toString().length);    //converts number to string and gives length of string

// console.log(num1.toFixed(2));            //value upto 2 decimal places

// console.log(num1.toPrecision(4));    //value upto 4 digits 


//--------------------------------------------------//
// const anynum = 5000.400
// console.log(Math.random())               //generates random number between 0 and 1
// console.log(Math.round(anynum))         //rounds off to nearest number
// console.log(Math.abs(anynum))          //absolute value remove negative sign
// console.log(Math.floor(anynum))        //rounds down lowest number
// console.log(Math.ceil(anynum))         //rounds up highest number
// console.log(Math.min(anynum))          //gives minimum value
// console.log(Math.max(anynum))         //gives maximum value


// Ludo Dice 

const max = 6;
const min = 1;

console.log(Math.round(Math.random() * ( max - min)+ min))