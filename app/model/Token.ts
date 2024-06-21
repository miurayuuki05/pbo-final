import { Schema, model } from "mongoose";
import mongoose from "mongoose";

export interface Token{
    token: string;
    email: string;
}

const tokenSchema = new Schema<Token>({
    token: String,
    email: String
});

const TokenModel = mongoose.models.Token || mongoose.model("Token", tokenSchema);

export { TokenModel };