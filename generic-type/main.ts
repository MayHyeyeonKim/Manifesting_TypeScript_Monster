//제네릭타입 <> 꺽쇠에 넣는거

// type ArrayType<T> = T[]

// const numberArray: ArrayType<number> = [1, 2, 3]
// const stringArray: ArrayType<string> = ["a", "b"]

//제네릭타입 데이타패치할 떄 국룰처럼 쓰임


//Movie
// {
//     status: "ok",
//         totalPage: 20,
//             totalResult: 300,
//                 page: 1,
//                     data: [{ title: "r", genre: "action" }, { title: "t", genre: "horror" }, { title: 7, genre: "family" }]
// }
// //TV
// {
//     status: "ok",
//         totalPage: 20,
//             totalResult: 300,
//                 page: 1,
//                     data: [{ series: "r", runningTime: "120" }, { series: "t", runningTime: "120" }, { series: 7, runningTime: "120" }]
// }
/**
type CategoryResponse = {
    status: string,
    totalPage: number,
    totalResult: number,
    page: number,
    data: { name: string }[]
}

type MovieResponse = {
    status: string,
    totalPage: number,
    totalResult: number,
    page: number,
    data: { title: string, genre: string }[]
}

이렇게 하면 status, totalPage, totalResult가 겹치니까 제네릭 타입을 써야한다.

그리고 이건 그냥 메모: T는 제네릭 타입을 나타내는 임의의 타입 변수. 특정한 단어의 약자가 아니라, 관습적으로 T(Type의 첫 글자)를 많이 사용할 뿐
 */

// type ApiResponse<T> = {
//     status: string,
//     totalPage: number,
//     totalResult: number,
//     page: number,
//     data: T[]
// }

// type CategoryResponse = ApiResponse<{ name: string }>
// type MovieResponse = ApiResponse<{ title: string, genre: string }>


// type Category = {
//     name: string
// }

// type Movie = {
//     title: string,
//     genre: string
// }

// type CategoryResponse = ApiResponse<Category>
// type MovieResponse = ApiResponse<Movie>

// let movieDate: MovieResponse = {
//     status: "ok",
//     totalPage: 20,
//     totalResult: 300,
//     page: 1,
//     data: [{ title: "r", genre: "120" }, { title: "t", genre: "120" }, { title: 7, genre: "120" }]
// }

// //내가 유즈스테이트 만드는 사람이라면
// function useState<T>(initVal: T): [T, function<T>] {
//     return [value, function]
// }

// const [value, setValue] = useState(true)
// const [value2, setValue2] = useState<boolean>(false)

interface Length {
    length: number
}

function getValue<T extends Length>(data: T) {
    console.log(data.length)
}