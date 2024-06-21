import { OtpController } from "@/app/controller/otp";

export async function POST(request : Request){
    const otpController = new OtpController()
    const requestBody = await request.json()
    const inputOtp = requestBody?.inputOtp
    const email = requestBody?.email

    const isValid = await otpController.verifyOtp(email, inputOtp)
    if(isValid){
        return {
            status: 200,
            body: {
                message: "Otp is valid"
            }
        }
    }
    return {
        status: 400,
        body: {
            message: "Otp is invalid"
        }
    }
}