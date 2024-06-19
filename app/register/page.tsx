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
    }).then(() => router.push('/profile'))
  }    

  return(
    <div>
        <div>
          <form>
            <input type="text" placeholder="Name" onChange={(e) => setUserRegis({...userInfo, name: e.target.value})} required/>
            <input type="text" placeholder="Email" onChange={(e) => setUserRegis({...userInfo, email: e.target.value})} required/>
            <input type="password" placeholder="Password" onChange={(e) => setUserRegis({...userInfo, pwd: e.target.value})} required/>            
            <div className="cursor-pointer" onClick={userRegister}>Register</div>
          </form>
        </div>
    </div>
  )
}