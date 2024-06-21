import {Schema, model } from "mongoose";
import mongoose from "mongoose";

export interface Product {
    name: string;
    price: number;
    stock: number;
}

const productSchema = new Schema<Product>({
    name: String,
    price: Number,
    stock: Number
});

const ProductModel =  mongoose.models.Product || mongoose.model("Product", productSchema);

export { ProductModel };

