import { CartItem } from "./CartItem";

export interface Order {
    id: number,
    firstName: string,
    lastName: string,
    orderedItems: CartItem[],
    deliveryDate: Date
}