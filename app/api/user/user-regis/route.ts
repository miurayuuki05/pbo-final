import { UserController } from "@/app/controller/user";
import { User } from "@/app/model/User";
import { randomUUID } from "crypto";
import { Cart } from "@/app/model/Cart";
import { CartController } from "@/app/controller/cart";
import { ProfileController } from "@/app/controller/profile";
import { Profile } from "@/app/model/Profile";

export async function POST(request : Request) {
    const userController = new UserController();
    const cartController = new CartController();
    const profileController = new ProfileController();
    const requestBody = await request.json();
    const cartUid = randomUUID();
    const profileUid = randomUUID();
    const user: User = {
        name: requestBody?.name,
        email: requestBody?.email,
        pwd: requestBody?.pwd,
        cartId: cartUid,
        profileId: profileUid
    };
    const cart: Cart = {
        cartId: cartUid,
        product: [],
        totalPrice: 0
    };
    const profile: Profile = {
        profileId: profileUid,
        name: requestBody?.name,
        email: requestBody?.email,
        cartId: cartUid,
        profileImg: '',
        phoneNum: '',
        address: '',
        gender: '',
    };
    const newUser = await userController.registerUser(user);
    const newCart = await cartController.createCart(cart);
    const newProfile = await profileController.createProfile(profile);
    return new Response(JSON.stringify(newUser), {
        headers: { 'content-type': 'application/json' },
    });
}