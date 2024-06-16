import { UserController } from "@/app/controller/user";
import { User } from "@/app/model/User";
import { randomUUID } from "crypto";
import { Cart } from "@/app/model/Cart";
import { CartController } from "@/app/controller/cart";

export async function POST(request : Request) {
    const userController = new UserController();
    const cartController = new CartController();
    const requestBody = await request.json();
    const cartUid = randomUUID();
    const user: User = {
        name: requestBody?.name,
        email: requestBody?.email,
        pwd: requestBody?.pwd,
        cartId: cartUid
    };
    const cart: Cart = {
        cartId: cartUid,
        product: [],
        totalPrice: 0
    };
    const newUser = await userController.registerUser(user);
    const newCart = await cartController.createCart(cart);
    return new Response(JSON.stringify(newUser), {
        headers: { 'content-type': 'application/json' },
    });
}