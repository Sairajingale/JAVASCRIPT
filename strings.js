let Cityname = "Mumbai";

const AnotherCityName = Cityname;

console.log(AnotherCityName)

const Myname = "Sairaj";
const Amount = 100;

console.log (`My ${Myname} is and I have ${Amount} rupees`);


let Name = new  String("adminstration");

console.log(Name.slice(0,4))
console.log(Name[1])
console.log(Name.trim())
console.log(Name.charAt(3))
console.log(Name.indexOf("s"))
console.log(Name.toUpperCase())

let url = "https://www.google.com/hello%20world%20and%20hello%20universe";
console.log( url.replace("%20","-")  )

const sentence = "Hello world, how are you?";
const words = sentence.split(' ');
console.log(words);
// Output: ["Hello", "world,", "how", "are", "you?"]