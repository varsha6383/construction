"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt,FaLocationArrow,FaFacebook  } from "react-icons/fa";
import { BiLogoInstagram } from "react-icons/bi";
import { FaYoutube,FaXTwitter } from "react-icons/fa6";


export default function Footer() {
   const closeMenu = () => setIsOpen(false);
  return (
    <div>
      {/* desktop responsive*/}
    <div className="hidden xl:block">
  <footer className="bg-[#0c3c3f] text-white pt-20 relative">
    {/* 🔹 Main Footer */}
    <div className="max-w-8xl px-[10%] mx-auto grid grid-cols-4  gap-5 pb-16">
      
      {/* Left - Logo & About */}
      <div>
        <h3 className=" font-semibold mb-3 text-left font-primary">
          {/* Logo */}
                    <Link href="/" onClick={closeMenu}>
          
                      <Image src="/sri_logo.png" alt="sri velan" width={150} height={400} />
                
                    </Link>
        </h3>
        <p className="text-gray-300 mb-5 text-left leading-relaxed font-secondary text-[1.1vw]">
          Your trusted construction partner in Dharmapuri, building strong homes with honest work and lasting results.
        </p>
        <div className="flex space-x-4">
          <div><FaFacebook size={20} color="#ffffff" className="cursor-pointer"/></div>
          <div><BiLogoInstagram size={20} color="#ffffff" className="cursor-pointer"/></div>
          <div><FaYoutube size={20} color="#ffffff" className="cursor-pointer"/></div>
          <div><FaXTwitter size={20} color="#ffffff" className="cursor-pointer"/></div>
        </div>
      </div>

      {/* Company */}
      <div className="lg:ml-[20%]">
        <h4 className="text-[1.3vw] font-semibold mb-4 font-primary">Company</h4>
        <ul className="space-y-3 text-gray-300 text-[1.1vw]">
          <li><Link href="/" className="hover:text-lime-400 font-c2a cursor-pointer">Home</Link></li>
          <li><Link href="/about" className="hover:text-lime-400 font-c2a cursor-pointer">About</Link></li>
          <li><Link href="/service" className="hover:text-lime-400 font-c2a cursor-pointer">Services</Link></li>
          <li><Link href="/projects" className="hover:text-lime-400 font-c2a cursor-pointer">Projects</Link></li>
          <li><Link href="/contact" className="hover:text-lime-400 font-c2a cursor-pointer">Contact</Link></li>
        </ul>
      </div>

      {/* Support */}
      <div>
        <h4 className="text-[1.3vw] font-semibold mb-4 font-primary">Support</h4>
        <ul className="space-y-2 text-gray-300 text-[1.1vw]">
          <li><Link href="/privacy" className="hover:text-lime-400 font-c2a cursor-pointer">Privacy Policy</Link></li>
          <li><Link href="/terms" className="hover:text-lime-400 font-c2a cursor-pointer">Terms & Conditions</Link></li>
        </ul>
      </div>

      {/* Contact Us */}
      <div>
        <h4 className="text-[1.3vw] font-semibold mb-4 font-primary text-white">Company Info:</h4>

        <div className="space-y-6 md:space-y-4 pl-4 md:pl-0 text-gray-300 text-[1.1vw]">

          {/* Phone / WhatsApp */}
          <div className="flex items-start gap-3">
            <div><FaPhoneAlt size={20} color="#ffffff" className="cursor-pointer mt-1" /></div>
            <div>
              <h1 className="font-c2a font-bold text-[1.1vw]">Call Us</h1>
              <h1>
                <Link
                  href="https://wa.me/918248501872"
                  target="_blank"
                  className="hover:text-green-700 transition-colors"
                >
                  +91 82485 01872
                </Link>
              </h1>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3">
            <div><IoMdMail size={20} color="#ffffff" className="cursor-pointer mt-1" /></div>
            <div>
              <h1 className="font-c2a font-bold text-[1.1vw]">Send Email</h1>
              <h1>
                <Link
                  href="https://mail.google.com/mail/u/0/?to=srivelamconstruction@gmail.com&su=Enquiry+Regarding+Construction+Services&fs=1&tf=cm"
                  target="_blank"
                  className="hover:text-green-700 transition-colors"
                >
                  srivelamconstruction@gmail.com
                </Link>
              </h1>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-3">
            <div><FaLocationArrow size={20} color="#ffffff" className="cursor-pointer mt-1" /></div>
            <div>
              <h1 className="font-c2a font-bold text-[1.1vw]">Address</h1>
              <h1>Kambainallore, Dharmapuri</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Border */}
    <div className="border-t border-gray-600 text-center py-6 text-gray-400 text-[1vw] font-c2a">
      © {new Date().getFullYear()} All rights reserved.
      <Link
        href="https://www.zenth.in/"
        target="_blank"
        className="hover:underline ml-1"
      >
        Zenth Tech.
      </Link>
    </div>
  </footer>
</div>
{/* desktop responsive*/}


     {/* Laptop responsive*/}
    <div className="hidden lg:block xl:hidden">
  <footer className="bg-[#0c3c3f] text-white pt-20 relative">
    {/* 🔹 Main Footer */}
    <div className="max-w-9xl px-[9%] grid grid-cols-4 max-md:text-center  pb-16">

      {/* Left - Logo & About */}
      <div>
        <h3 className=" font-semibold mb-3 text-left font-primary">
            {/* Logo */}
                    <Link href="/" onClick={closeMenu}>
          
                      <Image src="/sri_logo.png" alt="sri velan" width={130} height={400} />
                
                    </Link>
        </h3>
        <p className="text-gray-300 mb-5 text-left leading-relaxed font-secondary text-[1.6vw]">
          Your trusted construction partner in Dharmapuri, building strong homes with honest work and lasting results.
        </p>
        <div className="flex space-x-4">
          <div><FaFacebook size={20} color="#ffffff" className="cursor-pointer" /></div>
          <div><BiLogoInstagram size={20} color="#ffffff" className="cursor-pointer" /></div>
          <div><FaYoutube size={20} color="#ffffff" className="cursor-pointer" /></div>
          <div><FaXTwitter size={20} color="#ffffff" className="cursor-pointer" /></div>
        </div>
      </div>

      {/* Company */}
      <div className="lg:ml-[20%]">
        <h4 className="text-[2vw] font-semibold mb-4 font-primary">Company</h4>
        <ul className="space-y-3 text-gray-300 text-[1.6vw]">
          <li><Link href="/" className="hover:text-lime-400 font-c2a cursor-pointer">Home</Link></li>
          <li><Link href="/about" className="hover:text-lime-400 font-c2a cursor-pointer">About</Link></li>
          <li><Link href="/service" className="hover:text-lime-400 font-c2a cursor-pointer">Services</Link></li>
          <li><Link href="/projects" className="hover:text-lime-400 font-c2a cursor-pointer">Projects</Link></li>
          <li><Link href="/contact" className="hover:text-lime-400 font-c2a cursor-pointer">Contact</Link></li>
        </ul>
      </div>

      {/* Support */}
      <div>
        <h4 className="text-[2vw] font-semibold mb-4 font-primary">Support</h4>
        <ul className="space-y-2 text-gray-300 text-[1.6vw]">
          <li><Link href="/privacy" className="hover:text-lime-400 font-c2a cursor-pointer">Privacy Policy</Link></li>
          <li><Link href="/terms" className="hover:text-lime-400 font-c2a cursor-pointer">Terms & Conditions</Link></li>
        </ul>
      </div>

      {/* Contact Us */}
      <div>
        <h4 className="text-[2vw] font-semibold mb-4 font-primary text-white">Company Info:</h4>

        <div className="space-y-6 md:space-y-4 pl-4 md:pl-0 text-gray-300 text-[1.6vw]">

          {/* Phone / WhatsApp */}
          <div className="flex items-start gap-3">
            <div><FaPhoneAlt size={20} color="#ffffff" className="cursor-pointer mt-1" /></div>
            <div>
              <h1 className="font-c2a font-bold text-[1.6vw]">Call Us</h1>
              <h1>
                <Link
                  href="https://wa.me/918248501872"
                  target="_blank"
                  className="hover:text-green-700 transition-colors"
                >
                  +91 82485 01872
                </Link>
              </h1>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-3">
            <div><IoMdMail size={20} color="#ffffff" className="cursor-pointer mt-1" /></div>
            <div>
              <h1 className="font-c2a font-bold text-[1.6vw]">Send Email</h1>
              <h1>
                <Link
                  href="https://mail.google.com/mail/u/0/?to=srivelamconstruction@gmail.com&su=Enquiry+Regarding+Construction+Services&fs=1&tf=cm"
                  target="_blank"
                  className="hover:text-green-700 transition-colors"
                >
                  srivelamconstruction@gmail.com
                </Link>
              </h1>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-3">
            <div><FaLocationArrow size={20} color="#ffffff" className="cursor-pointer mt-1" /></div>
            <div>
              <h1 className="font-c2a font-bold text-[1.6vw]">Address</h1>
              <h1 className="text-[100%]">Kambainallore, Dharmapuri</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Border */}
    <div className="border-t border-gray-600 text-center py-6 text-gray-400 text-[1.2vw] font-c2a">
      © {new Date().getFullYear()} All rights reserved.
      <Link
        href="https://www.zenth.in/"
        target="_blank"
        className="hover:underline ml-1"
      >
        Zenth Tech.
      </Link>
    </div>
  </footer>
