
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Homeservicepage() {
  const services = [
    {
      id: 1,
      title: "Residential Construction",
      description:
        "We build new homes with complete planning, structural work, and finishing — all under one roof.",
      image:
        "https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg",
      icon: "🏠",
    },
    {
      id: 2,
      title: "Commercial Buildings",
      description:
        "We handle small commercial spaces and buildings with professional guidance and quality finishing.",
      image:
        "https://images.pexels.com/photos/466685/pexels-photo-466685.jpeg",
      icon: "🏢",
    },
    {
      id: 3,
      title: "Renovation & Remodeling",
      description:
        "Whether it’s a small extension or full redesign, we bring a fresh and strong touch to your existing home.",
      image:
        "https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg",
      icon: "🛠️",
    },
  ];

  return (
<div className="bg-[#f6f7f7] px-[8%] lg:pb-[16%] pb-[25%]">
      {/* ✅ desktop responsive*/}
<div className="hidden xl:block ">
  <div className="mt-[8%] pt-[5%] pb-[15%]">
  {/* Section Header */}
  <div className="space-y-3 px-4 text-center">
    <h1 className="text-[#063231] text-[1vw] font-primary">WHAT WE DO</h1>
    <h1 className="text-[#063231] font-bold text-[2.5vw] font-primary">
      Our Construction Services
    </h1>
  </div>

  {/* Service Cards */}
  <div className="container mx-auto px-[5%] mt-[6%]">
    <div className="grid grid-cols-3 gap-[4%]">
      {services.map((service) => (
        <div key={service.id} className="relative flex flex-col items-center">
          {/* Image */}
          <div className="w-full h-[35vh]">
            <Image
              src={service.image}
              alt={service.title}
              width={600}
              height={400}
              className="w-full h-full object-cover rounded-bl-[30%_25px] rounded-br-[30%_25px] rounded-t-3xl"
            />
          </div>

          {/* Card Content */}
          <div className="bg-white w-[75%] absolute top-[62%] left-1/2 -translate-x-1/2 rounded-2xl shadow-lg text-center p-[6%] flex flex-col justify-between min-h-[35vh]">
            <div className="flex flex-col items-center flex-grow">
              <div className="text-[2vw] mb-[3%]">{service.icon}</div>
              <h3 className="text-[1.5vw] font-semibold text-[#063231] mb-[5%] font-primary">
                {service.title}
              </h3>
              <p className="text-gray-600 text-[1vw] px-[4%] font-secondary leading-relaxed flex-grow">
                {service.description}
              </p>
            </div>

            {/* ENQUIRE NOW button */}
            <Link
              href="/contact"
              className="text-[#063231] cursor-pointer text-[1vw] border-t border-gray-200 pt-[3%] font-semibold hover:underline font-c2a"
            >
              ENQUIRE NOW
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
  </div>
</div>
 {/* ✅ desktop responsive*/}

 {/* ✅ laptop responsive*/}
<div className="hidden lg:block xl:hidden">
  <div className=" mt-[8%] pt-[5%] pb-[20%]">
  {/* Section Header */}
  <div className="space-y-3 px-4 text-center">
    <h1 className="text-[#063231] text-[1.2vw] font-primary">WHAT WE DO</h1>
    <h1 className="text-[#063231] font-bold text-[3.5vw] font-primary">
      Our Construction Services
    </h1>
  </div>

  {/* Service Cards */}
  <div className="container mx-auto px-[5%] mt-[6%]">
    <div className="grid grid-cols-3 gap-[4%]">
      {services.map((service) => (
        <div key={service.id} className="relative flex flex-col items-center">
          {/* Image */}
          <div className="w-full h-[35vh]">
            <Image
              src={service.image}
              alt={service.title}
              width={1000}
              height={400}
              className="w-full h-full object-cover rounded-bl-[30%_25px] rounded-br-[30%_25px] rounded-t-3xl"
            />
          </div>

          {/* Card Content */}
          <div className="bg-white w-[75%] absolute top-[62%] left-1/2 -translate-x-1/2 rounded-2xl shadow-lg text-center p-[6%] flex flex-col justify-between min-h-[30vh]">
            <div className="flex flex-col items-center flex-grow">
              <div className="text-[2.5vw] mb-[3%]">{service.icon}</div>
              <h3 className="text-[2vw] font-semibold text-[#063231] mt-[2%] font-primary">
                {service.title}
              </h3>
              <p className="text-gray-600 text-[1.3vw] px-[4%] font-secondary leading-relaxed flex-grow">
                {service.description}
              </p>
            </div>

            {/* ENQUIRE NOW button */}
            <Link
              href="/contact"
              className="text-[#063231] text-[1.3vw] cursor-pointer border-t border-gray-200 pt-[3%] font-semibold hover:underline font-c2a mt-[5%]"
            >
              ENQUIRE NOW
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
  </div>
</div>
 {/* ✅ laptop responsive*/}



      {/* ✅ Tablet responsive */}
<div className="hidden sm:block lg:hidden mt-[8%] pt-[8%] pb-[35%]">
  {/* Section Header */}
  <div className="space-y-[2%] px-[5%] text-center">
    <h1 className="text-[#063231] text-[2.5vw] font-primary">WHAT WE DO</h1>
    <h1 className="text-[#063231] font-bold text-[5vw] font-primary">
      Our Construction Services
    </h1>
  </div>

  {/* Service Cards */}
  <div className="container mx-auto px-[5%] mt-[8%]">
    <div className="grid grid-cols-1 gap-[8%]">
      {services.map((service) => (
        <div key={service.id} className="relative flex flex-col items-center">
          {/* Image */}
          <div className="w-full h-[40vh]">
            <Image
              src={service.image}
              alt={service.title}
              width={900}
              height={900}
              className="w-full h-full object-cover rounded-bl-[30%_25px] rounded-br-[30%_25px] rounded-t-3xl"
            />
          </div>

          {/* Card Content */}
          <div className="bg-white w-[70%] -mt-[8%] rounded-2xl shadow-lg text-center pt-[6%] pb-[6%] px-[6%] flex flex-col justify-between min-h-[30vh]">
            <div className="flex flex-col items-center flex-grow">
              <div className="text-[6vw] mb-[3%]">{service.icon}</div>
              <h3 className="text-[#063231] font-semibold text-[3.5vw]  mb-[4%] font-primary">
                {service.title}
              </h3>
              <p className="text-gray-600 text-[2.5vw] px-[4%] font-secondary leading-relaxed flex-grow">
                {service.description}
              </p>
            </div>

            {/* ENQUIRE NOW button */}
            <Link
              href="/contact"
              className="text-[#063231] cursor-pointer border-t border-gray-200 pt-[5%] mt-[3%] font-semibold hover:underline font-c2a  text-[2vw]"
            >
              ENQUIRE NOW
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>
  {/* ✅ Tablet responsive */}


 {/* ✅ Mobile responsive */}
<div className="block sm:hidden pt-[10%] mt-[10%] pb-[35%]">
        {/* Section Header */}
        <div className="space-y-[2%] px-[5%] text-center">
          <h1 className="text-[#063231] text-[3.5vw] font-primary">WHAT WE DO</h1>
          <h1 className="text-[#063231] font-bold text-[8vw] font-primary">
            Our Construction Services
          </h1>
        </div>

        {/* Service Cards */}
        <div className="container mx-auto px-[5%] mt-[10%]">
          <div className="grid grid-cols-1 gap-[3%]">
            {services.map((service) => (
              <div key={service.id} className="relative flex flex-col items-center">
                {/* Image */}
                <div className="w-full h-[30vh]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={900}
                    className="w-full h-full object-cover rounded-bl-[30%_25px] rounded-br-[30%_25px] rounded-t-3xl"
                  />
                </div>

                {/* Card Content */}
                <div className="bg-white w-[90%] -mt-[10%] rounded-2xl shadow-lg text-center py-[8%] px-[6%] flex flex-col justify-between min-h-[40vh]">
                  <div className="flex flex-col items-center flex-grow">
                    <div className="text-[8vw] mb-[3%]">{service.icon}</div>
                    <h3 className="text-[6vw] font-semibold text-[#063231]  font-primary">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-[4vw]] px-[4%] pt-[8%] font-secondary leading-relaxed flex-grow">
                      {service.description}
                    </p>
                  </div>

                  {/* ENQUIRE NOW button */}
                  <Link
                    href="/contact"
                    className="text-[#063231] cursor-pointer border-t border-gray-200 pt-[10%] font-semibold hover:underline font-c2a text-[3.5vw]"
                  >
                    ENQUIRE NOW
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
  {/* ✅ Mobile responsive */}
    </div>
  );
}
