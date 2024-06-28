import { connect } from "mongoose";
import { ProductModel, Product } from "../model/Product";
import { User, UserModel } from "../model/User";
import { Token, TokenModel } from "../model/Token";
import { Cart, CartModel } from "../model/Cart";
import { Profile, ProfileModel } from "../model/Profile";
import { Otp, OtpModel } from "../model/Otp";

export class MainController {
    linkMongo = process.env.MONGODB_LINK ?? '';

    protected newProduct: Product = {
        name: '',
        price: 0,
        stock: 0
    };

    protected newUser: User = {
        name: '',
        email: '',
        pwd: '',
        cartId: '',
        profileId: '',
        verified: false
    };

    protected newToken: Token = {
        token: '',
        email: ''
    };

    protected newOtp: Otp = {
        otp: 0,
        email: ''
    };

    protected newCart: Cart = {
        cartId: '',
        product: [],
        totalPrice: 0
    };

    protected newProfile: Profile = {
        profileId: '',
        name: '',
        email: '',
        cartId: '',
        profileImg: '',
        phoneNum: '',
        address: '',
        gender: ''
    };

    async connectMongo() {
        await connect(this.linkMongo);
    }

}