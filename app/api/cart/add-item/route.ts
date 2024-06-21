import { CartController } from "@/app/controller/cart";
import { Cart } from "@/app/model/Cart";
import { TokenController } from "@/app/controller/token";
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken';

export async function POST(request : Request) {
    const cartController = new CartController();
    const requestBody = await request.json();
    const products = requestBody;
    const authHeader = request.headers.get('Authorization');
    const tokenDb = new TokenController();
    const bearerValue = authHeader?.split(' ')[1] ?? '';
    const token = await tokenDb.getTokenByAuth(bearerValue ?? '');    

    if(!token){
        return new Response(JSON.stringify({message: "Unauthorized"}), {
            headers: { 'content-type': 'application/json' },
        });
    }

    const localToken = cookies().get('token')?.value ?? "";
    const decoded : any = jwt.verify(localToken, process.env.TOKEN_SECRET ?? '')?? "";
    const cartId : any = decoded?.cartUid;
    const userCart = await cartController.addProductToCart(cartId, products);
    
    return new Response(JSON.stringify(userCart), {
        headers: { 'content-type': 'application/json' },
    });
    
}