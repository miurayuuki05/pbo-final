import { Schema, model } from "mongoose";
import mongoose from "mongoose";

export interface Cart{
    cartId : string;
    product: {
        id : string;
        name: string;
        price: number;
        stock: number;
    }[];

    totalPrice: number;
}

const cartSchema = new Schema<Cart>({
    cartId : String,
    product: [{
        id: String,
        name: String,
        price: Number,
        stock: Number
    }],
    totalPrice: Number
});

const CartModel = mongoose.models.Cart || mongoose.model("Cart", cartSchema);

export { CartModel };

