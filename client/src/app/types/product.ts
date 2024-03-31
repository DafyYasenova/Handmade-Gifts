import { User } from "./user";

export interface Product {
    name: string,
    brand: string,
    imageUrl: string,
    description: string,
    price: number,
    category: string,
    status: string,
    time: string,
    _id: string,
    _ownerId?: User,
    _createdOn?: string,
    _updatedOn?:string,
}