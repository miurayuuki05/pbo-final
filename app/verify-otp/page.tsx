'use client'
import { useState } from "react"
import { useRouter } from "next/navigation";

export default function Register(){
  const router = useRouter()
  const [inputOtp, setInputOtp] = useState(0)
  const [emailOtp, setEmailOtp] = useState('')
  const [otp, setOtp] = useState('')

  const verifyUser = async () => {
    const res = await fetch('http://localhost:3000/api/otp-verify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        inputOtp: inputOtp,
        email: emailOtp
      })
    })
    const data = await res.json()
    if(data.code == 200){
      router.push('/profile')
    }else{
      setOtp(data.status)
    }
  }    

  return(
    <div className="flex justify-center bg-[#e2e2e2] h-screen drop-shadow-md">
        <div className="h-[380px] p-5 bg-white mt-24">
          <h3 className="font-bold text-2xl">Register</h3>
          <form className="flex flex-col mt-5">
            <label className="text-sm">OTP</label>
            <input className="border p-1" type="text" placeholder="OTP" onChange={(e) => setOtp(e.target.value)} required/>
            <label className="text-sm">Email</label>
            <input className="border p-1" type="text" placeholder="Email" onChange={(e) => setEmailOtp(e.target.value)} required/>
            <p><span>{otp}</span></p>
            <div className="cursor-pointer" onClick={verifyUser}>Verify</div>
          </form>
        </div>
    </div>
  )
}