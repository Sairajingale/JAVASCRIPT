let Cityname = "Mumbai";      //data type is string

const AnotherCityName = Cityname;

console.log(AnotherCityName)

const Myname = "Sairaj";
const Amount = 100;

console.log (`My ${Myname} is and I have ${Amount} rupees`);


let Name = new String("adminstration    name");   //data type is object

console.log(Name.length)
console.log(Name.slice(0,4))
console.log(Name[1])
console.log(Name.trim())
console.log(Name.charAt(3))
console.log(Name.indexOf("s"))
console.log(Name.toUpperCase())
console.log(Name.toLowerCase())
console.log(Name.includes("hello"))

let url = "https://www.google.com/hello%20worldandhellouniverse";
console.log(url.replace("%20","-"))

let sentence = "Hello world,- how are you? - fine";
let words = sentence.split('-');
console.log(words);
// Output: ["Hello", "world,", "how", "are", "you?"]