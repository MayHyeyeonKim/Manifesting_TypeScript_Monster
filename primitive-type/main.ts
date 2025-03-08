// string
// number(정수 소수 음수..)
// boolean(true, false)
// null(null도 타입임.널 밖에 안됨.)
// undefined(undefined밖에 안됨.)
// // ------------------------------
// symbol(절대 변경 불가능한 값, 잘 안쓰네)
// bigint(큰숫자)

// 얘네 소문자여야함.
// 대문자는 객체가 됨.

let a: number = 3 //너는 영원히 넘버일꺼야!!!
a = 4
a = 9.0
a = -8.8

// a = "string" //이럼 에러지! 자바스크립트에서는 에러안나쥐

let b = true //Eventho no type is explicitly specified, ts can still infer it
// b = "string" //But it's better not to rely on type inference.

// let bb: null = 3 //❌
// let bb: null = undefined //❌
// let bb: null = null //✅

let c: undefined = undefined

//null vs undefinde
/**
null은 값이 없고싶어서 널이고
undefined은 아직 정해지지 않아서~, 뒤에서 바뀔 수 있쥐

node는 js만 이해함 (tsc main.ts로 run하기! -> 컴파일러 실행하면 js로 결과물 나옴)
 */

function double(n: number): number {
    return n * 2
}
console.log(double(4)) // 8
console.log(double("h")) // Argument of type 'string' is not assignable to parameter of type 'number'

// 리턴값넣는 곳에 void쓰면 리턴값없다 없어도 infer함!

