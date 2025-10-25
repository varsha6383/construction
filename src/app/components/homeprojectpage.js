import React from 'react';
import Image from "next/image";
import Link from 'next/link';

function Homeprojectpage() {
  return (
    <div className="bg-white py-[10%] ">
        {/* desktop responsive */}
        <div className="hidden xl:block">
            <div className=" container mx-auto px-[5%]">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-[8%]">
  {/* Left Text Section */}
  <div className="w-1/2">
    <p className="text-[1vw] font-semibold text-gray-500 uppercase mb-[2%] font-primary">
      OUR PROJECTS
    </p>
    <h2 className="text-[2.6vw] font-bold text-[#063231] leading-snug font-primary">
      Built to Last. <br /> Designed to Inspire.
    </h2>
  </div>

  {/* Right Text Section */}
  <div className="w-1/2 text-gray-600">
    <p className="mb-[4%] text-[1.2vw] font-secondary leading-relaxed">
      Every home we build is made to stand strong for generations, reflecting
      your dreams and our craftsmanship.
    </p>

    <button className="bg-[#cbff54] cursor-pointer font-c2a text-[#063231] font-semibold py-[3%] px-[6%] rounded-full hover:bg-lime-500 transition text-[100%]">
      <Link href="/projects">View Our Projects</Link>
    </button>
  </div>
</div>


        {/* Image Grid */}
    <div className="flex gap-6 mt-[10%]">
    <div className="flex w-[70%] h-[200px] overflow-hidden rounded-xl">
    <Image
    src="https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg"
    alt="Project 1"
    width={800}
    height={400}
    className="object-cover w-full h-full"
  />
  </div>
  <div className="flex w-[25%] h-[200px] overflow-hidden rounded-xl">
    <Image
    src="https://images.pexels.com/photos/33719014/pexels-photo-33719014.jpeg"
    alt="Project 1"
    width={800}
    height={400}
    className="object-cover w-full h-full"
  />
</div>
</div>
<div className="flex gap-6 my-8">
    <div className="flex w-[25%] h-[200px] overflow-hidden rounded-xl">
    <Image
    src="https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg"
    alt="Project 1"
    width={800}
    height={400}
    className="object-cover w-full h-full"
  />
  </div>
  <div className="flex w-[70%] h-[200px] overflow-hidden rounded-xl">
    <Image
    src="https://cdn.pixabay.com/photo/2023/09/19/15/42/ai-generated-8262931_1280.jpg"
    alt="Project 1"
    width={800}
    height={400}
    className="object-cover w-full h-full"
  />
</div>
</div>
      </div>
<div className=" flex items-center gap-[20%] mt-[10%] py-[8%]  px-[12%] w-full bg-[#07303a] bg-blend-multiply  bg-cover bg-center bg-[url('https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg')]">
<div className="w-[70%]"><h1 className="text-[2.5vw] text-white font-bold font-primary">Let’s Build Your Dream Home.</h1>
<p className="text-[1.2vw] mt-6 text-white font-secondary ">Whether it’s your first home or a family project, Sri Velan Constructions is here to make your plan a reality.Call or meet us today to discuss your ideas.</p>
</div>
<div className="mt-10 w-[30%]">
    <button className="bg-lime-300 cursor-pointer border-dotted border-white px-[12%] py-2 rounded-3xl text-[#063231] font-c2a">
      <Link href="/contact">
             ENQUIRE  NOW
          </Link>
    </button>
</div>


</div>
        </div>
        {/* desktop responsive */}


        {/* laptop responsive*/}
        <div className="hidden lg:block  xl:hidden">
            <div className=" container mx-auto px-[10%]">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-[8%]">
  {/* Left Text Section */}
  <div className="w-1/2">
    <p className="text-[1.2vw] font-semibold text-gray-500 uppercase mb-[2%] font-primary">
      OUR PROJECTS
    </p>
    <h2 className="text-[3vw] font-bold text-[#063231] leading-snug font-primary">
      Built to Last. <br /> Designed to Inspire.
    </h2>
  </div>

  {/* Right Text Section */}
  <div className="w-1/2 text-gray-600">
    <p className="mb-[4%] text-[1.5vw] font-secondary leading-relaxed">
      Every home we build is made to stand strong for generations, reflecting
      your dreams and our craftsmanship.
    </p>

    <button className="bg-[#cbff54] cursor-pointer font-c2a text-[#063231] font-semibold py-[3%] px-[6%] rounded-full hover:bg-lime-500 transition text-[1.5vw]">
      <Link href="/projects">View Our Projects</Link>
    </button>
  </div>
</div>


        {/* Image Grid */}
    <div className="flex gap-6 mt-[10%]">
    <div className="flex w-[70%] h-[200px] overflow-hidden rounded-xl">
    <Image
    src="https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg"
    alt="Project 1"
    width={800}
    height={400}
    className="object-cover w-full h-full"
  />
  </div>
  <div className="flex w-[25%] h-[200px] overflow-hidden rounded-xl">
    <Image
    src="https://images.pexels.com/photos/33719014/pexels-photo-33719014.jpeg"
    alt="Project 1"
    width={800}
    height={400}
    className="object-cover w-full h-full"
  />
</div>
</div>
<div className="flex gap-6 my-8">
    <div className="flex w-[25%] h-[200px] overflow-hidden rounded-xl">
    <Image
    src="https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg"
    alt="Project 1"
    width={800}
    height={400}
    className="object-cover w-full h-full"
  />
  </div>
  <div className="flex w-[70%] h-[200px] overflow-hidden rounded-xl">
    <Image
    src="https://cdn.pixabay.com/photo/2023/09/19/15/42/ai-generated-8262931_1280.jpg"
    alt="Project 1"
    width={800}
    height={400}
    className="object-cover w-full h-full"
  />
</div>
</div>
      </div>
<div className=" flex items-center gap-[20%] mt-[10%] py-[8%]  px-[10%] w-full bg-[#07303a] bg-blend-multiply  bg-cover bg-center bg-[url('https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg')]">
<div className="w-[70%]"><h1 className="text-[3vw] text-white font-bold font-primary">Let’s Build Your Dream Home.</h1>
<p className="text-[1.5vw] mt-6 text-white font-secondary ">Whether it’s your first home or a family project, Sri Velan Constructions is here to make your plan a reality.Call or meet us today to discuss your ideas.</p>
</div>
<div className="mt-10 w-[30%]">
    <button className="bg-lime-300 cursor-pointer border-dotted border-white px-[10%] py-2 rounded-3xl text-[#063231] font-c2a">
      <Link href="/contact">
             ENQUIRE  NOW
          </Link>
    </button>
</div>


</div>
        </div>

 {/* laptop responsive*/}
       

{/* mobile responsive */}
         <div className="block sm:hidden ">
            <div className=" container  px-[8%] ">
        {/* Header Section */}
        <div className="flex flex-col  justify-between items-start  mb-12">
          <div>
            <p className="text-[90%]font-semibold text-gray-500 uppercase mb-2 font-primary">
              OUR PROJECTS
            </p>
            <h2 className="text-[200%] font-bold text-[#063231] leading-snug font-primary">
              Built to Last.  Designed to Inspire.
            </h2>
          </div>

          <div className="my-[6%] text-gray-600">
        <p className="mb-[5%] text-[100%] font-secondary leading-relaxed">
              Every home we build is made to stand strong for generations,
               reflecting your dreams and our craftsmanship.
            </p>
            <button className="bg-[#cbff54] text-[#063231] font-semibold py-[3%] px-[6%] rounded-full hover:bg-lime-500 transition font-c2a text-[95%]">
            <Link href="/projects">
              View Our Projects
              </Link>
            </button>
          </div>
        </div>

        {/* Image Grid */}
    <div className="mt-[10%] ">
    <div className=" w-full h-[200px] overflow-hidden rounded-xl my-8">
    <Image
    src="https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg"
    alt="Project 1"
    width={300}
    height={400}
    className="object-cover w-full h-full"
  />
  </div>
  <div className=" w-full h-[200px] overflow-hidden rounded-xl my-8">
    <Image
    src="https://images.pexels.com/photos/33719014/pexels-photo-33719014.jpeg"
    alt="Project 1"
    width={300}
    height={400}
    className="object-cover w-full h-full"
  />
</div>


    <div className=" w-full h-[200px] overflow-hidden  rounded-xl my-8">
    <Image
    src="https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg"
    alt="Project 1"
    width={300}
    height={400}
    className="object-cover w-full h-full"
  />
  </div>
  <div className=" w-full h-[200px] overflow-hidden  rounded-xl my-8">
    <Image
    src="https://cdn.pixabay.com/photo/2023/09/19/15/42/ai-generated-8262931_1280.jpg"
    alt="Project 1"
    width={300}
    height={400}
    className="object-cover w-full h-full"
  />
</div>
</div>
</div>
<div className="  gap-[20%] mt-[10%] py-[8%] w-full px-6 bg-[#899ca1] bg-blend-multiply  bg-cover bg-center bg-[url('https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg')]">
<div><h1 className="text-[150%] text-white font-bold font-primary">Let’s Build Your Dream Home.</h1>
<p className="text-[100%]  mt-3 text-white font-secondary">Whether it’s your first home or a family project, Sri Velan Constructions is here to make your plan a reality. Call or meet us today to discuss your ideas.</p>
</div>
<div className="mt-10">
    <button className="bg-lime-300 border-dotted border-white px-6 py-2 rounded-3xl text-[#063231] font-c2a">
      <Link href="/contact">
             ENQUIRE  NOW
          </Link>
    </button>
</div>


</div>
        </div>

         {/* tab responsive */}
         <div className="hidden sm:block lg:hidden">
            <div className=" container  px-[8%]">
        {/* Header Section */}
        <div className="flex flex-col  justify-between items-start  mb-12">
          <div>
            <p className="text-[100%] font-semibold text-gray-500 uppercase mb-2 font-primary">
              OUR PROJECTS
            </p>
            <h2 className="text-[200%] font-bold text-[#063231] leading-snug font-primary">
              Built to Last.  Designed to Inspire.
            </h2>
          </div>

          <div className="my-6  text-gray-600">
            <p className="mb-4 text-[100%] font-secondary">
              Every home we build is made to stand strong for generations,
               reflecting your dreams and our craftsmanship.
            </p>
            <button className="bg-[#cbff54] text-[#063231] font-semibold py-3 px-6 rounded-full hover:bg-lime-500 transition font-c2a">
            <Link href="/projects">
              View Our Projects
              </Link>
            </button>
          </div>
        </div>

        {/* Image Grid */}
    <div className="mt-[10%] ">
    <div className=" w-full h-[200px] overflow-hidden rounded-xl my-8">
    <Image
    src="https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg"
    alt="Project 1"
    width={300}
    height={400}
    className="object-cover w-full h-full"
  />
  </div>
  <div className=" w-full h-[200px] overflow-hidden rounded-xl my-8">
    <Image
    src="https://images.pexels.com/photos/33719014/pexels-photo-33719014.jpeg"
    alt="Project 1"
    width={300}
    height={400}
    className="object-cover w-full h-full"
  />
</div>


    <div className=" w-full h-[200px] overflow-hidden  rounded-xl my-8">
    <Image
    src="https://images.pexels.com/photos/439391/pexels-photo-439391.jpeg"
    alt="Project 1"
    width={300}
    height={400}
    className="object-cover w-full h-full"
  />
  </div>
  <div className=" w-full h-[200px] overflow-hidden  rounded-xl my-8">
    <Image
    src="https://cdn.pixabay.com/photo/2023/09/19/15/42/ai-generated-8262931_1280.jpg"
    alt="Project 1"
    width={300}
    height={400}
    className="object-cover w-full h-full"
  />
</div>
</div>
</div>
<div className="  gap-[20%] mt-[10%] py-[8%] w-full px-[10%] bg-[#899ca1] bg-blend-multiply  bg-cover bg-center bg-[url('https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg')]">
<div><h1 className="text-[170%] text-white font-bold font-primary">Let’s Build Your Dream Home.</h1>
<p className="text-[100%] mt-3 text-white font-secondary">Whether it’s your first home or a family project, Sri Velan Constructions is here to make your plan a reality.Call or meet us today to discuss your ideas.</p>
</div>
<div className="mt-10">
    <button className="bg-lime-300 border-dotted border-white px-6 py-2 rounded-3xl text-[#063231] font-c2a">
      <Link href="/contact">
             ENQUIRE  NOW
          </Link>
    </button>
</div>


</div>
        </div>
        
    </div>
  )
}

export default Homeprojectpage;