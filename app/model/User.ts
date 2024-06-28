import {Schema, model } from "mongoose";
import mongoose from "mongoose";

export interface User{
    name: string;
    email: string;
    pwd: string;
    cartId: string;
    profileId : string;
    verified : boolean;
}

const userSchema = new Schema<User>({
    name: String,
    email: String,
    pwd: String,
    cartId : String,
    profileId : String,
    verified : Boolean
}); 

const UserModel = mongoose.models.User || mongoose.model("User", userSchema);

export { UserModel };