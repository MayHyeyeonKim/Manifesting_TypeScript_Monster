// // Define user type
// let user: { name: string; age?: number; isAdmin: boolean } = {
//     name: "Alice",
//     isAdmin: true,
// };

// // ✅ You can reassign an object with the same structure
// user = {
//     name: "Bob",
//     age: 40,
//     isAdmin: false,
// };

// //Readonly
// const numbers: readonly number[] = [1, 2, 3];

// // ❌ These operations will cause an error:
// numbers.push(4);   // Error! Cannot push to a readonly array.
// numbers[0] = 10;   // Error! Cannot modify a readonly array.
// numbers.pop();     // Error! Cannot remove elements.

// //Processing Product Data
// const products: [string, number, boolean][] = [
//     ["Laptop", 1000, true],
//     ["Shoes", 50, false],
//     ["Book", 20, true],
// ];

// function getProductNamesAndPrices(products: [string, number, boolean][]): [string, number][] {
//     return products.map(([name, price]) => [name, price])
// }

// function getAvailableProducts(products: [string, number, boolean][]): [string, number, boolean][] {
//     return products.filter(([name, price, inStock]) => inStock)
// }

// console.log(getProductNamesAndPrices(products));
// // [["Laptop", 1000], ["Shoes", 50], ["Book", 20]]

// console.log(getAvailableProducts(products));
// // [["Laptop", 1000, true], ["Book", 20, true]]

// //Updating User Information
// function updateUser(user: { name: string; age?: number }): {
//     name: string;
//     age: number;
// } {
//     return { ...user, age: user.age ?? 18 };
// }

// console.log(updateUser({ name: "Charlie" })); // { name: "Charlie", age: 18 }
// console.log(updateUser({ name: "Dana", age: 25 })); // { name: "Dana", age: 25 }

// //Filtering products by Category
// const products: { name: string; price: number; category?: string }[] = [
//     { name: "Laptop", price: 1000, category: "Electronics" },
//     { name: "Shoes", price: 50, category: "Fashion" },
//     { name: "Book", price: 20 },
// ];

const products = [
    { name: "Laptop", price: 1000, category: "Electronics" },
    { name: "Shoes", price: 50, category: "Fashion" },
    { name: "Book", price: 20 } // category 없음 (undefined)
];

function getProductsByCategory(category: string): string[] {
    return products
        .filter(product => product.category === category)
        .map(product => product.name);
}

console.log(getProductsByCategory("Electronics")); // ["Laptop"]
console.log(getProductsByCategory("Fashion")); // ["Shoes"]
console.log(getProductsByCategory("Books")); // []