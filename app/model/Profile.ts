import {Schema, model } from "mongoose";
import mongoose from "mongoose";

export interface Profile{
    profileId: string;
    name: string;
    email: string;
    cartId: string;
    profileImg : string;
    phoneNum : string;
    address : string;
    gender : string;
}

const profileSchema = new Schema<Profile>({
    profileId: String,
    name: String,
    email: String,
    cartId : String,
    profileImg : String,
    phoneNum : String,
    address : String,
    gender : String
}); 

const ProfileModel = mongoose.models.Profile || mongoose.model("Profile", profileSchema);

export { ProfileModel };