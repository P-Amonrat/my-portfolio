import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className="bg-black p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-white">
        <div className="text-xl font-bold">MyPortfolio</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link className="hover:text-sky-400" href="/">Home</Link>
          <Link className="hover:text-sky-400" href="/about">About</Link>
          <Link className="hover:text-sky-400" href="/experience">Experience</Link>
          <Link className="hover:text-sky-400" href="/contact">Contact</Link>
        </div>

        {/* Mobile Menu with <details> */}
        <details className="md:hidden relative">
          <summary className="cursor-pointer list-none text-white">
            <span className="text-white">☰</span>
          </summary>
          <div className="absolute right-0 mt-2 w-48 bg-black border border-gray-700 rounded-md flex flex-col space-y-2  z-50">
            <div className='hover:bg-gray-700'>
              <Link className="block py-2 px-4" href="/">Home</Link>
            </div>
            <div className='hover:bg-gray-700'>
              <Link className="block py-2 px-4" href="/about">About</Link>
            </div>
            <div className='hover:bg-gray-700'>
              <Link className="block py-2 px-4" href="/experience">Experience</Link>
            </div>
            <div className='hover:bg-gray-700'>
              <Link className="block py-2 px-4" href="/contact">Contact</Link>
            </div>
          </div>
        </details>
      </div>
    </nav>
  )
}

export default NavBar