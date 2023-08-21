import React from 'react'
import Image from 'next/image'
const NavbarLanding = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
    <Image src="/hamburger.png" height={25} width={25} alt = "fienof" />
      {/* <a className="mr-5 hover:text-gray-900">Second Link</a>
      <a className="mr-5 hover:text-gray-900">Third Link</a>
      <a className="hover:text-gray-900">Fourth Link</a> */}
    </nav>
    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
    <Image src="/suwone.png" height={100} width={100} alt = "fienof" />
    </a>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
      <Image className="mr-2" src="/camera.png" height={25} width={25} alt = "fienof" />
      <Image className="mr-2" src="/search.png" height={25} width={25} alt = "fienof" />
      <Image className="mr-2" src="/heart.png" height={25} width={25} alt = "fienof" />
      <Image src="/cart.png" height={25} width={25} alt = "fienof" />


    </div>
  </div>
</header>
    </div>
  )
}

export default NavbarLanding