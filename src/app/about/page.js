import Image from "next/image"
import { FaHandHoldingHeart } from "react-icons/fa6";
import { FaFlag } from "react-icons/fa";


export default function About() {
  return (
    <main>
      {/* desktop response */}
      <div className="hidden xl:block bg-white text-lg text-black">

        <div className="bg-[#137a7a]  items-center flex justify-center text-center bg-blend-multiply rounded-bl-[80%_100px] rounded-br-[80%_100px] w-full h-[70vh] bg-cover bg-center bg-[url('https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg')]">
          <div className="flex text-white items-center text-center gap-4 py-[10%] px-[10%] flex-col">
            <p className="bg-[#407d7d]/60 font-sencondary  px-3 font-semibold py-1 rounded-full cursor-pointer">ABOUT</p>
            <p className="font-bold text-[300%]  font-primary">Building With Care, Backed by Trust</p>
            <p className="font-sencondary text-[100%]">At Sri Velan Constructions, we don’t just build houses — we build lasting relationships based on trust, honesty, and quality work.</p>
          </div>
        </div>

        {/* Section */}

        <div className="flex flex-col w-full py-[5%]  px-[18%] bg-white">
          <div className="grid grid-cols-2 ">
            <p className="text-[200%] font-bold text-[#063231]  font-primary">Built in Kambainallore. Trusted Across Dharmapuri.</p>
            <p className="font-sencondary text-[#305658] text-[100%]">At Sri Velan Constructions, construction is more than cement and bricks — it’s about creating strong and comfortable homes that last for generations.
              Based in Kambainallore, Dharmapuri, we focus mainly on residential projects with a balance of quality, timing, and affordability.
              Our goal is simple: to make your dream home a reality through careful planning, reliable manpower, and transparent service.</p>
          </div>

          <div className="grid grid-cols-3 grid-rows-2 py-20">
            <div className="flex flex-col justify-between h-[48vh] p-5 bg-[#0c3636] ">
              <p className="font-semibold text-[#cbff54] font-primary">PROJECTS</p>
              <div className="flex flex-col gap-5">
                <p className="font-bold text-[250%] text-[#cbff54] font-primary">100+</p><p className="text-white text-[100%] font-sencondary">Completed multiple residential building projects in and around Dharmapuri with dedication and detail.</p>
              </div>
            </div>
            <Image src="https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg" alt="Iimage is missing" height={400} width={400} className="h-[48vh] w-full"></Image>
            <div className="flex flex-col justify-between h-[48vh] p-5 bg-[#0c3636]">
              <p className="font-semibold text-[#cbff54] font-primary">HAPPY CLIENTS</p>
              <div className="flex flex-col gap-5">
                <p className="font-bold text-[250%] text-[#cbff54] font-primary">3+ Families</p><p className="text-white text-[100%] font-sencondary">Earned the trust of happy homeowners through honest work and clear communication.</p>
              </div>
            </div>
            <Image src="https://images.pexels.com/photos/11916566/pexels-photo-11916566.jpeg" alt="Iimage is missing" height={400} width={400} className="h-[48vh] w-full"></Image>

            <div className="flex flex-col justify-between h-[48vh] p-5 bg-[#cbff54]">
              <p className="font-semibold text-[#063231] font-primary">COMMITMENT</p>
              <div className="flex flex-col gap-5">
                <p className="font-bold text-[250%] text-[#063231] font-primary">100% Effort</p><p className="font-sencondary text-[#063231] text-[100%] ">Every project gets our full focus — from the first plan to the final finish.</p>
              </div>
            </div>
            <Image src="https://images.pexels.com/photos/6320924/pexels-photo-6320924.jpeg" alt="Iimage is missing" height={400} width={400} className="h-[48vh] w-full"></Image>

          </div>
        </div>

        {/* Section */}
        <div className="flex  flex-col text-center px-[18%] py-[7%] bg-[#f6f7f7]">
          <p className=" font-semibold text-[90%] pb-5 text-[#305658] font-primary">IMPACTFUL</p>
          <p className="text-[300%] font-bold font-primary text-[#063231]">Vision, Mission & Values</p>
          <div className="grid grid-cols-3 grid-rows-1  justify-center gap-10 w-full h-full items-center px-[3%] pt-[8%]">
           
            <div className="flex flex-col gap-3 bg-white h-full shadow-2xl rounded-2xl items-center text-center p-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#cbff54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target-icon lucide-target rounded-full p-1 bg-[#063231] "><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /></svg>
              <p className="font-bold text-[150%] text-[#063231] font-primary">Our Vision</p>
              <p className="font-sencondary text-[90%] text-[#305658]">To create safe, beautiful homes that bring happiness and pride to every family we serve.</p>
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-2xl rounded-2xl items-center text-center p-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="#cbff54" stroke="#cbff54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flag-icon lucide-flag rounded-full p-1.5 bg-[#063231]"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" /></svg>
              <p className="font-bold text-[150%] font-primary text-[#063231]">Our Mission</p>
              <p className="font-sencondary text-[90%] text-[#305658]">To make construction simple and dependable through skilled work, open communication, and genuine care for clients. </p>
            </div>

            <div className="flex flex-col gap-3 bg-white h-full shadow-2xl rounded-2xl items-center text-center p-10">
<FaHandHoldingHeart size={44} color="#cbff54" className="rounded-full  p-1.5 bg-[#063231]"/>
              <p className="font-bold text-[150%] font-primary text-[#063231]">Our Values</p>
              <p className="font-sencondary text-[90%] text-[#305658]">We believe in integrity, responsibility, and quality. Every project is handled with respect for time, trust, and budget.</p>
            </div>

            

          </div>
        </div>
        {/* Section */}

        <div className="grid grid-cols-2 gap-10 justify-between bg-white h-full w-full px-[18%] py-[7%]">
          <Image src="https://images.pexels.com/photos/15200451/pexels-photo-15200451.jpeg" alt="Image is missing" width={500} height={500} className="rounded-2xl"></Image>

          <div className="flex flex-col gap-5 justify-center">
            <p className="font-primary text-[110%] text-[#063231]">REAL FOUNDATION</p>
            <p className="font-bold text-[300%] font-primary text-[#063231]">What Drives Us</p>
            <p className="font-sencondary text-[100%] text-[#305658]">We started Sri Velan Constructions with one goal — to bring reliability and quality back into local home construction.
              Our team focuses on clear communication, clean work, and long-term strength.
              From small houses to full family homes, we put our heart into every build.</p>
            <div className="flex gap-2 pt-10 font-sencondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p className="font-sencondary text-[100%] text-[#305658]">Experienced Local Builders</p>
            </div>

            <div className="flex gap-2 font-sencondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p className="font-sencondary text-[100%] text-[#305658]">Quality Materials & Neat Work</p>
            </div>

            <div className="flex gap-2 font-sencondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p className="font-sencondary text-[100%] text-[#305658]">Quality Materials & Neat Work</p>
            </div>

            <div className="flex gap-2 font-sencondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p className="font-sencondary text-[100%] text-[#305658]">Friendly and Honest Service</p>
            </div>
          </div>
        </div>
      </div>



      {/* Laptop Response */}
      <div className="hidden lg:block xl:hidden bg-white text-lg text-black">

        <div className="bg-[#137a7a]  items-center flex justify-center text-center bg-blend-multiply rounded-bl-[80%_100px] rounded-br-[80%_100px] w-full h-[70vh] bg-cover bg-center bg-[url('https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg')]">
          <div className="flex text-white items-center text-center gap-4 py-[10%] px-[10%] flex-col">
            <p className="bg-[#407d7d]/60 font-sencondary  px-3 font-semibold py-1 rounded-full cursor-pointer">ABOUT</p>
            <p className="font-bold text-[250%] text-white font-primary">Building With Care, Backed by Trust</p>
            <p className="font-sencondary text-[90%] text-white">At Sri Velan Constructions, we don’t just build houses — we build lasting relationships based on trust, honesty, and quality work.</p>
          </div>
        </div>

        {/* Section */}

        <div className="flex flex-col w-full py-[4%]  px-[10%] bg-white">
          <div className="grid grid-cols-2 ">
            <p className="text-[170%] font-bold  font-primary text-[#063231]">Built in Kambainallore. Trusted Across Dharmapuri.</p>
            <p className="font-sencondary text-[80%] text-[#305658]">At Sri Velan Constructions, construction is more than cement and bricks — it’s about creating strong and comfortable homes that last for generations.
              Based in Kambainallore, Dharmapuri, we focus mainly on residential projects with a balance of quality, timing, and affordability.
              Our goal is simple: to make your dream home a reality through careful planning, reliable manpower, and transparent service.</p>
          </div>

          <div className="grid grid-cols-3 grid-rows-2 py-20">
            <div className="flex flex-col justify-between h-[48vh] p-5 bg-[#0c3636] ">
              <p className="font-semibold text-[#cbff54] text-[100%] font-primary">PROJECTS</p>
              <div className="flex flex-col gap-5">
                <p className="font-bold text-[170%] text-[#cbff54] font-primary ">100+</p><p className="text-white text-[80%] font-sencondary">Completed multiple residential building projects in and around Dharmapuri with dedication and detail.</p>
              </div>
            </div>
            <Image src="https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg" alt="Iimage is missing" height={400} width={400} className="h-[48vh] w-full"></Image>
            <div className="flex flex-col justify-between h-[48vh] p-5 bg-[#0c3636]">
              <p className="font-semibold text-[#cbff54] text-[100%] font-primary">HAPPY CLIENTS</p>
              <div className="flex flex-col gap-5">
                <p className="font-bold text-[170%] text-[#cbff54] font-primary">3+ Families</p><p className="text-white text-[80%] font-sencondary">Earned the trust of happy homeowners through honest work and clear communication.</p>
              </div>
            </div>
            <Image src="https://images.pexels.com/photos/11916566/pexels-photo-11916566.jpeg" alt="Iimage is missing" height={400} width={400} className="h-[48vh] w-full"></Image>

            <div className="flex flex-col justify-between h-[48vh] p-5 bg-[#cbff54]">
              <p className="font-semibold text-[#063231] text-[100%] font-primary">COMMITMENT</p>
              <div className="flex flex-col gap-5">
                <p className="font-bold text-[170%] text-[#063231] font-primary">100% Effort</p><p className="font-sencondary text-[80%] text-[#063231]">Every project gets our full focus — from the first plan to the final finish.</p>
              </div>
            </div>
            <Image src="https://images.pexels.com/photos/6320924/pexels-photo-6320924.jpeg" alt="Iimage is missing" height={400} width={400} className="h-[48vh] w-full"></Image>

          </div>
        </div>

        {/* Section */}
        <div className="flex  flex-col text-center px-[10%] py-[7%] bg-[#f6f7f7]">
          <p className=" font-semibold text-[80%] pb-5 font-primary text-[#305658]">IMPACTFUL</p>
          <p className="text-[250%] font-bold font-primary text-[#063231]">Vision, Mission & Values</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center items-stretch px-[3%] pt-[8%]">
  {/* Vision */}
  <div className="flex flex-col justify-between bg-white shadow-2xl rounded-2xl items-center text-center p-10 min-h-[340px]">
    <div className="flex flex-col items-center gap-3">
      <div className="p-2 rounded-full bg-[#063231]">
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#cbff54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
        </svg>
      </div>
      <p className="font-bold text-[100%] font-primary text-[#063231]">Our Vision</p>
      <p className="font-secondary text-[80%] leading-relaxed text-[#305658]">
        To create safe, beautiful homes that bring happiness and pride to every family we serve.
      </p>
    </div>
  </div>

  {/* Mission */}
  <div className="flex flex-col justify-between bg-white shadow-2xl rounded-2xl items-center text-center p-10 min-h-[340px]">
    <div className="flex flex-col items-center gap-3">
      <div className="p-2 rounded-full bg-[#063231]">
        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="#cbff54" stroke="#cbff54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" />
        </svg>
      </div>
      <p className="font-bold text-[90%] font-primary text-[#063231]">Our Mission</p>
      <p className="font-secondary text-[80%] leading-relaxed text-[#305658]">
        To make construction simple and dependable through skilled work, open communication, and genuine care for clients.
      </p>
    </div>
  </div>

  {/* Values */}
  <div className="flex flex-col justify-between bg-white shadow-2xl rounded-2xl items-center text-center p-10 min-h-[340px]">
    <div className="flex flex-col items-center gap-3">
      <div className="p-2 rounded-full bg-[#063231]">
       <FaHandHoldingHeart size={44} color="#cbff54" className="rounded-full  p-1 bg-[#063231]"/>

      </div>
      <p className="font-bold text-[100%] font-primary text-[#063231]">Our Values</p>
      <p className="font-secondary text-[80%] leading-relaxed text-[#305658]">
        We believe in integrity, responsibility, and quality. Every project is handled with respect for time, trust, and budget.
      </p>
    </div>
  </div>
</div>

        </div>
        {/* Section */}

        <div className="grid grid-cols-2 gap-10 justify-between bg-white h-full w-full px-[12%] py-[7%]">
          <Image src="https://images.pexels.com/photos/15200451/pexels-photo-15200451.jpeg" alt="Image is missing" width={500} height={500} className="rounded-2xl"></Image>

          <div className="flex flex-col gap-5 justify-center">
            <p className="font-primary text-[90%] text-[#063231]">REAL FOUNDATION</p>
            <p className="font-bold text-[250%] font-primary text-[#063231]">What Drives Us</p>
            <p className="font-sencondary text-[80%] text-[#305658]">We started Sri Velan Constructions with one goal — to bring reliability and quality back into local home construction.
              Our team focuses on clear communication, clean work, and long-term strength.
              From small houses to full family homes, we put our heart into every build.</p>
            <div className="flex gap-2 pt-10 font-sencondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p className="font-sencondary text-[90%] text-[#305658]">Experienced Local Builders</p>
            </div>

            <div className="flex gap-2 font-sencondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p className="font-sencondary text-[90%] text-[#305658]">Quality Materials & Neat Work</p>
            </div>

            <div className="flex gap-2 font-sencondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p className="font-sencondary text-[90%] text-[#305658]">Quality Materials & Neat Work</p>
            </div>

            <div className="flex gap-2 font-sencondary">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p className="font-sencondary text-[90%] text-[#305658]">Friendly and Honest Service</p>
            </div>
          </div>
        </div>
      </div>


      {/* Mobile Response */}



      <div className="sm:hidden block bg-white  text-[100%] text-black">

        <div className="bg-[#218686]  bg-blend-multiply rounded-bl-[80%_100px] rounded-br-[80%_100px] w-full h-[40vh] bg-cover bg-center bg-[url('https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg')]">
          <div className="flex text-white items-center text-center gap-4 py-[20%]  px-[5%] flex-col">
            <p className="bg-[#407d7d]/60  px-3 font-semibold py-1 rounded-full text-[100%] cursor-pointer font-c2a">ABOUT</p>
            <p className="font-bold text-[180%] font-primary text-white">Building With Care, Backed by Trust</p>
            <p className="font-sencondary text-[100%] text-white">At Sri Velan Constructions, we don’t just build houses — we build lasting relationships based on trust, honesty, and quality work.</p>
          </div>
        </div>

        {/* Section */}
        <div className="flex flex-col  w-full py-[8%]  px-[8%] bg-white">
          <div className="grid grid-row-2  gap-[8%]">
            <p className="text-[180%] font-bold text-[#063231] font-primary">Built in Kambainallore. Trusted Across Dharmapuri.</p>
            <p className="pb-[5%] font-sencondary text-[#305658] text-[100%]">At Sri Velan Constructions, construction is more than cement and bricks — it’s about creating strong and comfortable homes that last for generations.
              Based in Kambainallore, Dharmapuri, we focus mainly on residential projects with a balance of quality, timing, and affordability.
              Our goal is simple: to make your dream home a reality through careful planning, reliable manpower, and transparent service.</p>
          </div>

          <div className="grid-rows-6  py-[10%]">
            <div className="flex flex-col justify-between h-[28vh] p-5 bg-[#0c3636]">
              <p className="font-semibold text-[#cbff54]  font-primary">PROJECTS</p>
              <div className="flex flex-col gap-5">
                <p className="font-bold text-[200%] text-[#cbff54] font-primary">100+</p><p className="text-white text-[90%] font-sencondary">Completed multiple residential building projects in and around Dharmapuri with dedication and detail.</p>
              </div>
            </div>
            <Image src="https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg" alt="Iimage is missing" height={400} width={400} className="h-[48vh] w-full"></Image>
            <div className="flex flex-col justify-between h-[28vh] p-5 bg-[#0c3636]">
              <p className="font-semibold text-[#cbff54] font-primary">HAPPY CLIENTS</p>
              <div className="flex flex-col gap-5">
                <p className="font-bold text-[200%] text-[#cbff54] font-primary">3+ Families</p><p className="text-white text-[90%] font-sencondary ">Earned the trust of happy homeowners through honest work and clear communication.</p>
              </div>
            </div>
            <Image src="https://images.pexels.com/photos/11916566/pexels-photo-11916566.jpeg" alt="Iimage is missing" height={400} width={400} className="h-[48vh] w-full"></Image>

            <div className="flex flex-col justify-between h-[28vh] p-5 bg-[#cbff54]">
              <p className="font-semibold text-[#063231] font-primary">COMMITMENT</p>
              <div className="flex flex-col gap-5">
                <p className="font-bold text-[200%] text-[#063231] font-primary">100% Effort</p><p className="font-sencondary text-[#063231] text-[90%]">Every project gets our full focus — from the first plan to the final finish.</p>
              </div>
            </div>
            <Image src="https://images.pexels.com/photos/6320924/pexels-photo-6320924.jpeg" alt="Iimage is missing" height={400} width={400} className="h-[48vh] w-full"></Image>

          </div>
        </div>

        {/* Section */}
        <div className="flex  flex-col text-center px-[8%] py-[7%] bg-[#f6f7f7]">
          <p className=" font-semibold text-[90%] pb-5 text-[#305658] font-primary">IMPACTFUL</p>
          <p className="text-[170%] font-bold font-primary text-[#063231]">Vision, Mission & Values</p>
          <div className="grid grid-cols-1 grid-rows-3 gap-10 items-center pt-[8%]">
            <div className="flex flex-col gap-3 bg-white h-full shadow-2xl justify-center rounded-2xl items-center text-center p-[5%]">
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#cbff54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target-icon lucide-target rounded-full p-1 bg-[#063231] "><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /></svg>
              <p className="font-bold text-[150%] font-primary text-[#063231]">Our Vision</p>
              <p className="font-sencondary text-[100%] text-[#305658]">To create safe, beautiful homes that bring happiness and pride to every family we serve.</p>
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-2xl rounded-2xl items-center text-center p-[5%]">
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="#cbff54" stroke="#cbff54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flag-icon lucide-flag rounded-full p-1 bg-[#063231]"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" /></svg>
              <p className="font-bold text-[150%] font-primary text-[#063231]">Our Mission</p>
              <p className="font-sencondary text-[100%] text-[#305658]">To make construction simple and dependable through skilled work, open communication, and genuine care for clients. </p>
            </div>

            <div className="flex flex-col gap-3 bg-white shadow-2xl rounded-2xl items-center text-center p-[5%]">
       <FaHandHoldingHeart size={44} color="#cbff54" className="rounded-full  p-1 bg-[#063231]"/>
              <p className="font-bold text-[150%] font-primary text-[#063231]">Our Values</p>
              <p className="font-sencondary text-[100%] text-[#305658]">We believe in integrity, responsibility, and quality. Every project is handled with respect for time, open communication,trust, and budget. </p>
            </div>


          </div>
        </div>

        {/* Section */}

        <div className="grid grid-cols-1 grid-rows-2 justify-between bg-white h-full w-full px-[8%] py-[7%]">
          <Image src="https://images.pexels.com/photos/15200451/pexels-photo-15200451.jpeg" alt="Image is missing" width={500} height={500} className="rounded-2xl"></Image>

          <div className="flex flex-col gap-3 justify-center">
            <p className="font-primary text-[100%] text-[#063231]">REAL FOUNDATION</p>
            <p className="font-bold text-[170%] font-primary text-[#063231]">What Drives Us</p>
            <p className="font-sencondary text-[100%] text-[#305658]">We started Sri Velan Constructions with one goal — to bring reliability and quality back into local home construction.
              Our team focuses on clear communication, clean work, and long-term strength.
              From small houses to full family homes, we put our heart into every build.</p>
            <div className="flex gap-2 pt-10 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p className="font-sencondary text-[100%] text-[#305658]">Experienced Local Builders</p>
            </div>

            <div className="flex gap-2 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p className="font-sencondary text-[100%] text-[#305658]">Quality Materials & Neat Work</p>
            </div>

            <div className="flex gap-2 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p className="font-sencondary text-[100%] text-[#305658]">On-Time Project Delivery</p>
            </div>

            <div className="flex gap-2 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p className="font-sencondary text-[100%] text-[#305658]">Friendly and Honest Service</p>
            </div>
          </div>
        </div>
      </div>



{/* Tab */}




      <div className="hidden sm:block lg:hidden  bg-white">

        <div className="bg-[#218686]  bg-blend-multiply rounded-bl-[80%_100px] rounded-br-[80%_100px] w-full h-[80%] bg-cover bg-center bg-[url('https://images.pexels.com/photos/2079234/pexels-photo-2079234.jpeg')]">
          <div className="flex text-white items-center text-center gap-4 py-[20%]  px-[8%] flex-col">
            <p className="bg-[#407d7d]/60  px-3 text-[100%] font-semibold py-1 rounded-full cursor-pointer font-primary">ABOUT</p>
            <p className="font-bold text-[170%] font-primary text-white">Building With Care, Backed by Trust</p>
            <p className="font-sencondary text-[100%] text-white">At Sri Velan Constructions, we don’t just build houses — we build lasting relationships based on trust, honesty, and quality work.</p>
          </div>
        </div>

        {/* Section */}
        <div className="flex flex-col  w-full py-[8%]  px-[8%] bg-white">
          <div className="grid grid-row-2  gap-[8%]">
            <p className="text-[150%] font-bold text-[#063231] font-primary">Built in Kambainallore. Trusted Across Dharmapuri.</p>
            <p className="pb-[5%] font-sencondary text-[#305658] text-[90%]">At Sri Velan Constructions, construction is more than cement and bricks — it’s about creating strong and comfortable homes that last for generations.
              Based in Kambainallore, Dharmapuri, we focus mainly on residential projects with a balance of quality, timing, and affordability.
              Our goal is simple: to make your dream home a reality through careful planning, reliable manpower, and transparent service.</p>
          </div>

          <div className="grid-rows-6  py-[10%]">
            <div className="flex flex-col justify-between h-[28vh] p-5  bg-[#0c3636]">
              <p className="font-semibold text-[#cbff54] text-[100%] font-primary">PROJECTS</p>
              <div className="flex flex-col ">
                <p className="font-bold text-[170%] text-[#cbff54] font-primary">100+</p><p className="text-white  text-[80%] pb-[5%] font-sencondary">Completed multiple residential building projects in and around Dharmapuri with dedication and detail.</p>
              </div>
            </div>
            <Image src="https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg" alt="Iimage is missing" height={400} width={400} className="h-[48vh]   w-full"></Image>
            <div className="flex flex-col justify-between h-[28vh] p-5 bg-[#0c3636]">
              <p className="font-semibold text-[#cbff54] text-[100%] font-primary">HAPPY CLIENTS</p>
              <div className="flex flex-col ">
                <p className="font-bold text-[170%] text-[#cbff54] font-primary">3+ Families</p><p className="text-white text-[80%] font-sencondary">Earned the trust of happy homeowners through honest work and clear communication.</p>
              </div>
            </div>
            <Image src="https://images.pexels.com/photos/11916566/pexels-photo-11916566.jpeg" alt="Iimage is missing" height={400} width={400} className="h-[48vh] w-full"></Image>

            <div className="flex flex-col justify-between h-[28vh] p-5 bg-[#cbff54]">
              <p className="font-semibold text-[#0c3636] text-[100%] font-primary">COMMITMENT</p>
              <div className="flex flex-col ">
                <p className="font-bold text-[170%] text-[#0c3636] font-primary">100% Effort</p><p className="font-sencondary text-[#305658] text-[80%]">Every project gets our full focus — from the first plan to the final finish.</p>
              </div>
            </div>
            <Image src="https://images.pexels.com/photos/6320924/pexels-photo-6320924.jpeg" alt="Iimage is missing" height={400} width={400} className="h-[48vh] w-full"></Image>

          </div>
        </div>

        {/* Section */}
        <div className="flex  flex-col text-center px-[8%] py-[7%] bg-[#f6f7f7]">
          <p className=" font-semibold text-[70%] pb-5 text-[#305658] font-primary">IMPACTFUL</p>
          <p className="text-[170%] font-bold font-primary text-[#063231]">Vision, Mission & Values</p>
          <div className="grid grid-cols-1 grid-rows-3 gap-10 items-center pt-[8%]">
            <div className="flex flex-col gap-3 bg-white h-full shadow-2xl justify-center rounded-2xl items-center text-center p-[5%]">
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#cbff54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-target-icon lucide-target rounded-full p-1 bg-[#063231] "><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /></svg>
              <p className="font-bold text-[120%] font-primary text-[#063231]">Our Vision</p>
              <p className="font-sencondary text-[90%] text-[#305658]">To create safe, beautiful homes that bring happiness and pride to every family we serve.</p>
            </div>
            <div className="flex flex-col gap-3 bg-white shadow-2xl rounded-2xl items-center text-center p-[5%]">
              <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="#cbff54" stroke="#cbff54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-flag-icon lucide-flag rounded-full p-1 bg-[#063231]"><path d="M4 22V4a1 1 0 0 1 .4-.8A6 6 0 0 1 8 2c3 0 5 2 7.333 2q2 0 3.067-.8A1 1 0 0 1 20 4v10a1 1 0 0 1-.4.8A6 6 0 0 1 16 16c-3 0-5-2-8-2a6 6 0 0 0-4 1.528" /></svg>
              <p className="font-bold text-[120%] font-primary text-[#063231]">Our Mission</p>
              <p className="font-sencondary text-[90%] text-[#305658]">To make construction simple and dependable through skilled work, open communication, and genuine care for clients. </p>
            </div>

            <div className="flex flex-col gap-3 bg-white shadow-2xl rounded-2xl items-center text-center p-[5%]">
       <FaHandHoldingHeart size={44} color="#cbff54" className="rounded-full  p-1 bg-[#063231]"/>
              <p className="font-bold text-[120%] font-primary text-[#063231]">Our Values</p>
              <p className="font-sencondary text-[90%] text-[#305658]">We believe in integrity, responsibility, and quality. Every project is handled with respect for time, open communication,trust, and budget. </p>
            </div>


          </div>
        </div>

        {/* Section */}

        <div className=" flex flex-col justify-center items-center gap-10  bg-white h-[70%] w-full px-[8%] py-[7%]">
          <Image src="https://images.pexels.com/photos/15200451/pexels-photo-15200451.jpeg" alt="Image is missing" width={400} height={300} className="rounded-2xl "></Image>

          <div className="flex flex-col gap-3 justify-center">
<p className="font-primary text-[90%] text-[#063231]">REAL FOUNDATION</p>
            <p className="font-bold text-[170%] font-primary text-[#063231]">What Drives Us</p>
            <p className="font-sencondary text-[90%] text-[#305658]">We started Sri Velan Constructions with one goal — to bring reliability and quality back into local home construction.
              Our team focuses on clear communication, clean work, and long-term strength.
              From small houses to full family homes, we put our heart into every build.</p>
            <div className="flex gap-2 pt-10 font-sencondary text-[#305658] text-[90%]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>Experienced Local Builders</p>
            </div>

            <div className="flex gap-2 font-sencondary text-[#305658] text-[90%]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>Quality Materials & Neat Work</p>
            </div>

            <div className="flex gap-2 font-sencondary text-[#305658] text-[90%]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>On-Time Project Delivery</p>
            </div>

            <div className="flex gap-2 font-sencondary text-[#305658] text-[90%]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>Friendly and Honest Service</p>
            </div>
          </div>
        </div>
      </div>

  
    </main>
  )
}