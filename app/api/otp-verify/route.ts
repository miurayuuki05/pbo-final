import { OtpController } from "@/app/controller/otp";

export async function POST(request : Request){
    const otpController = new OtpController()
    const requestBody = await request.json()
    const inputOtp = requestBody?.inputOtp

    otpController.verifyOtp()

}