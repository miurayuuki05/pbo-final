import { Schema, model } from "mongoose";
import mongoose from "mongoose";

export interface Otp{
    otp: number;
    email: string;
}

const otpSchema = new Schema<Otp>({
    otp: Number,
    email: String
});

const OtpModel = mongoose.models.Otp || mongoose.model("Otp", otpSchema);

export { OtpModel };