'use client'
import { useState } from "react"
import { useRouter } from "next/navigation";

export interface Profile{
  data: {
    name: string;
    email: string;
    cartId: string;
    profileImg : string;
    phoneNum : string;
    address : string;
    gender : string;
  }
}

export default function Profile(){
  const router = useRouter()
  const [userInfo, setUserLogin] = useState({
    email: '',
    pwd: ''
  })

  const userLogin = async () => {
    const res = await fetch('http://localhost:3000/api/user/user-login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: userInfo.email,
        pwd: userInfo.pwd
      })
    }).then(() => router.push('/profile'))
  }    

  return(
    <div className="flex justify-center bg-[#e2e2e2] h-screen drop-shadow-md">
        <div className="h-[380px] p-5 bg-white mt-24">
          <h3 className="font-bold text-2xl">Login</h3>
          <form className="flex flex-col mt-5">
            <label className="text-sm">Email</label>
            <input className="border p-1" type="text" placeholder="Email" onChange={(e) => setUserLogin({...userInfo, email: e.target.value})} required/>
            <label className="text-sm">Password</label>
            <input className="border p-1" type="password" placeholder="Password" onChange={(e) => setUserLogin({...userInfo, pwd: e.target.value})} required/>
            <div className="mt-5 w-16 text-center p-1 cursor-pointer rounded-full bg-neutral-300 hover:bg-neutral-500" onClick={userLogin}>Login</div>
          </form>
          <div className="text-xs mt-5"><p>Don't have an account? <span className="text-blue-500 cursor-pointer">Register</span></p></div>
        </div>
    </div>
  )
}