import { UserController } from "@/app/controller/user";
import { User } from "@/app/model/User";
import { cookies } from "next/headers";
import { redirect } from 'next/navigation'

export async function POST(request : Request) {
    const userController = new UserController();
    const cookieStore = cookies()
    cookieStore.delete('token');
    return redirect('/')
}