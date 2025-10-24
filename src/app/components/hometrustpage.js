"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function Hometrustpage() {
  // 👇 desktop ref & state
  const { ref: desktopRef, inView: desktopInView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });
  const [desktopStart, setDesktopStart] = useState(false);

  useEffect(() => {
    if (desktopInView) {
      setDesktopStart(false);
      setTimeout(() => setDesktopStart(true), 100);
    }
  }, [desktopInView]);

  // 👇 laptop ref & state
  const { ref: laptopRef, inView: laptopInView } = useInView({
    triggerOnce: false,
    threshold: 0.4,
  });
  const [laptopStart, setLaptopStart] = useState(false);

  useEffect(() => {
    if (laptopInView) {
      setLaptopStart(false);
      setTimeout(() => setLaptopStart(true), 100);
    }
  }, [laptopInView]);

  return (
    <div className="px-[10%]">
      {/* ✅ Desktop */}
      <div className="hidden xl:block">
        <div className="flex flex-row items-center justify-between bg-white pb-12 gap-10">
          {/* Left Content */}
          <div className="w-1/2">
            <p className="text-green-700 font-semibold text-[90%] mb-2 tracking-wide uppercase font-primary">
              Proven & Trusted
            </p>
            <h2 className="text-[250%] font-bold text-[#063231] leading-tight mb-4 font-primary">
              Backed by Results, <br /> Built on Relationships
            </h2>
            <p className="text-gray-600 text-[100%] mb-8 leading-relaxed font-secondary">
              Brikly has become a name homeowners trust. Whether it’s new
              construction or custom renovation, you’re in good company when
              you build with Brikly. Our strong partnerships are a reflection
              of the confidence our clients place in us — project after project.
            </p>

            {/* Stats */}
            <div ref={desktopRef} className="flex flex-col gap-8">
              <div>
                <h3 className="text-[180%] my-3 font-bold text-[#063231] font-primary">
                  {desktopStart ? <CountUp start={0} end={100} duration={2} /> : "0"}+
                </h3>
                <p className="font-bold text-[110%] text-[#1b4343] font-primary">
                  Satisfied Clients
                </p>
                <p className="text-[#1b4343] text-[100%] font-secondary">
                  Over 100 projects built with trust and excellence.
                </p>
              </div>
              <div>
                <h3 className="text-[180%] my-3 font-bold text-[#063231] font-primary">
                  {desktopStart ? <CountUp start={0} end={10} duration={2} /> : "0"} Yrs.
                </h3>
                <p className="font-bold text-[110%] text-[#1b4343] font-primary">
                  Structural Warranty
                </p>
                <p className="text-[#1b4343] text-[100%] font-secondary">
                  Structural coverage & quality you can count on.
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-1/2 relative">
            <div className="rounded-2xl mx-6 overflow-hidden shadow-lg">
              <Image
                src="https://cdn.pixabay.com/photo/2023/09/19/15/42/ai-generated-8262931_1280.jpg"
                alt="Happy family in front of home"
                width={600}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>
            <div className="absolute bottom-4 left-0 bg-lime-400 text-[#1b4343] font-semibold px-4 py-2 rounded-lg shadow-md font-secondary">
              Long-Term
              <br /> Reliability
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Laptop */}
      <div className="hidden lg:block xl:hidden">
        <div className="flex flex-row items-center justify-between bg-white pb-12 gap-10">
          <div className="w-1/2">
            <p className="text-green-700 font-semibold text-[70%] mb-2 tracking-wide uppercase font-primary">
              Proven & Trusted
            </p>
            <h2 className="text-[200%] font-bold text-[#063231] leading-tight mb-4 font-primary">
              Backed by Results, <br /> Built on Relationships
            </h2>
            <p className="text-gray-600 text-[80%] mb-4 leading-relaxed font-secondary">
              Brikly has become a name homeowners trust. Whether it’s new
              construction or custom renovation, you’re in good company when
              you build with Brikly. Our strong partnerships are a reflection
              of the confidence our clients place in us — project after project.
            </p>

            <div ref={laptopRef} className="flex flex-col gap-4">
              <div>
                <h3 className="text-[150%] font-bold text-[#063231] font-primary">
                  {laptopStart ? <CountUp start={0} end={100} duration={2} /> : "0"}+
                </h3>
                <p className="font-bold text-[90%] text-[#1b4343] font-primary">
                  Satisfied Clients
                </p>
                <p className="text-[#1b4343] text-[80%] font-secondary">
                  Over 100 projects built with trust and excellence.
                </p>
              </div>
              <div>
                <h3 className="text-[150%] font-bold text-[#063231] font-primary">
                  {laptopStart ? <CountUp start={0} end={10} duration={2} /> : "0"} Yrs.
                </h3>
                <p className="font-bold text-[90%] text-[#1b4343] font-primary">
                  Structural Warranty
                </p>
                <p className="text-[#1b4343] text-[80%] font-secondary">
                  Structural coverage & quality you can count on.
                </p>
              </div>
            </div>
          </div>

          <div className="w-1/2 relative">
            <div className="rounded-2xl mx-6 overflow-hidden shadow-lg">
              <Image
                src="https://cdn.pixabay.com/photo/2023/09/19/15/42/ai-generated-8262931_1280.jpg"
                alt="Happy family in front of home"
                width={600}
                height={400}
                className="object-cover w-full h-auto"
              />
            </div>
            <div className="absolute bottom-4 left-0 bg-lime-400 text-[#1b4343] font-semibold px-4 py-2 rounded-lg shadow-md font-secondary">
              Long-Term
              <br /> Reliability
            </div>
          </div>
        </div>
      </div>






   {/* ✅ Mobile Response */}
