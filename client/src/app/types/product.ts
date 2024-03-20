import { User } from "./user";

export interface Product {
    name: string,
    brand: string,
    imageUrl: string,
    description: string,
    price: number,
    category: String,
    status: string,
    _id: string,
    userId: User,
}