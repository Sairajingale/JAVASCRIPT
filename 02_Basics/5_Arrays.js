Myarr=[1,2,3,4,7,9]

rep =Myarr[0]= "Sairaj";  //replaces 1 with Sairaj
console.log(rep);

pushh =Myarr.push(10);      //adds 10 at the end
console.log(pushh);

popp= Myarr.pop();         //removes last element
console.log(popp);

us= Myarr.unshift(0);    //adds 0 at the beginning
console.log(us);

shif= Myarr.shift();       //removes first element
console.log(shif);

splic= Myarr.splice(2,4);   //removes elements from index 2 to 4
console.log(splic);

inc= Myarr.includes(7);   //checks if 7 is present in array
console.log(inc);

ind= Myarr.indexOf(5);     //gives index of element
console.log(ind);

console.log(Myarr);

const newArr = Myarr.join('-');   //converts array to string and we can use seperator .join('-')
console.log(newArr);