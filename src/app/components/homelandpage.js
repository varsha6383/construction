import React from 'react';
import { FaUsers,FaClock,FaSuitcase } from "react-icons/fa";
import Link from 'next/link';

function Homelandpage() {
  return (
    <div>
      {/* Desktop responsive */}
      <div className="hidden xl:block">
        <div className="relative">
          <div className="h-[80%] bg-[#305658] bg-blend-multiply rounded-bl-[80%_100px] rounded-br-[80%_100px] w-full bg-cover bg-center bg-[url('https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg')]">
            <div className="flex text-white items-center text-center gap-4 py-[10%] px-[20%] flex-col">
              <p className="bg-[#407d7d]/60  px-3 text-[1vw] font-semibold py-1 rounded-full cursor-pointer font-primary">Home</p>
              <p className="font-bold text-[3vw]  font-primary">Building Your Dreams Into Reality</p>
              <p className="font-secondary text-[1.2vw]">We take pride in turning your ideas into strong and beautiful homes. From planning to finishing, we handle every step with care and commitment.</p>
              <div className="space-x-8 mt-3">
                <button className="bg-[#cbff54] hover:bg-lime-500 text-[#063231] font-semibold text-[1.2vw] px-12 py-3 rounded-full cursor-pointer font-c2a">
                  <Link href="/contact">Get a Quote</Link>
                </button>
                <button className="bg-[#607e7e]/70 backdrop-blur-xl border border-white hover:border-dotted px-8 py-3 rounded-full cursor-pointer font-c2a">
                  <Link href="/projects">View Our Projects</Link>
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center py-[5%] absolute top-[85%]  w-[75vw] h-[35%] bg-white mx-[12%]  rounded-4xl shadow-gray-400 shadow-md">
            <div>
              <FaClock color="#033231" size={40} className="ml-8 bg-[#cbff54] rounded-full px-2" />
              <h1 className="mt-3 ml-8 text-[1.7vw] text-[#063231] font-semibold font-primary">On Time Delivery</h1>
              <h1 className="text-[1.1vw] ml-8 pt-2 text-green-950 font-secondary">We complete every project on schedule with proper planning and dedicated manpower.​</h1>
            </div>
            <div>
              <FaUsers color="#033231" size={40} className="ml-8 bg-[#cbff54] rounded-full px-2" />
              <h1 className="mt-3 ml-8 text-[1.7vw] text-[#063231] font-semibold font-primary">Experienced Team</h1>
              <h1 className="text-[1.1vw] ml-8 pt-2 text-green-950 font-secondary">Our skilled team members ensure quality work in every stage of construction.​</h1>
            </div>
            <div>
              <FaSuitcase color="#033231" size={40} className="ml-8 bg-[#cbff54] rounded-full px-2" />
              <h1 className="mt-3 ml-8 text-[1.7vw] text-[#063231] font-semibold font-primary">Quality Materials</h1>
              <h1 className="text-[1.1vw] ml-8 pt-2 text-green-950 font-secondary">We use trusted and durable materials to build strong and long-lasting homes​</h1>
            </div>
          </div>
        </div>
      </div>
       {/* Desktop responsive */}

      {/* Laptop responsive */}
      <div className="hidden sm:hidden md:hidden lg:block xl:hidden">
        <div className="relative">
          <div className="h-[80%] bg-[#305658] bg-blend-multiply rounded-bl-[80%_100px] rounded-br-[80%_100px] w-full bg-cover bg-center bg-[url('https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg')]">
            <div className="flex text-white items-center text-center gap-4 py-[10%] px-[20%] flex-col">
              <p className="bg-[#607e7e]/70 backdrop-blur-xl px-[5%] font-semibold py-1 rounded-full cursor-pointer font-c2a">Home</p>
              <p className="font-bold text-[4.5vw]  font-primary">Building Your Dreams Into Reality</p>
              <p className="font-secondary text-[1.7vw]">We take pride in turning your ideas into strong and beautiful homes. From planning to finishing, we handle every step with care and commitment.</p>
              <div className="space-x-8 mt-3">
                <button className="bg-[#cbff54] hover:bg-lime-500 text-[#063231] font-semibold text-[1.2vw] px-14 py-3 rounded-full cursor-pointer font-c2a">
                  <Link href="/contact">Get a Quote</Link>
                </button>
                <button className="bg-[#607e7e]/70 backdrop-blur-xl border border-white hover:border-dotted px-8 py-3 rounded-full cursor-pointer font-c2a">
                  <Link href="/projects">View Our Projects</Link>
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center py-[6%] pr-4 absolute top-[85%] left-[1%] w-[78%] h-[37%] bg-white mx-[10%] rounded-4xl shadow-gray-400 shadow-md">
            <div>
              <FaClock color="#033231" size={40} className="ml-8 bg-[#cbff54] rounded-full px-2" />
              <h1 className="mt-3 ml-8 text-[2.2vw] text-[#063231] font-semibold font-primary">On Time Delivery</h1>
              <h1 className="text-[1.1vw] ml-8 pt-2 text-green-950 font-secondary">We complete every project on schedule with proper planning and dedicated manpower.​</h1>
            </div>
            <div>
              <FaUsers color="#033231" size={40} className="ml-8 bg-[#cbff54] rounded-full px-2" />
              <h1 className="mt-3 ml-8 text-[2.2vw] text-[#063231] font-semibold font-primary">Experienced Team</h1>
              <h1 className="text-[1.1vw] ml-10 pt-2 text-green-950 font-secondary">Our skilled team members ensure quality work in every stage of construction.​</h1>
            </div>
            <div>
              <FaSuitcase color="#033231" size={40} className="ml-8 bg-[#cbff54] rounded-full px-2" />
              <h1 className="mt-3 ml-8 text-[2.2vw] text-[#063231] font-semibold font-primary">Quality Materials</h1>
              <h1 className="text-[1.1vw] ml-8 pt-2 text-green-950 font-secondary">We use trusted and durable materials to build strong and long-lasting homes​</h1>
            </div>
          </div>
        </div>
      </div>
      {/* Laptop responsive */}

      

      

      {/* Tablet responsive */}
      <div className="hidden md:block lg:hidden">
        <div className="relative">
          <div className="h-[80%] bg-[#305658] bg-blend-multiply rounded-bl-[60%_80px] rounded-br-[60%_80px] w-full bg-cover bg-center bg-[url('https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg')]">
            <div className="flex text-white items-center text-center gap-4 py-[15%] px-[12%] flex-col">
              <p className="bg-[#407d7d]/60  px-3 text-[3vw] font-semibold py-1 rounded-full cursor-pointer font-c2a">Home</p>
              <p className="font-bold text-[5vw] font-primary">Building Your Dreams Into Reality</p>
              <p className="font-secondary text-[2.5vw]">We take pride in turning your ideas into strong and beautiful homes. From planning to finishing, we handle every step with care and commitment.</p>
              <div className="space-y-4 mt-3 flex flex-col w-full items-center">
                <button className="bg-[#cbff54] hover:bg-lime-500 text-[2.5vw] font-semibold  text-[#063231] px-18 py-2 rounded-full cursor-pointer font-c2a">
                  <Link href="/contact">Get a Quote</Link>
                </button>
                <button className="bg-[#607e7e]/70 backdrop-blur-xl border text-[2.5vw] border-white hover:border-dotted px-12 py-2 rounded-full cursor-pointer font-c2a">
                  <Link href="/projects">View Our Projects</Link>
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 absolute top-[90%] left-[10%] w-[80%] space-y-5 z-10 bg-white rounded-4xl shadow-gray-400 shadow-md">
            <div>
              <FaClock color="#033231" size={40} className="ml-8 bg-[#cbff54] rounded-full px-2" />
              <h1 className="mt-3 ml-8 text-[3vw] text-[#063231] font-semibold font-primary">On Time Delivery</h1>
              <h1 className="text-[2vw] ml-8 text-green-950 font-secondary">We complete every project on schedule with proper planning and dedicated manpower.​</h1>
            </div>
            <div>
              <FaUsers color="#033231" size={40} className="ml-8 bg-[#cbff54] rounded-full px-2" />
              <h1 className="mt-3 ml-8 text-[3vw] text-[#063231] font-semibold font-primary">Experienced Team</h1>
              <h1 className="text-[2vw] ml-8 text-green-950 font-secondary">Our skilled team members ensure quality work in every stage of construction.​</h1>
            </div>
            <div>
              <FaSuitcase color="#033231" size={40} className="ml-8 bg-[#cbff54] rounded-full px-2" />
              <h1 className="mt-3 ml-8 text-[3vw] text-[#063231] font-semibold font-primary">Quality Materials</h1>
              <h1 className="text-[2vw] ml-8 text-green-950 font-secondary">We use trusted and durable materials to build strong and long-lasting homes​</h1>
            </div>
          </div>
        </div>
      </div>
      {/* Tablet responsive */}

      {/* Mobile responsive*/}
      <div className="block md:hidden">
        <div className="relative">
          <div className="h-[80%] bg-[#305658] bg-blend-multiply rounded-bl-[80%_50px] rounded-br-[80%_50px] w-full bg-cover bg-center bg-[url('https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg')]">
            <div className="flex text-white items-center text-center gap-4 pt-[30%] pb-[20%] px-[10%] flex-col">
              <p className="bg-[#407d7d]/60  px-3 text-[4.5vw] font-semibold py-1 rounded-full cursor-pointer font-c2a">Home</p>
              <p className="font-bold text-[6vw] font-primary">Building Your Dreams to Reality</p>
              <p className="px-3 text-[4vw]  font-secondary">We take pride in turning your ideas into strong and beautiful homes. From planning to finishing, we handle every step with care and commitment.</p>
              <div className="space-y-4 mt-3 flex flex-col">
                <button className="bg-[#cbff54] hover:bg-lime-500 text-[#063231] font-semibold px-12 text-[4vw]  py-1 rounded-full cursor-pointer font-c2a"><Link href="/contact">Get a Quote</Link></button>
                <button className="bg-[#607e7e]/70 backdrop-blur-xl border border-white  hover:border-dotted px-10 py-1 rounded-full cursor-pointer font-c2a"><Link href="/projects">View Our Projects</Link></button>
              </div>
            </div>
          </div>
          <div className="p-6 absolute top-[90%] left-[10%] w-[80%] space-y-5 z-10 bg-white rounded-4xl shadow-gray-400 shadow-md">
            <div>
              <FaClock color="#033231" size={30} className="ml-8 bg-[#cbff54] rounded-full px-2" />
              <h1 className="mt-3 ml-8 text-[6.3vw] text-[#063231] font-semibold font-primary">On Time Delivery</h1>
              <h1 className="text-[4vw] ml-8 text-green-950 font-secondary">We complete every project on schedule with proper planning and dedicated manpower.​</h1>
            </div>
            <div>
              <FaUsers color="#033231" size={30} className="ml-8 bg-[#cbff54] rounded-full px-2" />
              <h1 className="mt-3 ml-8 text-[6.3vw] text-[#063231] font-semibold font-primary">Experienced Team</h1>
              <h1 className="text-[4vw] ml-8 text-green-950 font-secondary">Our skilled team members ensure quality work in every stage of construction.​</h1>
            </div>
            <div>
              <FaSuitcase color="#033231" size={30} className="ml-8 bg-[#cbff54] rounded-full px-2" />
              <h1 className="mt-3 ml-8 text-[6.3vw] text-[#063231] font-semibold font-primary">Quality Materials</h1>
              <h1 className="text-[4vw] ml-8 text-green-950 font-secondary">We use trusted and durable materials to build strong and long-lasting homes​</h1>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile responsive*/}
    </div>
  )
}

export default Homelandpage;
