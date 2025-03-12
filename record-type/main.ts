// record 는 객체타입이 될 거예요!

type StringNumberMap = Record<string, number>

const example: StringNumberMap = {
    apple: "sss", //Type 'string' is not assignable to type 'number'.
    orange: 5,
    mango: 7
}

type FruitColor = Record<'apple' | 'orange' | 'mango', string>

const FruitColor: FruitColor = {
    apple: "red",
    orange: "orange",
    mango: "green"
}

type UserRole = "admin" | "user" | "guest"

type RolePermission = {
    admin: string,
    user: string,

}

type RolePermission2 = Record<UserRole, string>

type Product = { id: string; name: string; price: number }
type ProductInventory = Record<string, Product>
const inventoryResponse: ProductInventory = {
    apple: { id: "2", name: "apple", price: 2000 },
    orange: { id: "3", name: "orange", price: 2000 },
}