import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
const Banner = () => {
  return (

<section className="dark:bg-gray-800 text-black bg-dark-orange">
  <div className="container grid grid-cols-1 gap-8 mx-auto sm:grid-cols-2 sm:py-6 lg:py-6">
    <div className="flex flex-col justify-center p-6 text-center sm:text-left rounded-sm lg:max-w-md xl:max-w-lg">
      <h1 className="text-5xl font-bold leading-none sm:text-6xl">JAALNET</h1>
      <small className="mt-2 mb-8 text-lg sm:mb-12 text-white">
      Success| Powered By Relationships.
      </small>
      <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
      <Link 
  rel="noopener noreferrer" 
  href="/pages/about" 
  className="px-8 py-3 text-lg font-semibold rounded border-warmGray-50 bg-black text-orange-500 transition duration-300 ease-in-out hover:shadow-lg hover:bg-neutral-900"
>About JN</Link>
      </div>
    </div>
    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 order-first sm:order-none">
    <img 
  src="image/wrap.jpg" 
  alt="" 
  className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 shadow-lg transform hover:scale-105 transition duration-300 border-none"
/>

    </div>

  </div>
</section>


  )
}

export default Banner
