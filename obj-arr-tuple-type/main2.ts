let a: object = {}
let b: object = { name: "Mayy" }
let c: object = { name: "May", age: 100 }
console.log(b.name) //obj이라고는 했지 obj안에 name이 있는건 명시하지 않으니 에러남

// 그래서 딱 정확히 정의해야함 
let bb: { name: string } = { name: "Mayy" }
let cc: { name: string, age: number } = { name: "Mayy", age: 100 }

//Optional Chaining
let bbb: { name: string } = { name: "Mayy" }
let ccc: { name: string, age?: number } = { name: "Mayy", age: 100 }

//readonly
let bbbb: { readonly name: string } = { name: "Mayy" }
let cccc: { readonly name: string, age?: number } = { name: "Mayy", age: 100 }

bbbb.name = "Nayyy" // ❌ bbbb.name is read-only

let fruits: string[] = ["banana", "apple"]

// 👉 둘 다 number 타입의 배열을 나타냄!
// 👉 기능적으로 완전히 동일하지만 표기법(Notation)이 다름
let numbers: Array<number> = [1, 2, 3, 4] //제네릭(Generic) 표기법
let numbers: number[] = [1, 2, 3, 4] //간단한 배열 표기법

// 일반적으로 number[] 표기법을 더 많이 사용하지만, Array < T > 가 필요한 경우가 있다. => Promise와 함께 사용될 때, 다차원 배열을 명확하게 표현할 때 [[1, 2], [3, 4]];

let students: { name: string, age?: number }[] = [{ name: "May", age: 120 }, { name: "Nay" }]

/**
📌 튜플(Tuple) 이란?
✅ **튜플(Tuple)**은 TypeScript에서 "고정된 길이와 순서"를 가지는 배열
✅ 각 요소의 타입을 지정할 수 있으며, 순서가 중요함!
✅ 일반 배열(number[])과 다르게, 특정 위치에 특정 타입이 와야 함
 */

let tuple: [string, number] = [25, "Alice"]
tuple = ["Benchuchu", 30, true] // ❌

let tuple2: [string | number | boolean, number] //첫번째 튜플에는 string | number | boolean 중 하나, 두번쨰 튜플에는 number만 사용가능
tuple2 = ["Alice", 25]; // ✅ 첫 번째는 string | number | boolean, 두 번째는 number
tuple2 = ["Alice", true]; // ❌ 두 번째 요소는 number여야 함
tuple2 = [false];  // ❌ 두 개의 요소가 필요함