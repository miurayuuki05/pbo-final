import { ProfileController } from "@/app/controller/profile";
import { Profile } from "@/app/model/Profile";
import { TokenController } from "@/app/controller/token";
import { cookies } from "next/headers";
import jwt from 'jsonwebtoken';

export async function POST(request : Request) {
    const profileController = new ProfileController();
    const requestBody = await request.json();
    const authHeader = request.headers.get('Authorization');
    const tokenDb = new TokenController();
    const bearerValue = authHeader?.split(' ')[1] ?? '';
    const token = await tokenDb.getTokenByAuth(bearerValue) ?? "NOT_EXIST";    

    if(!token){
        return new Response(JSON.stringify({message: "Not Logged In"}), {
            headers: { 'content-type': 'application/json' },
        });
    }

    const localToken = cookies().get('token')?.value ?? "";
    let decoded : any = "";
    try{
        const data : any = jwt.verify(localToken, process.env.TOKEN_SECRET ?? '')?? "";
        decoded = data;
    }catch(err){
        return new Response(JSON.stringify({message: "Not Logged in"}), {
            headers: { 'content-type': 'application/json' },
        });
    }
    const profileId : any = decoded?.profileUid;
    const userProfile = await profileController.getUserProfileById(profileId);
    
    return new Response(JSON.stringify({message : "success", data : userProfile}), {
        headers: { 'content-type': 'application/json' },
    });
}