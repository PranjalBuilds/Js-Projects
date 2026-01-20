import { inventors } from "./data.js";
import { users } from "./data.js";
import { cart } from "./data.js";
import { usersCountry } from "./data.js";
import { products } from "./data.js";

// Map, Filter, ForEach

const born1500 = inventors
    .filter(inventor => (inventor.year >=1500 && inventor.year <1600))
    .map(inventor => inventor.first + " " + inventor.last)
    .forEach(inventor => console.log(inventor));



// Sort

const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.log(ordered);



// Reduce

// Traditional way with loops

let totalYear = 0;

for (let i = 0; i < inventors.length; i++) {
    totalYear += inventors[i].year;
}

console.log(totalYear);


//with reduce

const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);


// active users

const activeUsers = users.reduce((acc, u) => {
    if (u.isActive) {
        return acc === "" ? u.name : `\n${acc},\n${u.name}\n`;
    }
    return acc;
}, "");

console.log(activeUsers);


// traditional way for 'cart' iteration

let total = 0
for (const product of cart) {
    total += product.price * product.qty;
    
}
console.log(`total of cart products : ${total}`);


// with reduce

const totalCart = cart.reduce((acc, product) => {
    return acc + product.price * product.qty;
    // return acc;
}, 0);

console.log(`total of cart products (using Reduce) : ${totalCart}`);


// Grouping data by a property (using Reduce)

// Should look like :
/*

{
    India: [
        {
            name: "Arjun Mehta", 
            country: "India"
        },
    ]
    Germany: [
        {
            name: "Sophia Müller", 
            country: "Germany"
        },
    ]
    Japan: [
        {
            name: "Yuki Tanaka", 
            country: "Japan"
        },
    ]
    
    ..etc
}

*/ 


const usersCountryGrouped = usersCountry.reduce((acc, user) => {
    acc[user.country] = acc[user.country] || [];
    acc[user.country].push(user);
    return acc;
}, {})

console.log(usersCountryGrouped);


// Creating look up table or index map for faster retrieval of data

/*

{
    1: {
        id: 1,
        name: "Product 1",
        price: 100,
        qty: 2
    },
    2: {
        id: 2,
        name: "Product 2",
        price: 200,
        qty: 1
    },
    ..etc
}

*/
const indexMap =
products.reduce((acc, product) => {
    acc[product.id] = product;
    return acc;
}, {})

console.log("\n");
console.log(indexMap[105]);