</div>
   {/* Laptop responsive*/}

    {/* mobile responsive */}
    <div className="sm:hidden block">
  <footer className="bg-[#0c3c3f] text-white pt-20 px-[5%] relative">

    {/* 🔹 Main Footer */}
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 max-md:text-center gap-10 pb-16">

      {/* Left - Logo & About */}
      <div>
        <h3 className="text-[100%] font-semibold mb-3 text-left font-primary"><span className="font-bold text-[110%]">SRI VELAN</span> <br /> CONSTRUCTION</h3>
        <p className="text-gray-300 mb-5 text-left leading-relaxed font-secondary text-[100%]">
          Your trusted construction partner in Dharmapuri, building strong homes with honest work and lasting results.
        </p>
        <div className="flex space-x-4">
          <div><FaFacebook size={20} color="#ffffff" className="cursor-pointer" /></div>
          <div><BiLogoInstagram size={20} color="#ffffff" className="cursor-pointer" /></div>
          <div><FaYoutube size={20} color="#ffffff" className="cursor-pointer" /></div>
          <div><FaXTwitter size={20} color="#ffffff" className="cursor-pointer" /></div>
        </div>
      </div>

      {/* Company & Support */}
      <div className="flex gap-[30%]">
        <div>
          <h4 className="text-[120%] font-semibold mb-4 font-primary">Company</h4>
          <ul className="space-y-3 text-gray-300 text-left text-[100%]">
            <li><Link href="/" className="hover:text-lime-400 font-c2a cursor-pointer">Home</Link></li>
            <li><Link href="/about" className="hover:text-lime-400 font-c2a cursor-pointer">About</Link></li>
            <li><Link href="/service" className="hover:text-lime-400 font-c2a cursor-pointer">Services</Link></li>
            <li><Link href="/projects" className="hover:text-lime-400 font-c2a cursor-pointer">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-lime-400 font-c2a cursor-pointer">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-[120%] font-semibold mb-4 font-primary">Support</h4>
          <ul className="space-y-2 text-gray-300 text-[100%]">
            <li><Link href="/privacy" className="hover:text-lime-400 text-left font-c2a cursor-pointer">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-lime-400 font-c2a text-left cursor-pointer">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>

      {/* Contact Us */}
      <div>
        <h4 className="text-[120%] font-semibold mb-4 text-left font-primary text-white">
          Company Info:
        </h4>

        <div className="space-y-6 text-[95%]">
          {/* Phone */}
          <div className="flex gap-3 items-start">
            <div><FaPhoneAlt size={20} color="#ffffff" className="cursor-pointer mt-1" /></div>
            <div>
              <h1 className="font-c2a font-bold text-gray-300 text-left text-[100%]">Call Us</h1>
              <h1 className="text-gray-300 text-[100%]">+91 82485 01872</h1>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-3 items-start">
            <div><IoMdMail size={20} color="#ffffff" className="cursor-pointer mt-1" /></div>
            <div>
              <h1 className="font-c2a font-bold text-gray-300 text-left text-[100%]">Send Email</h1>
              <h1>
                <Link
                  href="https://mail.google.com/mail/u/0/?to=srivelamconstruction@gmail.com&su=Enquiry+Regarding+Construction+Services&fs=1&tf=cm"
                  target="_blank"
                  className="text-[100%] text-gray-300 underline hover:text-green-800 transition-colors"
                >
                  srivelamconstruction@gmail.com
                </Link>
              </h1>
            </div>
          </div>

          {/* Address */}
          <div className="flex gap-3 items-start">
            <div><FaLocationArrow size={20} color="#ffffff" className="cursor-pointer mt-1" /></div>
            <div>
              <h1 className="font-c2a font-bold text-gray-300 text-left text-[100%]">Address</h1>
              <h1 className="text-gray-300 text-[100%]">Kambainallore, Dharmapuri</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Border */}
    <div className="border-t border-gray-600 text-center py-6 text-gray-400 text-[85%] font-c2a">
      © {new Date().getFullYear()} All rights reserved.
      <Link href="https://www.zenth.in/" target="_blank" className="hover:underline ml-1">
        Zenth Tech.
      </Link>
    </div>
  </footer>
