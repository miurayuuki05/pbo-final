import { User, UserModel } from '../model/User';
import { Token, TokenModel } from '../model/Token';
import { Cart, CartModel } from '../model/Cart';
import { MainController } from './mainController';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export class UserController extends MainController {

    public constructor(user?: User) {
        super();
        if (user) {
            this.newUser = user;
        }
    }

    async registerUser(user: User) {
        this.connectMongo();
        const salt = await bcrypt.genSalt(10);
        user.pwd = await bcrypt.hash(user.pwd, salt);
        const newUser = new UserModel(user);
        return await newUser.save();
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
}