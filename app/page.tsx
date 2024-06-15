'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import bg from '/public/home-new-bg-free-img.jpg'
import React from 'react'
import Carousel from './carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';


export default function Home() {
  const router = useRouter()

  return (
    <>
      <div className="relative h-screen bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${bg.src})` }}>
      <div className="relative z-10 flex items-center justify-between p-8 text-white navbar">
          <div className="flex items-center space-x-6">
            <div className="w-30 p-4">
              <Image src="/logo1-free-img.png" width={120} height={120} alt="Logo" />
            </div>
            <button type="button" onClick={() => router.push('/everything')} className="hover:underline">
              EVERYTHING
            </button>
            <button type="button" onClick={() => router.push('/women')} className="hover:underline">
              WOMEN
            </button>
            <button type="button" onClick={() => router.push('/men')} className="hover:underline">
              MEN
            </button>
            <button type="button" onClick={() => router.push('/accessories')} className="hover:underline">
              ACCESSORIES
            </button>
          </div>
          <div className="flex items-center space-x-6">
            <button type="button" onClick={() => router.push('/about')} className="hover:underline">
              ABOUT
            </button>
            <button type="button" onClick={() => router.push('/contact')} className="hover:underline">
              CONTACT US
            </button>
            <button type="button" onClick={() => router.push('/cart')} className="hover:underline">
              <FontAwesomeIcon icon={faShoppingCart} />
            </button>
            <button type="button" onClick={() => router.push('/profile')} className="hover:underline">
              <FontAwesomeIcon icon={faUser} />
            </button>
          </div>
        </div>
        <div className="relative z-10 flex flex-col h-full text-white p-40">
          <h1 className="text-5xl font-bold mb-4">Raining Offers</h1>
          <h1 className="text-5xl font-bold mb-4">For Hot Summer!</h1>
          <p className="text-2xl mb-8">25% Off On All Products</p>
          <div className="flex space-x-4">
            <button
              type="button"
              className="bg-white text-blue-500 font-bold py-2 px-4 rounded hover:bg-gray-200"
              onClick={() => router.push('/shop')}
            >
              SHOP NOW
            </button>
            <button
              type="button"
              className="bg-transparent border-2 border-white text-white font-bold py-2 px-4 rounded hover:bg-white hover:text-blue-500"
              onClick={() => router.push('/find-more')}
            >
              FIND MORE
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white py-16 p-20">
        <main className="flex flex-col items-center justify-center text-center">
          <Carousel />
        </main>
      </div>
    </>
  )
}
