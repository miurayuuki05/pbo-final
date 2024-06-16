import { connect } from "mongoose";
import { ProductModel, Product } from "../model/Product";
import { User, UserModel } from "../model/User";
import { Token, TokenModel } from "../model/Token";
import { Cart, CartModel } from "../model/Cart";

export class MainController {
    linkMongo = process.env.MONGODB_LINK ?? '';

    protected newProduct: Product = {
        name: '',
        price: 0,
        stock: 0
    };

    protected newUser: User = {
        cartId: '',
        name: '',
        email: '',
        pwd: ''
    };

    protected newToken: Token = {
        token: '',
        email: ''
    };

    protected newCart: Cart = {
        cartId: '',
        product: [],
        totalPrice: 0
    };

    async connectMongo() {
        await connect(this.linkMongo);
    }

}