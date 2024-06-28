import { OtpController } from "@/app/controller/otp";

export async function POST(request : Request){
    const otpController = new OtpController()
    const requestBody = await request.json()
    const inputOtp = requestBody?.inputOtp
    const email = requestBody?.email

    const isValid = await otpController.verifyOtp(email, inputOtp)
    if(isValid){
        await otpController.deleteOtp(email)
        return new Response(JSON.stringify({code : 200, status : "correct otp"}), {
            headers: { 'content-type': 'application/json' },
        });
    }
    return new Response(JSON.stringify({code : 400, status : "invalid otp"}), {
        headers: { 'content-type': 'application/json' },
    });
}