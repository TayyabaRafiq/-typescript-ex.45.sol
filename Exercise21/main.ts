// Q21: Typescript Objects containing items:

interface item {
    name: string
    price: number
}
//create two object:
let book: item = {
    name: "ESSENTIAL TYPESCIPT",
    price: 450
}
let apples: item = {
    name: "apples",
    price: 200
}
console.log( `book name: ${book.name}, \nprice: $${book.price}`);
console.log( `apples name: ${apples.name}, \nprice: ${apples.price}`);