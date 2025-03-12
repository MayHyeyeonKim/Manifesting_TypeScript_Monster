// 1. Omit 뺀다

// interface User {
//     id: number;
//     name: string;
//     email: string;
//     password: string;
// }

// type PublicUser = Omit<User, "password">



// let userProfile: PublicUser = {
//     id: 2,
//     name: "May",
//     email: "may@gmail.com",
//     password: "123123", //Object literal may only specify known properties, and 'password' does not exist in type 'PublicUser'.
// }


// 2. Pick

// interface User {
//     id: number;
//     name: string;
//     email: string;
//     password: string;
// }

// interface BasicUserInfo {
//     id: number,
//     name: string,
// }

// type BasicUserInfo = Pick<User, "id" | "name">

// 3. Partial => ?

interface Address {
    street: string;
    city: string;
    country: string;
}

// 모든 필드에 ?를 넣은 효과를 냄

const updatedAddress = (address: Partial<Address>) => {
    console.log(address)
}

updatedAddress({ street: "234", city: "Inchen" })



