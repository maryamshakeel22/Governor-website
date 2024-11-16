'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/components/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="sticky top-0 z-30">
      {/* Navbar Container */}
      <div className="flex flex-wrap bg-sky-900 justify-between items-center px-4 py-2">
        {/* Logo Section */}
        <div className="logo flex items-center">
          <Image src={logo} alt="logo" width={50} height={50} />
          <h3 className="ml-2 text-sky-300 font-bold text-[14px] sm:text-[18px]">
            Tuition Free Education Program
          </h3>
        </div>

        {/* Navigation Menu for Desktop */}
        <div className="hidden md:flex">
          <nav>
            <ul className="flex space-x-4">
              <Link href="/"><li className="text-white hover:text-sky-300">Home</li></Link>
              <Link href="/Apply"><li className="text-white hover:text-sky-300">Apply</li></Link>
              <Link href="/Result"><li className="text-white hover:text-sky-300">Result</li></Link>
              <Link href="/Jobs"><li className="text-white hover:text-sky-300">Jobs</li></Link>
              <Link href="/Courses"><li className="text-white hover:text-sky-300">Courses</li></Link>
            </ul>
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:hidden bg-sky-800`}
      >
        <ul className="flex flex-col space-y-2 p-4">
          <Link href="/"><li className="text-white hover:text-sky-300">Home</li></Link>
          <Link href="/Apply"><li className="text-white hover:text-sky-300">Apply</li></Link>
          <Link href="/Result"><li className="text-white hover:text-sky-300">Result</li></Link>
          <Link href="/Jobs"><li className="text-white hover:text-sky-300">Jobs</li></Link>
          <Link href="/Courses"><li className="text-white hover:text-sky-300">Courses</li></Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
