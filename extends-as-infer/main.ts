// interface Track {
//     title: string;
//     releaseDate: string;
// }

// interface Artist {
//     name: string;
//     debutYear: number;
// }

// type SearchItem<T extends "track" | "artist"> =
//     T extends "track" ? Track : Artist

// const result: SearchItem<"track"> = {
//     title: "hey",
//     releaseDate: "2024",
//     name: "noona",
//     debutYear: 2,
// };


// infer 추론

// type ReturnTypeOfFunction<T> = T extends (...args: any[]) => infer R ? R : never;

// function getUserInfo() {
//     return { name: "Aloic", age: 25 }
// }

// type UserInfo = ReturnTypeOfFunction<typeof getUserInfo>;

// type UnwrapPromise<T> = T extends Promise<infer U> ? U : T;

// type PromiseString = Promise<string>

// type Result = UnwrapPromise<PromiseString>

// // [{}, {}, {}] 배열

// type ElementType<T> = T extends (inter U)[] ? U : T
// type ArrayOfNumbers = number[];

// type SingleNumber = ElementType<ArrayOfNumbers>


// as 이거라고 확신해!
let someValue: unknown = "Hello, world"

// string, number, object일 수도 있지만, TypeScript는 안전하게 처리하려고 직접 접근을 막음.
// 그래서 someValue.length를 바로 접근하면 컴파일 오류가 발생해.


// console.log(someValue.length)
console.log((someValue as string).length); // ✅ 강제로 string 취급


let newValue = someValue as string
console.log(newValue.length)

const inputElement = document.querySelector('input')
const input = inputElement as HTMLInputElement
input.value = "asdada"

let value: any = "I am a string!"
let numberValue = value as number // <- 강제 형변환

numberValue + 1

// as 남발하면 안됨. free will로 막 쓰면 예상치 못한 버그 터질 수 있어!