</div>


    {/* tab responsive */}
   <div className="hidden md:block lg:hidden">
  <footer className="bg-[#0c3c3f] text-white pt-20 px-[5%] relative">

    {/* 🔹 Main Footer */}
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 max-md:text-center gap-10 pb-16">

      {/* Left - Logo & About */}
      <div>
        <h3 className="text-[100%] font-semibold mb-3 text-left font-primary"><span className="font-bold text-[110%]">SRI VELAN</span> <br /> CONSTRUCTION</h3>
        <p className="text-gray-300 mb-5 text-left leading-relaxed font-secondary text-[95%]">
          Your trusted construction partner in Dharmapuri, building strong homes with honest work and lasting results.
        </p>
        <div className="flex space-x-4">
          <div><FaFacebook size={20} color="#ffffff" className="cursor-pointer" /></div>
          <div><BiLogoInstagram size={20} color="#ffffff" className="cursor-pointer" /></div>
          <div><FaYoutube size={20} color="#ffffff" className="cursor-pointer" /></div>
          <div><FaXTwitter size={20} color="#ffffff" className="cursor-pointer" /></div>
        </div>
      </div>

      {/* Company & Support */}
      <div className="flex gap-[30%]">
        {/* Company */}
        <div>
          <h4 className="text-[120%] font-semibold mb-4 font-primary">Company</h4>
          <ul className="space-y-3 text-gray-300 text-left text-[95%]">
            <li><Link href="/" className="hover:text-lime-400 font-c2a cursor-pointer">Home</Link></li>
            <li><Link href="/about" className="hover:text-lime-400 font-c2a cursor-pointer">About</Link></li>
            <li><Link href="/service" className="hover:text-lime-400 font-c2a cursor-pointer">Services</Link></li>
            <li><Link href="/projects" className="hover:text-lime-400 font-c2a cursor-pointer">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-lime-400 font-c2a cursor-pointer">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-[120%] font-semibold mb-4 font-primary">Support</h4>
          <ul className="space-y-2 text-gray-300 text-[95%]">
            <li><Link href="/privacy" className="hover:text-lime-400 font-c2a cursor-pointer">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-lime-400 font-c2a cursor-pointer">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>

      {/* Contact Us */}
      <div>
        <h4 className="text-[120%] font-semibold mb-4 text-left font-primary text-white">
          Company Info:
        </h4>

        <div className="space-y-6 text-[95%]">
          {/* Phone */}
          <div className="flex gap-3 items-start">
            <div><FaPhoneAlt size={20} color="#ffffff" className="cursor-pointer mt-1" /></div>
            <div>
              <h1 className="font-c2a font-bold text-gray-300 text-[100%]">Call Us</h1>
              <h1 className="text-gray-300 text-[100%]">+91 82485 01872</h1>
            </div>
          </div>

          {/* Email */}
          <div className="flex gap-3 items-start">
            <div><IoMdMail size={20} color="#ffffff" className="cursor-pointer mt-1" /></div>
            <div>
              <h1 className="font-c2a font-bold text-gray-300 text-[100%]">Send Email</h1>
              <h1>
                <Link
                  href="https://mail.google.com/mail/u/0/?to=srivelamconstruction@gmail.com&su=Enquiry+Regarding+Construction+Services&fs=1&tf=cm"
                  target="_blank"
                  className="text-[100%] text-gray-300 underline hover:text-green-800 transition-colors"
                >
                  srivelamconstruction@gmail.com
                </Link>
              </h1>
            </div>
          </div>

          {/* Address */}
          <div className="flex gap-3 items-start">
            <div><FaLocationArrow size={20} color="#ffffff" className="cursor-pointer mt-1" /></div>
            <div>
              <h1 className="font-c2a font-bold text-gray-300 text-[100%]">Address</h1>
              <h1 className="text-gray-300 text-[100%]">Kambainallore, Dharmapuri</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Bottom Border */}
    <div className="border-t border-gray-600 text-center py-6 text-gray-400 text-[100%] font-c2a">
      © {new Date().getFullYear()} All rights reserved.
      <Link href="https://www.zenth.in/" target="_blank" className="hover:underline ml-1">
        Zenth Tech.
      </Link>
    </div>
  </footer>
</div>

    </div>
  );
}