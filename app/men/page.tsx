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
              <Image src="/favicon-free-img-120x120.png" width={120} height={120} alt="Logo" />
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
                <Image src="/jaket pria 2.jpg" alt="Outer Pita" width={50} height={50} />
                <div className="ml-4">
                  <p>Varsity Navy</p>
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
                <Image src="/sepatu pria 2.jpg" alt="Outer Pita" width={50} height={50} />
                <div className="ml-4">
                  <p>New Balance 530</p>
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
                <Image src="/celana 2.jpg" alt="Outer Pita" width={50} height={50} />
                <div className="ml-4">
                  <p>Levis Jeans</p>
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
            <h1 className="text-4xl mb-4">Men</h1>
            <p className="mb-4">Explore our extensive range of men's fashion and accessories. From casual wear to formal attire, our collection is designed to meet all your style needs. Discover the latest trends and timeless pieces that will keep you looking sharp. Shop now for exclusive deals and elevate your wardrobe with our premium selection.</p>
            <p className="mb-4">Showing 1–12 </p>
            <div className="grid grid-cols-3 gap-4">
              {/* Product items here */}
              <div className="border p-4">
                <Image src="/jaket pria 1.jpg" alt="Product 1" width={200} height={200} />
                <h2 className="text-xl mt-2">Brown Jacket</h2>
              </div>
              <div className="border p-4">
                <Image src="/jaket pria 2.jpg" alt="Product 2" width={200} height={200} />
                <h2 className="text-xl mt-2">Varsity Navy</h2>
              </div>
              <div className="border p-4">
                <Image src="/jaket pria 3.jpg" alt="Product 3" width={200} height={200} />
                <h2 className="text-xl mt-2">Black Jacket</h2>
              </div>
              <div className="border p-4">
                <Image src="/polo 1.jpeg" alt="Product 3" width={200} height={200} />
                <h2 className="text-xl mt-2">White Polo</h2>
              </div>
              <div className="border p-4">
                <Image src="/polo 2.jpeg" alt="Product 3" width={200} height={200} />
                <h2 className="text-xl mt-2">Navy Polo</h2>
              </div>
              <div className="border p-4">
                <Image src="/polo 3.jpeg" alt="Product 3" width={200} height={200} />
                <h2 className="text-xl mt-2">Black Polo</h2>
              </div>
              <div className="border p-4">
                <Image src="/sepatu pria 1.jpg" alt="Product 3" width={200} height={200} />
                <h2 className="text-xl mt-2">Adidas Samba</h2>
              </div>
              <div className="border p-4">
                <Image src="/sepatu pria 2.jpg" alt="Product 3" width={200} height={200} />
                <h2 className="text-xl mt-2">New Balance 530</h2>
              </div>
              <div className="border p-4">
                <Image src="/sepatu pria 3.jpg" alt="Product 3" width={200} height={200} />
                <h2 className="text-xl mt-2">Nike Dunk Panda</h2>
              </div>
              <div className="border p-4">
                <Image src="/celana 3.jpg" alt="Product 3" width={200} height={200} />
                <h2 className="text-xl mt-2">Denim Jeans</h2>
              </div>
              <div className="border p-4">
                <Image src="/celana 2.jpg" alt="Product 3" width={200} height={200} />
                <h2 className="text-xl mt-2">Levis Jeans</h2>
              </div>
              <div className="border p-4">
                <Image src="/celana 4.jpg" alt="Product 3" width={200} height={200} />
                <h2 className="text-xl mt-2">Black Jeans</h2>
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
