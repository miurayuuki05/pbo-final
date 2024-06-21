import { Otp, OtpModel } from "../model/Otp";
import { MainController } from "./mainController";

export class OtpController extends MainController{
    public constructor(otp?: Otp) {
        super();
        if (otp) {
            this.newOtp = otp;
        }
    }    

    async createOtp(otp : Otp){
        this.connectMongo();
        const newOtp = new OtpModel(otp);
        return await newOtp.save();
    }

    async getOtpByAuth(auth: string) {
        this.connectMongo();
        return await OtpModel.findOne({token: auth});
    }

    async verifyOtp(email : string, inputOtp : number){
        this.connectMongo();
        const otpDb = OtpModel.findOne({email : email})
        return true
    }

    async deleteOtp(email: string) {
        this.connectMongo();
        return await OtpModel.findOneAndDelete({email: email});
    }
}