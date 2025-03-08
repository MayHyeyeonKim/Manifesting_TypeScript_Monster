//any
let a: any = "May"
a = 3
a = true

//unknown
let b: unknown = "Nay"
b = 5
b = false


// 👉 any는 타입 검사를 건너뛰므로 위험!
// 👉 unknown은 타입 검사를 강제하여 any보다 안전함!
let b: string = a

let anyType: any
let unknownType: unknown

anyType = "hello"
unknownType = "hello"

// console.log(anyType.toUpperCase())
// console.log(unknownType.toUpperCase())

if (typeof unknownType === "string") {
    console.log(unknownType.toUpperCase())
}


//void 리턴타입이 없음
function double(a, b) {
    console.log(a, b)
}

interface NewType {
    name: string;
    age: number;
    double: (a: number, b: number) => void
}

//never 리턴타입이 있을 수가 없음

function infinite(): never {
    while (true) {

    }
    // for (; ;) {

    // } an infinite loop
}

function throwError(): never {
    throw new Error("always error")
}

type AorB = { a: number } | { b: number }