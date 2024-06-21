import { UserController } from "@/app/controller/user";
import { User } from "@/app/model/User";
import { randomUUID } from "crypto";
import { Cart } from "@/app/model/Cart";
import { CartController } from "@/app/controller/cart";
import { ProfileController } from "@/app/controller/profile";
import { Profile } from "@/app/model/Profile";
import { Otp } from "@/app/model/Otp";
import { OtpController } from "@/app/controller/otp";
import { Resend } from "resend";
import { EmailTemplate } from "@/app/component/email-template";

const resend = new Resend("re_XQhCofnz_5qLHLAvLwoXU9mx8jzgxDREc")

export async function POST(request : Request) {
    const userController = new UserController();
    const cartController = new CartController();
    const profileController = new ProfileController();
    const otpController = new OtpController()
    const requestBody = await request.json();
    const cartUid = randomUUID();
    const profileUid = randomUUID();
    const otpGen = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
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
    const otpDb: Otp = {
        email: requestBody?.email,
        otp: otpGen
    }

    const name : string = requestBody?.name
    const email : string = requestBody?.email

    const newOtp = await otpController.createOtp(otpDb)
    const newUser = await userController.registerUser(user);
    const newCart = await cartController.createCart(cart);
    const newProfile = await profileController.createProfile(profile);
    try{
        const { data, error } = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: [email],
            subject: 'OTP Verification',
            text: "OTP",
            react: EmailTemplate({ name: name, otp : otpGen }),
        });
        if (error) {
            return Response.json({ error }, { status: 500 });
        }
        return new Response(JSON.stringify(newUser), {
            headers: { 'content-type': 'application/json' },
        });
    }catch (error) {
        return Response.json({ error }, { status: 500 });
    }
}