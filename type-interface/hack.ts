interface UserInterface {
    id: number;
    name: string;
    email?: string;
}

const user: UserInterface = { id: 1, name: "Amy" }
const userWithEmail: UserInterface = { id: 2, name: "Bruwi", email: "bbb@gmail.com" }

type User = {
    id: number,
    name: string,
    address: { city: string, zipCode: number }
}

const user2: User = {
    id: 3,
    name: "Cat",
    address: {
        city: "Seoul",
        zipCode: 12345,
    }
}

interface IUser {
    id: number;
    name: string;
    email?: string;
}

interface Admin extends IUser {
    role: string
}

const normalUser = {
    id: 1,
    name: "ABC",
    email: "abc@gmail.com"
}

const adminUser: Admin = {
    id: 2,
    name: "DEF",
    role: "Admin"
}

type Product = {
    id: number,
    name: string,
    price: number
}

type DiscountedProduct = Product & { discount: number }

const normalProduct = {
    id: 1,
    name: "Laptop",
    price: 1000,
};

const discountedProduct = {
    id: 2,
    name: "Smartphone",
    price: 800,
    discount: 10,
};

interface ProductType {
    id: number,
    name: string,
    price: number,
}

interface Order {
    orderId: number,
    products: Product[],
    totalPrice: number,
}

const order = {
    orderId: 101,
    products: [
        { id: 1, name: "Laptop", price: 1000 },
        { id: 2, name: "Mouse", price: 50 },
    ],
    totalPrice: 1050,
};

interface BaseUser {
    id: number;
    name: string;
}

type AdminUser = BaseUser & {
    role: string;
};

type GuestUser = BaseUser & {
    visitCount: number;
};

const admin: AdminUser = {
    id: 1,
    name: "Alice",
    role: "Administrator",
};

const guest: GuestUser = {
    id: 2,
    name: "Bob",
    visitCount: 5,
};
