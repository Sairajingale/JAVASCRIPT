//singleton
// Object.method 

Mysymbol = Symbol('my symbol');

const person = {
    name: 'John',
    age: 30,
    class: 'A',
    location: 'USA',
    "full name":"John Doe",
    [Mysymbol]: 'This is a symbol'
};

console.log(person.name);
console.log(person['full name']);
console.log(person[Mysymbol]);

person.location = 'UK';
// Object.freeze(person);
person.location = 'India'; // This will not work because we have freezed the object

console.log(person);

person.grerating = function(){
    return 'Hello';
}   
console.log(person.grerating());

person.grerating2 = function(){
    console.log(`Hello ${this.name}`);
}
console.log(person.grerating2());