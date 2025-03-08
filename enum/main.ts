//열거형타입

enum Gender {
    FEMALE = "Female",
    MALE = "Male"
}

// let gender: string = "Female"
let gender: Gender = Gender.FEMALE

// gender = "alien"
// gender = "May"
// gender = "Nay"

// enum SearchType {
//     Date, //0
//     KEYWORD, //1
//     ORDER //2
// }

// console.log("hey", SearchType.Date) //0
// console.log("hey", SearchType.KEYWORD) //1
// console.log("hey", SearchType.ORDER) //2


// By default, TypeScript compiles enum into an object, which makes it harder for tree shaking to remove unused values.

// enum SearchType {
//     Date = "Date",
//     KEYWORD = "Keyword",
//     ORDER = "Order"
// }

const enum SearchType {
    Date = "Date",
    KEYWORD = "Keyword",
    ORDER = "Order"
} //트리쉐이킹위해서 const! 객체로 하면 트리쉐이킹 힘듦

console.log("hey", SearchType.Date)
console.log("hey", SearchType.KEYWORD)
console.log("hey", SearchType.ORDER)


