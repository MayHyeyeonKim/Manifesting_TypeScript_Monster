let userName: string
let userAge: number
let isAdmin: boolean

userName = "Alice";
userAge = 25;
isAdmin = true;

let productName: string = "Laptop"
let productPrice: number = 3200
let isAvailable: boolean = true

console.log(`product name: ${productName}, price: $ ${productPrice}, stock: ${isAvailable}`)

function addNumbers(n: number, m: number): number {
    return n + m
}

console.log(addNumbers(5, 3))

function stringifyValue(value: string | null | undefined): string {
    return value === null || value === undefined ? "no value" : String(value)
}

console.log(stringifyValue("Hello"))
console.log(stringifyValue(null))
console.log(stringifyValue(undefined))

//switch statement 한번 써봤음 학습삼아
function compareValues(a: unknown, b: unknown): string {
    switch (true) {
        case a === b:
            return "===" //strict equality
        case a == b:
            return "==" //loose equality
        default:
            return "neither equal"
    }
}

// 🛠 Test cases
console.log(compareValues(5, "5"));           // "느슨한 동등성"
console.log(compareValues(null, undefined));  // "느슨한 동등성"
console.log(compareValues(false, 0));         // "느슨한 동등성"
console.log(compareValues(NaN, NaN));         // "동등하지 않음"
console.log(compareValues(42, 42));           // "엄격한 동등성"

// ✅ 원시 타입(Primitive Type) 확인 함수 작성하기
/**
TypeScript에서 **원시 타입(Primitive Type)**은 아래와 같은 값들을 포함:

string
number
boolean
null
undefined
bigint
symbol

그 외의 객체(Object), 배열(Array), 함수(Function) 등은 원시 타입이 아님.

 */

function isPrimitive(value: unknown): boolean {
    return value !== Object(value)
}

// 원시 타입(string, number, boolean)을 Object(value)로 변환하면, 객체로 감싸진 새로운 값이 만들어짐.
// 하지만 객체({}, [])는 변환해도 자기 자신과 동일함.

// 원시 타입이면 Object(value)가 새로운 객체를 생성 → value !== Object(value) 조건이 true
// 객체면 Object(value)가 자기 자신을 반환 → value !== Object(value) 조건이 false

// 아니면 typeof써도 된다.

function isPrimitive2(value: unknown): boolean {
    return (
        typeof value === "string" ||
        typeof value === "number" ||
        typeof value === "boolean" ||
        typeof value === "undefined" || value === null ||
        //👉 undefined는 typeof로 체크하는 것이 더 안전하고, null은 직접 비교하는 것이 올바른 방법! 🚀🔥
        typeof value === "symbol" ||
        typeof value === "bigint"
    )
}