import { UserController } from "@/app/controller/user";
import { User } from "@/app/model/User";
import { cookies } from "next/headers";

export async function POST(request : Request) {
    const userController = new UserController();
    const requestBody = await request.json();
    const [email, pwd] = [requestBody?.email, requestBody?.pwd];

    const logUser = await userController.loginUser(email, pwd);

    if(logUser === 720){
        return new Response(JSON.stringify({message: "User not Found"}), {
            headers: { 'content-type': 'application/json' },
        });
    }
    if(logUser === 721){
        return new Response(JSON.stringify({message: "Password incorrect"}), {
            headers: { 'content-type': 'application/json' },
        });
    }
    const cookieStore = cookies()
    cookieStore.set({
        name: 'token',
        value: logUser,
        secure: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7),
    })

    return new Response(JSON.stringify(logUser), {
        headers: { 'content-type': 'application/json' },
    });
}