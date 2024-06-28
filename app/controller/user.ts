import { User, UserModel } from '../model/User';
import { Token, TokenModel } from '../model/Token';
import { Cart, CartModel } from '../model/Cart';
import { MainController } from './mainController';
import { Otp, OtpModel } from "@/app/model/Otp";
import { OtpController } from "@/app/controller/otp";
import { Resend } from "resend";

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { EmailTemplate } from '../component/email-template';

export class UserController extends MainController {

    public constructor(user?: User) {
        super();
        if (user) {
            this.newUser = user;
        }
    }

    async registerUser(user: User) {
        const resend = new Resend("re_XQhCofnz_5qLHLAvLwoXU9mx8jzgxDREc")
        this.connectMongo();
        const otpGen = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
        const salt = await bcrypt.genSalt(10);
        user.pwd = await bcrypt.hash(user.pwd, salt);
        const newUser = new UserModel(user);
        const newOtp = new OtpModel({otp: otpGen, email: user.email});
        await newOtp.save();
        await newUser.save();
        this.newUser = user;

        try{
            const { data, error } = await resend.emails.send({
                from: 'Acme <onboarding@resend.dev>',
                to: [user.email],
                subject: 'OTP Verification',
                text: "OTP",
                react: EmailTemplate({ name: user.name, otp : otpGen }),
            });
            if (error) {
                console.error(error);
                return error;
            }
            return newUser;
        }catch (error) {
            console.error(error);
            return error;
        }
    }

    async getAllUsers() {
        this.connectMongo();
        return await UserModel.find();
    }

    async getUserById(id: string) {
        this.connectMongo();
        return await UserModel.findById(id);
    }

    async updateUser(id: string, user: User) {
        this.connectMongo();
        return await UserModel.findByIdAndUpdate(id, user, { new: true });
    }

    async deleteUser(id: string) {
        this.connectMongo();
        return await UserModel.findByIdAndDelete(id);
    }

    async loginUser(email: string, pwd: string) {
        this.connectMongo();
        const user = await UserModel.findOne({email : email});
        if (!user) {
            return 720; // User not found
        }
        const validPassword = await bcrypt.compare(pwd, user.pwd);
        if (!validPassword) {
            return 721; // Password incorrect
        } 
        const cartId = user.cartId;
        const profileId = user.profileId;        
        const token = jwt.sign({_id: user._id, cartUid: cartId, profileUid: profileId}, process.env.TOKEN_SECRET ?? '', {expiresIn: '7d'});
        const newToken = new TokenModel({token, email});
        newToken.save();
        
        return token;
    }

    async verifyUser(email : string){
        const user : User ={
            email: email,
            name: this.newUser.name,
            pwd: this.newUser.pwd,
            cartId: this.newUser.cartId,
            profileId: this.newUser.profileId,
            verified: true
        }
        this.connectMongo();
        const verifyUser = await UserModel.findOneAndUpdate({email : email}, user, {new: true});

    }
}