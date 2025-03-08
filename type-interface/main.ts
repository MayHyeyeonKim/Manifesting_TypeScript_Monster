interface IPerson {
    name: string;
    age: number;
    gender: string;
}

interface IForeigner extends IPerson {
    // name: string;
    // age: number;
    // gender: string;
    nationality: string;
}

// type TForeigner = IPerson & { nationality: string, period: Date }
type TForeigner = IPerson | { nationality: string, period: Date }

// interface INewForeigner extends TForeigner

let american: IForeigner = { nationality: "american", name: "Jacob", age: 23, gender: "F" }
let japanese: IPerson = { name: "Danaka", age: 23, gender: "M" }

let american2: TForeigner = { nationality: "american", period: new Date("") }




// interface IStudent {
//     name: string;
//     age?: number;
//     isStudent?: boolean;
// }

// type TStudent = {
//     name: string,
//     age?: number
// }

// type NewType = number | string //원시타입도 가능, 튜플타입

// type Tuple = [number, string, boolean]


// let b: IStudent = { name: "May", age: 30 }
// let c: TStudent = { name: "Nay" }

