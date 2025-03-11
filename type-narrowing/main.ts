//Union Type

// type Track = {
//     title: string,
//     releaseDate: string
// }

// type Artist = {
//     name: string,
//     releaseDate: string
// }

// type SearchResult = Track | Artist

// interface SearchResponse {
//     searchResult: Track | Artist
// }

// let results: SearchResult[] = [{ title: "hello", releaseDate: "2025" }, { name: "hi", releaseDate: "2026" }]

// function getName(result: Track | Artist) {
//     return result.name
// }

// Type Narrowing
// 👉 유니언 타입(|)과 같은 넓은 타입을 더 구체적인 타입으로 좁혀서 안전하게 사용하는 기법
// 1️⃣ typeof 연산자 사용 (원시 타입 좁히기) -> 이건 프리미티브만!!
// 2️⃣ in 연산자 사용 (객체 타입 좁히기)
// 3️⃣ instanceof 연산자 사용 (클래스 타입 좁히기) -> 객체 타입 잡을 수 있음
// 4️⃣ 타입 가드 함수 사용 (사용자 정의 타입 가드) -> is!!!

// 1️⃣ typeof 연산자 사용 (원시 타입 좁히기) -> 이건 프리미티브만!!
// type SearchType = number | string
// function searchByKeyword(keyword: SearchType): string {
//     //넘버로 들어오는 타입은 스트링으로 바꿔주기
//     if (typeof keyword === "number") return keyword.toString()
//     return keyword
// }

// console.log(searchByKeyword(3), typeof searchByKeyword(3))

// typeof는 프리미티브 타입에서만 가능

// 2️⃣ in 연산자 사용 (객체 타입 좁히기)
// type Track = {
//     title: string,
//     releaseDate: string,
// }

// type Artist = {
//     name: string,
//     relaseDate: string
// }

// function getName(result: Track | Artist) {
//     if ("title" in result) return result.title
//     if ("name" in result) return result.name
// }

// 3️⃣ instanceof 연산자 사용 (클래스 타입 좁히기) -> 객체 타입 잡을 수 있음
// type Period = {
//     start: string,
//     end: string
// }

// type SearchType = Period | Date

// function getDate(day: SearchType): Date {
//     if (day instanceof Date) return day
//     return new Date(day.start)
// }

// getDate({ start: "2025-03-10", end: "" })

// 4️⃣ 타입 가드 함수 사용 (사용자 정의 타입 가드) -> is
type Track = {
    title: string,
    releaseDate: string,
}

type Artist = {
    name: string,
    releaseDate: string
}

function isTrack(result: Track | Artist): result is Track {
    return (result as Track).title !== undefined
}

function isArtist(result: Track | Artist): result is Artist {
    return (result as Artist).name !== undefined
}
//result is Track, result is Artist 결과값 타입을 boolean으로 하면 안됨! => 이 함수의 리턴값이 정확히 뭐인지 딱 정해줘야함!


function printInfo(result: Track | Artist) {
    if (isTrack(result)) {
        console.log(result.title)
    }
    if (isArtist(result)) {
        console.log(result.name)
    }
}