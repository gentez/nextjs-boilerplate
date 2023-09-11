import Image from 'next/image'
import React from 'react'
import logo  from "../../../public/wrap.jpg"
const Banner = () => {
  return (

<section className="dark:bg-gray-800 dark:text-gray-100">
  <div className="container grid grid-cols-1 gap-8 mx-auto sm:grid-cols-2 sm:py-12 lg:py-24">
    <div className="flex flex-col justify-center p-6 text-center sm:text-left rounded-sm lg:max-w-md xl:max-w-lg">
      <h1 className="text-5xl font-bold leading-none sm:text-6xl">JAALN<span className='text-orange-600'>E</span>T</h1>
      <small className="mt-2 mb-8 text-lg sm:mb-12 text-orange-600">
      Success| Powered By Relationships.
      </small>
      <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
        <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded border-warmGray-50 bg-orange-500  hover:bg-orange-400">About JN</a>
      </div>
    </div>
    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 order-first sm:order-none">
      <Image src={logo} alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 shadow-xl"/>
    </div>

  </div>
</section>


  )
}

export default Banner
