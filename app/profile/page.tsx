'use client'
import { useState, useEffect, useRef } from "react"
import { useCookies } from "next-client-cookies";
import type { PutBlobResult } from '@vercel/blob';
import { FaShoppingCart } from "react-icons/fa";


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
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [isImage, setIsImage] = useState(false)
  const cookies = useCookies()
  const token = cookies.get('token')
  const [profile, setProfile] = useState<Profile>()
  const [profileState, setProfileState] = useState(false)
  const [userInfo, setUserLogin] = useState({
    email: '',
    pwd: ''
  })
  const [newName, setNewName] = useState('')
  const [newPhoneNum, setNewPhoneNum] = useState('')
  const [newAddress, setNewAddress] = useState('')

  const updateProfile = async () => {
    fetch('http://localhost:3000/api/user/profile/edit-profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`
      },
      body: JSON.stringify({
        name: newName,
        phoneNum: newPhoneNum,
        address: newAddress
      })
  })
  }


  // const userLogin = async () => {
  //   const res = await fetch('http://localhost:3000/api/user/user-login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       email: userInfo.email,
  //       pwd: userInfo.pwd
  //     })
  //   })
  //   const data = await res.json()
  // }    

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
      .then(() => setProfileState(true)).catch(() => setProfileState(true))
    
  }, [])

  return(
    <div className="w-full">
      {profileState ? (
        token ? (
        <div className="w-full flex justify-center text-white">
          <div className="w-[80%] p-5 bg-[#0d0b20] mb-20 rounded-md mt-20">
            {
              isImage ? (
                <div className="flex justify-center">
                  <img src={profile?.data?.profileImg} alt="profile" className="w-40 h-40 rounded-full mt-4"/>
                </div>
              ) : (
                <div className="flex justify-center">
                  <img src="profile/profile-placeholder.png" alt="profile" className="w-40 h-40 rounded-full mt-4"/>
                </div>
              )
            }
            <div className="flex justify-center mt-4">
            <a href="#" className="text-blue-400 text-xs  hover:text-white">Change Profile Image</a>
            </div>
            <div className="flex mt-5 justify-between">
            <form method="post" className="w-[30%]">
              <label htmlFor="name" className="text-xs">Name</label>
              <input type="text" defaultValue={profile?.data?.name} className="bg-[#0d0b20] border border-white w-full p-2 mt-4" placeholder="Name" onChange={(e) => setNewName(e.target.value)} />
              <label htmlFor="email" className="text-xs">Email</label>
              <input type="email" defaultValue={profile?.data?.email} className="bg-[#0d0b20] border border-white w-full p-2 mt-4" placeholder="Email" disabled/>
              <label htmlFor="phoneNum" className="text-xs">Phone Number</label>
              <input type="text" defaultValue={profile?.data?.phoneNum} className="bg-[#0d0b20] border border-white w-full p-2 mt-4" placeholder="Phone Number" onChange={(e) => setNewPhoneNum(e.target.value)} />
              <label htmlFor="address" className="text-xs">Phone Number</label>
              <input type="text" defaultValue={profile?.data?.address} className="bg-[#0d0b20] border border-white w-full p-2 mt-4" placeholder="Address" onChange={(e) => setNewAddress(e.target.value)} />
              <button onClick={updateProfile} className="bg-blue-400 w-full p-2 mt-5">Save</button>
            </form>
            <div className="w-[30%]">
              <div className="">
                <a href="/profile/cart"><FaShoppingCart className="cursor-pointer hover:fill-blue-400" size={30} /></a>
              </div>
              <div className="mt-5">
                <h3 className="text-xs">History</h3>
                <ul>
                  <li>Order 1</li>
                  <li>Order 2</li>
                  <li>Order 3</li>
                  <li>Order 4</li>
                  <li>Order 5</li>
                </ul>
              </div>

            </div>
            </div>
          </div>   
        </div>
        ) : (
          <div className="flex justify-center text-white text-center">
          <div className="w-[80%] p-20 bg-[#0d0b20] mb-20 rounded-md mt-20">
            <p className="mb-10">Not Loggedin</p>
            <a href="/login" className="bg-white px-2 py-1 hover:bg-gray-700 text-black hover:text-white">Login</a>
          </div>
          </div>
        )
      ) : (
        <div className="flex justify-center text-white text-center">
        <div className="w-[80%] p-20 bg-[#0d0b20] mb-20 rounded-md mt-20">
            Loading...
        </div>
        </div>
      )}
    </div>
  )
}