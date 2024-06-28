'use client'
import { useState } from "react"
import { useRouter } from "next/navigation";

export default function Register(){
  const router = useRouter()
  const [userInfo, setUserRegis] = useState({
    name: '',
    email: '',
    pwd: ''
  })

  const userRegister = async () => {
    const res = await fetch('http://localhost:3000/api/user/user-regis', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: userInfo.name,
        email: userInfo.email,
        pwd: userInfo.pwd
      })
    }).then(() => router.push('/verify-otp'))
  }    

  return(
    <div className="flex justify-center bg-[#e2e2e2] h-screen drop-shadow-md">
        <div className="h-[380px] p-5 bg-white mt-24">
          <h3 className="font-bold text-2xl">Register</h3>
          <form className="flex flex-col mt-5">
            <label className="text-sm">Name</label>
            <input className="border p-1" type="text" placeholder="Name" onChange={(e) => setUserRegis({...userInfo, name: e.target.value})} required/>
            <label className="text-sm">Email</label>
            <input className="border p-1" type="text" placeholder="Email" onChange={(e) => setUserRegis({...userInfo, email: e.target.value})} required/>
            <label className="text-sm">Password</label>
            <input className="border p-1" type="password" placeholder="Password" onChange={(e) => setUserRegis({...userInfo, pwd: e.target.value})} required/>            
            <div className="cursor-pointer" onClick={userRegister}>Register</div>
          </form>
        </div>
    </div>
  )
}