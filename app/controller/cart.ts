import { Cart, CartModel } from "../model/Cart";
import { MainController } from "./mainController";

interface Item{
    id: string;
    name: string;
    price: number;
    stock: number;
}

export class CartController extends MainController{
    public constructor(cart?: Cart) {
        super();
        if (cart) {
            this.newCart = cart;
        }
    }

    async createCart(cart: Cart) {
        this.connectMongo();
        const newCart = new CartModel(cart);
        return await newCart.save();
    }

    async addProductToCart(id: string, product: Item) {
        this.connectMongo();
        const cart = await CartModel.findOne({cartId : id});        
        cart.product.push(product);
        const price = product.price ?? 0;
        const quantity = product.stock ?? 1;
        cart.totalPrice += price * quantity;
        const cartOid = cart._id;
        const up = await CartModel.findByIdAndUpdate(cartOid, cart, { new: true });

        return await CartModel.findById(cartOid);
    }

    async getCartById(id: string) {
        this.connectMongo();
        return await CartModel.findOne({cartId : id});
    }

    async updateCart(id: string, cart: Cart) {
        this.connectMongo();
        return await CartModel.findByIdAndUpdate(id, cart, { new: true });
    }

    async deleteItemFromCart(id: string, itemId: string) {
        this.connectMongo();
        const cart = await CartModel.findOne({cartId : id});
        const product = cart.product.find((item : any) => item.id === itemId);
        const price = product?.price ?? 0;
        const quantity = product?.stock ?? 1;
        cart.totalPrice -= price * quantity;
        cart.product = cart.product.filter((item : any) => item.id !== itemId);
        const cartOid = cart._id;
        const up = await CartModel.findByIdAndUpdate(cartOid, cart, { new: true });

        return await CartModel.findById(cartOid);
    }

    async clearCart(id: string) {
        this.connectMongo();
        return await CartModel.findByIdAndUpdate(id, {product: [], totalPrice: 0}, { new: true });
    }
}