'use client'
import { useState, useEffect } from "react"
import { useCookies } from "next-client-cookies";

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
  const cookies = useCookies()
  const token = cookies.get('token')
  const [profile, setProfile] = useState<Profile>()
  const [profileState, setProfileState] = useState(false)
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
    })
    const data = await res.json()
  }    

  useEffect(() => {
    fetch('http://localhost:3000/api/user/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`
      },
      body: JSON.stringify({
        pci : "thisSi"
      })
    })
      .then(res => res.json())
      .then(data => setProfile(data))
      .then(() => setProfileState(true))
    
  }, [])

  return(
    <div>
      {profileState ? (
        <div>
          <h1>{profile?.data?.name}</h1>
          <h2>{profile?.data?.email}</h2>
          <h3>{profile?.data?.phoneNum}</h3>
          <h4>{profile?.data?.address}</h4>          
        </div>
      ) : (
        <div>
          Loading...
        </div>
      )}
    </div>
  )
}