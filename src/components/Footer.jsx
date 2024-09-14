import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
   <footer className='bg-emerald-950 py-6 text-rose-50 '>
      <div className='container flex mx-auto flex-col items-center justify-center space-y-4 md:space-y-0'>
        <div className='mb-3 flex space-x-4'>
            <a href="#">
              <FaFacebookF size={20} />
            </a>
            <a href="#">
              <FaXTwitter size={20} />
            </a>
            <a href="#">
              <FaInstagram size={20} />
            </a>
            <a href="#">
              <FaLinkedinIn size={20} />
            </a>
        </div>
        <div className='text-sm opacity-50'>
        © {new Date().getFullYear()} adCarrot. All rights reserved
        </div>
      </div>
   </footer>
  )
}

export default Footer
