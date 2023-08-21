import React from 'react'
import Image from 'next/image'
const Nabar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
    <Image src="/hamburger.png" alt="" height={25} width={25}/>
      {/* <a className="mr-5 hover:text-gray-900">Second Link</a>
      <a className="mr-5 hover:text-gray-900">Third Link</a>
      <a className="hover:text-gray-900">Fourth Link</a> */}
    </nav>
    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
    <Image src="/suwone.png" alt="" height={100} width={100}/>
    </a>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <Image className="mr-2" alt="" src="/camera.png" height={25} width={25}/>
      <Image className="mr-2" alt="" src="/search.png" height={25} width={25}/>
      <Image className="mr-2" alt="" src="/heart.png" height={25} width={25}/>
      <Image src="/cart.png" alt="" height={25} width={25}/>


    </div>
  </div>
</header>
    </div>
  )
}

export default Nabar
