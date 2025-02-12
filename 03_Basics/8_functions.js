function addTwoNumbers(num1, num2){
    return num1 + num2;
}

console.log(addTwoNumbers(2,3));

function username(user){
    return `${user} is logged in`;
}

console.log(username("John"));

function password(password){
if(password===undefined)
    return "Please enter a password";

else{
     return "Password is set";
}
}

console.log(password()); // Please enter a password


//object passing 

obj = {
    product: "Iphone",
    price: 80000
};

function productDetails(obj){
    return `${obj.product} price is ${obj.price}`;
}

console.log(productDetails(obj)); // Iphone price is 1000
console.log(productDetails({product:"Samsung",price:125000})); 


//Array passing

products = ["Iphone","Samsung","Oneplus"];

function productName(products){
    return `${products[0]} is the best smartphone brand`;
}

console.log(productName(products)); // Iphone is the best smartphone brand
console.log(productName(['oppo'])); 
