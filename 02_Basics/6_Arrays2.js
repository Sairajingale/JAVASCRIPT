Arr1 = [1,2,4,'hello',785];
Arr2 = [9,8,7,'world',456];

arr = Arr1.push(Arr2);  //adds Arr2 to Arr1
console.log(arr);
console.log(Arr1);
console.log(Arr2);

Arre  = Arr1.concat(Arr2);  //concatenates Arr1 and Arr2
console.log(Arre);

another_arr= [...Arr1,...Arr2];  //concatenates Arr1 and Arr2
console.log(another_arr);

const arr3 = [1,2,3,4,[42,253,464,["hello","world"]]];
const flatting= arr3.flat(2);  //flattens array by 2 levels & we can also use Infinity flat(Infinity). 
                            // Actually flat removes all arrays under the array
console.log(flatting);

console.log(Array.isArray("hello"));  //checks if it is array or not returns boolean output

console.log(Array.from("hello"));  //converts string to array

console.log(Array.from({name:"sairaj",age:21}));  //converts object to array
 //it will give empty array because compiler confuse with object should convert to keys or values

 const name = "sairaj";
 const age = 21;
 console.log(Array.of(name,age));  //converts multiple variables to array