<div className="block sm:hidden">
  <div className="bg-white py-[10%] px-[6%]">
    {/* Left Content */}
    <div className="w-full">
      <p className="text-[#1b4343] font-semibold text-[90%] mb-[2%] font-primary tracking-wide uppercase">
        PROVEN & TRUSTED
      </p>

      <h2 className="text-[180%] font-bold text-[#063231] mb-[4%] leading-snug font-primary">
        Backed by Results, <br /> Built on Relationships
      </h2>

      <p className="text-[#1b4343] mb-[6%] text-[105%] leading-relaxed font-secondary">
        Brikly has become a name homeowners trust. Whether it’s new construction 
        or custom renovation, you’re in good company when you build with Brikly. 
        Our strong partnerships are a reflection of the confidence our clients 
        place in us — project after project.
      </p>

      {/* Stats */}
      <div className="flex flex-col gap-[6%]">
        <div>
          <h3 className="text-[150%] my-[3%] font-bold text-[#063231] font-primary">
            100+
          </h3>
          <p className="font-bold text-[110%] text-[#1b4343] font-primary">
            Satisfied Clients
          </p>
          <p className="text-[#1b4343] text-[95%] leading-relaxed pt-[2%] font-secondary">
            Over 100 projects built with trust and excellence.
          </p>
        </div>

        <div>
          <h3 className="text-[150%] my-[3%] font-bold text-[#063231] font-primary">
            10 Yrs.
          </h3>
          <p className="font-bold text-[110%] text-[#1b4343] font-primary">
            Structural Warranty
          </p>
          <p className="text-[#1b4343] text-[95%] leading-relaxed pt-[2%] font-secondary">
            Structural coverage & quality you can count on.
          </p>
        </div>
      </div>
    </div>

    {/* Right Image */}
    <div className="w-full relative mt-[10%]">
      <div className="rounded-2xl mx-[5%] overflow-hidden shadow-lg">
        <Image
          src="https://cdn.pixabay.com/photo/2023/09/19/15/42/ai-generated-8262931_1280.jpg"
          alt="Happy family in front of home"
          width={600}
          height={700}
          className="object-cover w-full h-auto"
        />
      </div>

      <div className="absolute bottom-4 left-0 bg-lime-400 text-[#1b4343] font-semibold px-[4%] py-[2%] rounded-lg shadow-md font-secondary text-[95%]">
        Long-Term <br /> Reliability
      </div>
    </div>
  </div>
</div>


    {/* tab response */}
<div className="hidden sm:block lg:hidden">
  <div className="bg-white py-[8%] px-[5%]">
    {/* Left Content */}
    <div className="w-full">
      <p className="text-[#1b4343] font-semibold text-[90%] mb-[2%] font-primary tracking-wide uppercase">
        PROVEN & TRUSTED
      </p>

      <h2 className="text-[180%] font-bold text-[#063231] mb-[4%] leading-snug font-primary">
        Backed by Results, <br /> Built on Relationships
      </h2>

      <p className="text-[#1b4343] mb-[6%] text-[100%] leading-relaxed font-secondary">
        Brikly has become a name homeowners trust. Whether it’s new construction
        or custom renovation, you’re in good company when you build with Brikly.
        Our strong partnerships are a reflection of the confidence our clients
        place in us — project after project.
      </p>

      {/* Stats */}
      <div className="flex flex-col gap-[6%]">
        <div>
          <h3 className="text-[160%] my-[3%] font-bold text-[#063231] font-primary">
            100+
          </h3>
          <p className="font-bold text-[110%] text-[#1b4343] font-primary">
            Satisfied Clients
          </p>
          <p className="text-[#1b4343] text-[95%] pt-[2%] font-secondary leading-relaxed">
            Over 100 projects built with trust and excellence.
          </p>
        </div>

        <div>
          <h3 className="text-[160%] my-[3%] font-bold text-[#063231] font-primary">
            10 Yrs.
          </h3>
          <p className="font-bold text-[110%] text-[#1b4343] font-primary">
            Structural Warranty
          </p>
          <p className="text-[#1b4343] text-[95%] pt-[2%] font-secondary leading-relaxed">
            Structural coverage & quality you can count on.
          </p>
        </div>
      </div>
    </div>

    {/* Right Image */}
    <div className="w-full relative mt-[10%]">
      <div className="rounded-2xl mx-[5%] overflow-hidden shadow-lg">
        <Image
          src="https://cdn.pixabay.com/photo/2023/09/19/15/42/ai-generated-8262931_1280.jpg"
          alt="Happy family in front of home"
          width={400}
          height={500}
          className="w-full h-[30%]"
        />
      </div>

      <div className="absolute bottom-4 left-0 bg-lime-400 text-[#1b4343] font-semibold px-[4%] py-[2%] rounded-lg shadow-md font-secondary text-[95%]">
        Long-Term <br /> Reliability
      </div>
    </div>
  </div>
</div>

    </div>
  );
}
