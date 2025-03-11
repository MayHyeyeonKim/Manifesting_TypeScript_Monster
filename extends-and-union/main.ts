// 교차타입: & 연산자 사용
// Intersection Type: & 연산자 사용

/**
type A = { a: number };
type B = { b: string };

type Intersection = A & B; // { a: number; b: string; }
type Union = A | B; // { a: number } 또는 { b: string }
 */

// type TProduct = {
//     id: string
//     name: string
//     price: number
//     discount?: number
// }


// type DiscountProduct = TProduct & { discountRatio: number }

// interface IProduct {
//     id: string
//     name: string
//     price: number

// }

// interface IDiscountProduct extends IProduct { discountRatio: number }

// type Popularity = {
//     rate: number
// }

// interface Review {
//     review: number
// }

// type Filter = Popularity & Review

// let filter: Filter = {
//     rate: 2.3,
//     review: 4.8
// }

// type Popularity = {
//     rate: number
// }

// interface Review {
//     rate: string
// }

// type Filter = Popularity & Review

// // & 연산자는 타입을 만들 수는 있지만, 충돌하는 속성이 있으면 never로 변함
// let filter: Filter = {
//     rate: 2.3 //never
// }

// // extends는 아예 타입을 만들지 못하게 막음 (변환(컴파일) 단계에서 에러 발생)
// // 코드를 실행하기 전에 변환하는 과정이 "컴파일 단계
// interface IFilter extends Popularity, Review {
//     // Interface 'IFilter' cannot simultaneously extend types 'Popularity' and 'Review'. Named property 'rate' of types 'Popularity' and 'Review' are not identical. 
// }


interface Product {
    img: string
    name: string
    description: string
}

type ApiResponse = {
    products: Product[],
    saleProducts: SaleProduct[]
}

interface SaleProduct extends Product { discountPercent?: number }

/**
//백엔드에서 이렇게 데이타를 보내줘
const apiResponse:ApiResponse = {
    products: [
        {img: "pants.png", name: "panpan", description: "24 new pants"},
        {img: "shirts.png", name: "ssshirts", description: "24 new shirts"},
    ],
    saleProducts: [
        {img: "jacket.png", name: "jacket", description: "24 new jacket", discountPercent:20},
        {img: "cap.png", name: "cap", description: "24 new cap", discountPercent:10},
    ]
}
 */

const apiResponse: ApiResponse = {
    products: [
        { img: "pants.png", name: "panpan", description: "24 new pants" },
        { img: "shirts.png", name: "ssshirts", description: "24 new shirts" },
    ],
    saleProducts: [
        { img: "jacket.png", name: "jacket", description: "24 new jacket", discountPercent: 20 },
        { img: "cap.png", name: "cap", description: "24 new cap", discountPercent: 10 },
    ]
}

// apiResponse = {
//     product: [{}, {}],
//     saleProducts: [{}, {}]
// }

apiResponse.products.map((item) => console.log(`${item.name}: No Discount`))
apiResponse.saleProducts.map((item) => console.log(item.name, `Discount: ${item.discountPercent}%`))

