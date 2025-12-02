"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header id='header' className='bg-white shadow-sm sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-6 py-4'>
        <div className='flex items-center justify-between'>
          {/* Logo */}
          <Link href={"/"} className='flex items-center space-x-2'>
            <div className='w-10 h-10 bg-gradient-to-br from-[#6366F1] to-[#8B5CF6] rounded-xl flex items-center justify-center'>
              <i className='fa-solid fa-share-nodes text-white text-xl'></i>
            </div>
            <span className='text-2xl font-bold bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] bg-clip-text text-transparent'>
              Sholaka
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className='hidden md:flex items-center space-x-8'>
            <Link
              href='/how-we-work'
              className='text-gray-600 hover:text-[#6366F1]'
            >
              How We Work
            </Link>
            <Link
              href='/for-sellers'
              className='text-gray-600 hover:text-[#6366F1]'
            >
              For Sellers
            </Link>
            <Link
              href='/for-resellers'
              className='text-gray-600 hover:text-[#6366F1]'
            >
              For Resellers
            </Link>
          </nav>

          {/* Desktop Buttons */}
          <div className='hidden md:flex items-center space-x-4'>
            <button className='text-gray-600 hover:text-[#6366F1] font-medium'>
              Sign In
            </button>
            <button className='bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white px-6 py-2.5 rounded-xl'>
              Get Started
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className='md:hidden text-2xl text-gray-700'
          >
            <i className='fa-solid fa-bars'></i>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className='md:hidden absolute left-0 right-0 bg-white border-b shadow-lg px-6 py-4 space-y-4 z-40'>
          <Link href='#how-it-works' className='block text-gray-700'>
            How It Works
          </Link>
          <Link href='#for-sellers' className='block text-gray-700'>
            For Sellers
          </Link>
          <Link href='#for-resellers' className='block text-gray-700'>
            For Resellers
          </Link>
          <Link href='#pricing' className='block text-gray-700'>
            Pricing
          </Link>
          <Link href='#faq' className='block text-gray-700'>
            FAQ
          </Link>

          <button className='block w-full text-left text-gray-700 font-medium pt-2'>
            Sign In
          </button>

          <button className='bg-gradient-to-r from-[#6366F1] to-[#8B5CF6] text-white w-full py-2.5 rounded-xl'>
            Get Started
          </button>
        </div>
      )}
    </header>
  );
}
