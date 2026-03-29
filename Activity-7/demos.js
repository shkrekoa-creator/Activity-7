console.log("=== Activity 7: Product Catalog Display ===");

// Array Demonstrations
console.log("\n=== ARRAY DEMONSTRATIONS ===");

const numbersArray = [1, 2, 3, 4, 5];
const colorsArray = new Array('red', 'green', 'blue');
const mixedArray = [42, 'hello', true, null, {name: 'John'}];

console.log("Numbers array:", numbersArray);
console.log("Colors array:", colorsArray);
console.log("Mixed array:", mixedArray);

// Array methods
console.log("\nArray Methods:");
const fruits = ['apple', 'banana'];
fruits.push('orange');
const lastFruit = fruits.pop();
fruits.unshift('grape');
const firstFruit = fruits.shift();
console.log("Fruits after operations:", fruits, lastFruit, firstFruit);

// Array iteration
console.log("\nArray Iteration Methods:");
numbersArray.forEach((num, i) => console.log(`forEach - Index ${i}: ${num}`));
const doubled = numbersArray.map(num => num * 2);
console.log("Doubled values:", doubled);
const evens = numbersArray.filter(num => num % 2 === 0);
console.log("Even numbers:", evens);

// Object demonstrations
console.log("\n=== OBJECT DEMONSTRATIONS ===");
const person = { firstName: 'John', lastName: 'Doe', age: 30, city: 'NY' };
person.email = 'john@example.com';
delete person.city;
console.log("Person object:", person);

// Arrays of objects
const items = [
    { name: 'Laptop', price: 999.99, inStock: true },
    { name: 'Mouse', price: 29.99, inStock: true },
    { name: 'Monitor', price: 249.99, inStock: false }
];
console.log("Items in stock:", items.filter(i => i.inStock));
console.log("Item names:", items.map(i => i.name));
console.log("Total price:", items.reduce((sum,i)=>sum+i.price,0).toFixed(2));

console.log("\n=== Array and object demonstrations complete! ===");