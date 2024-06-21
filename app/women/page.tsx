'use client'

import { useRouter } from 'next/navigation'
import Image from 'next/image'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const router = useRouter()

  return (
    <>
      <div className="relative h-screen bg-fixed bg-cover bg-center" >
        <div className="relative z-10 flex items-center justify-between p-8 text-white navbar">
          <div className="flex items-center space-x-6">
            <div className="w-20">
              <Image src="/favicon-free-img-120x120.png" width={120} height={120} alt="Logo" onClick={() => router.push('/app')}/>
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
        <div className="relative z-10 grid grid-cols-6 gap-4 h-full text-black p-10">
          <div className='col-start-1 col-span-1 bg-gray-100 p-6'>
            <div className="mb-6">
              <h2 className="font-bold mb-2">Filter by Price</h2>
              <input type="range" min="20" max="200" className="w-full" />
              <p className="mt-2">Price: $20 - $200</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2">Filter</button>
            </div>
            <div className="mb-6">
              <h2 className="font-bold mb-2">Categories</h2>
              <ul>
                <li className="mb-2"><a href="#" className="hover:underline">Accessories (7)</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Men (12)</a></li>
                <li className="mb-2"><a href="#" className="hover:underline">Women (12)</a></li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold mb-2">Our Best Sellers</h2>
              <div className="flex items-center mb-4">
                <Image src="/baju 4.jpeg" alt="Outer Pita" width={50} height={50} />
                <div className="ml-4">
                  <p>Outer Ribbon</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500">&#9733;</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-bold mb-2">Our Best Sellers</h2>
              <div className="flex items-center mb-4">
                <Image src="/sendal 3.jpeg" alt="Outer Pita" width={50} height={50} />
                <div className="ml-4">
                  <p>Hermes Sandal</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500">&#9733;</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-bold mb-2">Our Best Sellers</h2>
              <div className="flex items-center mb-4">
                <Image src="/tas 2.jpeg" alt="Outer Pita" width={50} height={50} />
                <div className="ml-4">
                  <p>Guess Bag</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-500">&#9733;</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-span-5 p-6'>
            <h1 className="text-4xl mb-4">Women</h1>
            <p className="mb-4"> Discover our wide selection of women's clothing, accessories, and more. From the latest trends to timeless classics, find everything you need to express your personal style. Shop now and enjoy exclusive offers and unbeatable prices. Elevate your wardrobe with our curated collection designed to make you look and feel your best.</p>
            <p className="mb-4">Showing 1–12</p>
            <div className="grid grid-cols-3 gap-4">
              {/* Product items here */}
              <div className="border p-4">
                <Image src="/baju 1.jpeg" alt="Korean Blouse" width={200} height={200} />
                <h2 className="text-xl mt-2">Korean Blouse</h2>
              </div>
              <div className="border p-4">
                <Image src="/baju 2.jpeg" alt="Product 2" width={200} height={200} />
                <h2 className="text-xl mt-2">Cardigan Botton</h2>
              </div>
              <div className="border p-4">
                <Image src="/baju 4.jpeg" alt="Product 3" width={200} height={200} />
                <h2 className="text-xl mt-2">Outer Ribbon</h2>
              </div>
              <div className="border p-4">
                <Image src="/rok 1.jpeg" alt="Product 3" width={200} height={200} />
                <h2 className="text-xl mt-2">Cargo Skirt</h2>
              </div>
              <div className="border p-4">
                <Image src="/rok 2.jpeg" alt="Product 3" width={200} height={200} />
                <h2 className="text-xl mt-2">Ribbon Skirt</h2>
              </div>
              <div className="border p-4">
                <Image src="/rok 4.jpeg" alt="Product 3" width={200} height={200} />
                <h2 className="text-xl mt-2">Midi Skirt</h2>
              </div>
              <div className="border p-4">
                <Image src="/sandal 1.jpeg" alt="Product 3" width={200} height={200} />
                <h2 className="text-xl mt-2">Sandal Bali</h2>
              </div>
              <div className="border p-4">
                <Image src="/sendal 2.jpeg" alt="Product 3" width={200} height={200} />
                <h2 className="text-xl mt-2">Crocs</h2>
              </div>
              <div className="border p-4">
                <Image src="/sendal 3.jpeg" alt="Product 3" width={200} height={200} />
                <h2 className="text-xl mt-2">Hermes Sandal</h2>
              </div>
              <div className="border p-4">
                <Image src="/tas 1.jpeg" alt="Product 3" width={200} height={200} />
                <h2 className="text-xl mt-2">Pierre Lotes Bag</h2>
              </div>
              <div className="border p-4">
                <Image src="/tas 2.jpeg" alt="Product 3" width={200} height={200} />
                <h2 className="text-xl mt-2">Guess Bag</h2>
              </div>
              <div className="border p-4">
                <Image src="/tas 3.jpeg" alt="Product 3" width={200} height={200} />
                <h2 className="text-xl mt-2">Palomino Bag</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-16 p-20">
        <main className="flex flex-col items-center justify-center text-center">
          {/* Main content here */}
        </main>
      </div>
    </>
  )
}
