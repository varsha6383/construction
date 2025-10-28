
import Image from "next/image";
import Link from "next/link";
export default function Service() {
  return (
    <main>
      {/*Desktop Responsive*/}
      <div className=" hidden xl:block bg-white">
        <div className="bg-[#218686] flex  items-center justify-center text-center bg-blend-multiply rounded-bl-[80%_100px] rounded-br-[80%_100px] w-full h-[70vh] bg-cover bg-center bg-[url('https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg')]">
          <div className="flex text-white items-center text-center gap-4 py-[10%] px-[20%] flex-col">
            <p className="bg-[#407d7d]/60  px-3 font-semibold py-1 rounded-full cursor-pointer font-primary text-[1vw]">
              SERVICES
            </p>
            <p className="font-bold text-[3vw]  font-primary">
              Our Construction Solutions
            </p>
            <p className="font-sencondary text-[1.2vw]">
              We offer complete construction services to bring your dream home
              to life — with care, skill, and quality materials.
            </p>
          </div>
        </div>
        {/* Section */}

        <div className="flex flex-col gap-15 items-center my-30 text-black">
          <div className="grid grid-cols-2 h-full justify-between w-[63%] border border-gray-400 rounded-3xl items-center">
            <div className="h-full">
              <Image
                src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg"
                alt="Image is missing "
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-l-3xl "
              ></Image>{" "}
            </div>
            <div className="flex flex-col gap-3 p-10 h-full justify-center">
              <p className="font-bold text-[2vw] font-primary text-[#063231]">
                Residential Construction
              </p>
              <p className="font-sencondary text-[1.1vw] text-[#305658]">
                We specialize in custom homes designed to fit your space,
                budget, and lifestyle. From foundation to finishing, we handle
                everything with care.
              </p>
              <p className="font-bold text-[1.7vw] pt-3 font-primary text-[#063231]">
                Key Benefits
              </p>
              <div className="flex gap-2 font-sencondary text-[#305658] text-[1.1vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "
                >
                  <path d="m9 12 2 2 4-6" />
                </svg>
                <p>Detailed planning and site supervision</p>
              </div>

              <div className="flex gap-2 text-[#305658]  font-sencondary text-[1.1vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "
                >
                  <path d="m9 12 2 2 4-6" />
                </svg>
                <p>Strong structure with quality materials</p>
              </div>

              <div className="flex gap-2 font-sencondary text-[#305658] text-[1.1vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "
                >
                  <path d="m9 12 2 2 4-6" />
                </svg>
                <p>Neat finishing and reliable workers</p>
              </div>

              <div className="flex gap-2 font-sencondary text-[#305658] text-[1.1vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "
                >
                  <path d="m9 12 2 2 4-6" />
                </svg>
                <p>Timely project completion</p>
              </div>

              <button className="px-[5%] text-[1.2vw] py-2 mt-4 font-c2a rounded-full w-fit text-[#063231] font-semibold tracking-wide bg-[#cbff54] hover:bg-lime-500 cursor-pointer">
                <Link href="/contact">ENQUIRE NOW</Link>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 h-full  justify-between w-[63%] border border-gray-400 rounded-3xl items-center">
            <div className="flex flex-col gap-3 p-10 h-full justify-center">
              <p className="font-bold text-[2vw] text-[#063231] font-primary">
                Commercial Buildings
              </p>
              <p className="font-sencondary text-[#305658] text-[1.1vw]">
                We also take up small commercial and rental building projects
                that require strong foundations and functional designs.
              </p>
              <p className="font-bold text-[1.7vw] pt-3 font-primary text-[#063231]">
                Key Benefits
              </p>
              <div className="flex gap-2   font-sencondary text-[#305658] text-[1.1vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "
                >
                  <path d="m9 12 2 2 4-6" />
                </svg>
                <p>Safe and modern structures</p>
              </div>

              <div className="flex gap-2 font-sencondary text-[#305658] text-[1.1vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "
                >
                  <path d="m9 12 2 2 4-6" />
                </svg>
                <p>Experienced team coordination</p>
              </div>

              <div className="flex gap-2 font-sencondary text-[#305658] text-[1.1vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "
                >
                  <path d="m9 12 2 2 4-6" />
                </svg>
                <p>Smooth work progress and supervision</p>
              </div>

              <div className="flex gap-2 font-sencondary text-[#305658] text-[1.1vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "
                >
                  <path d="m9 12 2 2 4-6" />
                </svg>
                <p>Built to match your business needs</p>
              </div>

              <button className="px-[5%] text-[1.2vw]  py-2 mt-4 font-c2a w-fit rounded-full font-semibold tracking-wide text-[#063231] bg-[#cbff54] hover:bg-lime-500 cursor-pointer">
                <Link href="/contact">ENQUIRE NOW</Link>
              </button>
            </div>
            <div className="h-[100%]">
              <Image
                src="https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg"
                alt="Image is missing "
                width={1000}
                height={1000}
                className="w-full h-full object-cover  rounded-r-3xl "
              ></Image>{" "}
            </div>
          </div>

          <div className="grid grid-cols-2 h-full justify-between w-[63%] border border-gray-400 rounded-3xl items-center">
            <div className="h-full">
              <Image
                src="https://images.pexels.com/photos/323781/pexels-photo-323781.jpeg"
                alt="Image is missing "
                width={1000}
                height={1000}
                className="w-full h-full object-cover rounded-l-3xl "
              ></Image>{" "}
            </div>
            <div className="flex flex-col gap-3 p-10 h-full justify-center">
              <p className="font-bold text-[2vw] font-primary text-[#063231]">
                Renovation & Remodeling
              </p>
              <p className="font-sencondary text-[1.1vw] text-[#305658]">
                We give new life to old homes through careful renovation and
                smart upgrades — without disturbing your daily routine.
              </p>
              <p className="font-bold text-[1.7vw] pt-3 font-primary text-[#063231]">
                Key Benefits
              </p>
              <div className="flex gap-2 font-sencondary text-[#305658] text-[1.1vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "
                >
                  <path d="m9 12 2 2 4-6" />
                </svg>
                <p>Kitchen and bathroom makeovers</p>
              </div>

              <div className="flex gap-2 text-[#305658]  font-sencondary text-[1.1vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "
                >
                  <path d="m9 12 2 2 4-6" />
                </svg>
                <p>Room extensions and layout changes</p>
              </div>

              <div className="flex gap-2 font-sencondary text-[#305658] text-[1.1vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "
                >
                  <path d="m9 12 2 2 4-6" />
                </svg>
                <p>Structural improvements</p>
              </div>

              <div className="flex gap-2 font-sencondary text-[#305658] text-[1.1vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "
                >
                  <path d="m9 12 2 2 4-6" />
                </svg>
                <p>Clean and budget-friendly finishing</p>
              </div>

              <button className="px-[5%] text-[1.2vw] py-2 mt-4 font-c2a rounded-full w-fit text-[#063231] font-semibold tracking-wide bg-[#cbff54] hover:bg-lime-500 cursor-pointer">
                <Link href="/contact">ENQUIRE NOW</Link>
              </button>
            </div>
          </div>
        </div>

        {/* Section */}
        <div className=" h-full w-full bg-blue-50 py-30">
          <div className="flex flex-col text-center  items-center gap-4 px-[25%]">
            <p className="font-semibold font-primary text-[#305658] text-[1.1vw]">
              3-STEP PROCESS
            </p>
            <p className="font-bold text-[3vw] text-[#063231] font-primary">
              Our Process, Made Simple
            </p>
            <p className=" text-gray-700 font-sencondary text-[1.2vw]">
              We believe that great homes are built through open communication
              and proper planning. Here&apos;s how we make the process easy for you:
            </p>
          </div>

          <div className="grid grid-cols-3 gap-10 items-center h-full w-full justify-center px-[20%] pt-15">
            <div className="flex flex-col gap-3 h-[100%] bg-white shadow-2xl rounded-2xl items-center text-center p-[7%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="54"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#cbff54"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-notebook-text-icon lucide-notebook-text bg-gray-900 rounded-full p-2"
              >
                <path d="M2 6h4" />
                <path d="M2 10h4" />
                <path d="M2 14h4" />
                <path d="M2 18h4" />
                <rect width="16" height="20" x="4" y="2" rx="2" />
                <path d="M9.5 8h5" />
                <path d="M9.5 12H16" />
                <path d="M9.5 16H14" />
              </svg>
              <p className="font-bold text-[1.5vw] font-primary text-[#063231]">
                1. Plan & Discover
              </p>
              <p className="font-sencondary text-[1vw] text-[#305658]">
                We visit your site, understand your needs, and plan the right
                design and cost.
              </p>
            </div>

            <div className="flex flex-col gap-3 h-[100%] bg-white shadow-2xl rounded-2xl items-center text-center p-[7%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="54"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#cbff54"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-school-icon lucide-school rounded-full p-2 bg-gray-900"
              >
                <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
                <path d="M18 5v16" />
                <path d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6" />
                <path d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11" />
                <path d="M6 5v16" />
                <circle cx="12" cy="9" r="2" />
              </svg>
              <p className="font-bold text-[1.5vw] font-primary text-[#063231]">
                2. Design & Quote
              </p>
              <p className="font-sencondary text-[1vw] text-[#305658]">
                We share a clear and simple estimate, along with material
                details and timeline.
              </p>
            </div>

            <div className="flex flex-col gap-3 h-[100%] bg-white shadow-2xl rounded-2xl items-center text-center p-[7%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="54"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#cbff54"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-house-icon lucide-house rounded-full p-2 bg-gray-900"
              >
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
              <p className="font-bold text-[1.5vw] font-primary text-[#063231]">
                3. Build & Deliver
              </p>
              <p className="font-sencondary text-[1vw] text-[#305658] ">
                Our team gets to work, keeps you updated, and completes the
                project as promised.
              </p>
            </div>
          </div>
          <div className=" flex items-center justify-around pt-15">
            <p className=" h-full  tracking-widest font-semibold bg-[#cbff54] text-[#305658] text-[1.2vw] cursor-pointer hover:bg-lime-500 px-8 py-2 rounded-full font-c2a">
              <Link href="/contact">Schedule a Free Consultation</Link>
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Responsive */}

      {/* Lap Responsive */}

      <div className=" hidden xl:hidden lg:block bg-white ">
        <div className="bg-[#218686] flex  items-center justify-center text-center bg-blend-multiply rounded-bl-[80%_100px] rounded-br-[80%_100px] w-full h-[70vh] bg-cover bg-center bg-[url('https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg')]">
          <div className="flex text-white items-center text-center gap-4 py-[10%] px-[20%] flex-col">
            <p className="bg-[#407d7d]/60  px-3 font-semibold py-1 rounded-full cursor-pointer font-primary text-[1.5vw]">
              SERVICES
            </p>
            <p className="font-bold text-[4.5vw]  font-primary">
              Our Construction Solutions
            </p>
            <p className="font-sencondary text-[1.7vw]">
              We offer complete construction services to bring your dream home
              to life — with care, skill, and quality materials.
            </p>
          </div>
        </div>
        {/* Section */}

        <div className="flex flex-col gap-15 items-center px-[8%] my-30">
          <div className="grid grid-cols-2 h-full  justify-between w-[90%] border border-gray-400 rounded-3xl items-center">
            <div className="h-full ">
              <Image
                src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg"
                alt="Image is missing "
                width={1000}
                height={1000}
                className="h-full w-full object-cover rounded-l-3xl "
              ></Image>
            </div>
            <div className="flex flex-col gap-3 p-10  h-full justify-center">
              <p className="font-bold text-[3vw] font-primary text-[#063231]">
                Residential Construction
              </p>
              <p className="font-sencondary text-[1.7vw] text-[#305658]">
                We specialize in custom homes designed to fit your space,
                budget, and lifestyle. From foundation to finishing, we handle
                everything with care.
              </p>
              <p className="font-bold text-[2.3vw] pt-3 font-primary text-[#063231]">
                Key Benefits
              </p>
              <div className="flex gap-2 font-sencondary text-[#305658] text-[1.7vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "
                >
                  <path d="m9 12 2 2 4-6" />
                </svg>
                <p>Detailed planning and site supervision</p>
              </div>

              <div className="flex gap-2 font-sencondary text-[#305658] text-[1.7vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "
                >
                  <path d="m9 12 2 2 4-6" />
                </svg>
                <p>Strong structure with quality materials</p>
              </div>

              <div className="flex gap-2 font-sencondary text-[#305658] text-[1.7vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "
                >
                  <path d="m9 12 2 2 4-6" />
                </svg>
                <p>Neat finishing and reliable workers</p>
              </div>

              <div className="flex gap-2 font-sencondary text-[#305658] text-[1.7vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "
                >
                  <path d="m9 12 2 2 4-6" />
                </svg>
                <p>Timely project completion</p>
              </div>

              <button className="px-[5%] py-2 mt-4 font-c2a w-fit text-[#063231] rounded-full text-[120%] font-semibold tracking-wide bg-[#cbff54] hover:bg-lime-500cursor-pointer">
                <Link href="/contact">ENQUIRE NOW</Link>
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 h-full  justify-between w-[90%] border border-gray-400 rounded-3xl items-center">
            <div className="flex flex-col gap-3 p-10 h-full justify-center">
              <p className="font-bold text-[3vw] font-primary text-[#063231]">
                Commercial Buildings
              </p>
              <p className="font-sencondary text-[1.7vw] text-[#305658] ">
                We also take up small commercial and rental building projects
                that require strong foundations and functional designs.
              </p>
              <p className="font-bold text-[2.3vw] pt-3 text-[#063231] font-primary">
                Key Benefits
              </p>
              <div className="flex gap-2  text-[#305658] font-sencondary text-[1.7vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "
                >
                  <path d="m9 12 2 2 4-6" />
                </svg>
                <p>Safe and modern structures</p>
              </div>

              <div className="flex gap-2 font-sencondary text-[#305658] text-[1.7vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "
                >
                  <path d="m9 12 2 2 4-6" />
                </svg>
                <p>Experienced team coordination</p>
              </div>

              <div className="flex gap-2 font-sencondary text-[#305658] text-[1.7vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "
                >
                  <path d="m9 12 2 2 4-6" />
                </svg>
                <p>Smooth work progress and supervision</p>
              </div>

              <div className="flex gap-2 font-sencondary text-[#305658] text-[1.7vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "
                >
                  <path d="m9 12 2 2 4-6" />
                </svg>
                <p>Built to match your business needs</p>
              </div>

              <button className="px-[5%] text-[120%] py-2 mt-4 text-[#063231] font-c2a w-fit rounded-full font-semibold tracking-wide bg-[#cbff54] hover:bg-lime-500 cursor-pointer">
                <Link href="/contact">ENQUIRE NOW</Link>
              </button>
            </div>
            <div className="h-full">
              <Image
                src="https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg"
                alt="Image is missing "
                width={1000}
                height={1000}
                className="h-full w-full object-cover rounded-r-3xl "
              ></Image>{" "}
            </div>
          </div>

          <div className="grid grid-cols-2 h-full  justify-between w-[90%] border border-gray-400 rounded-3xl items-center">
            <div className="h-full">
              <Image
                src="https://images.pexels.com/photos/323781/pexels-photo-323781.jpeg"
                alt="Image is missing "
                width={1000}
                height={1000}
                className="h-full  w-full object-cover rounded-l-3xl "
              ></Image>{" "}
            </div>
            <div className="flex flex-col gap-3 p-10 h-full justify-center">
              <p className="font-bold text-[3vw] font-primary text-[#063231]">
                Renovation & Remodeling
              </p>
              <p className="font-sencondary text-[1.7vw] text-[#305658]">
                We give new life to old homes through careful renovation and
                smart upgrades — without disturbing your daily routine.
              </p>
              <p className="font-bold text-[2.2vw] pt-3 text-[#063231] font-primary">
                Key Benefits
              </p>
              <div className="flex gap-2 font-sencondary text-[#305658] text-[1.7vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "
                >
                  <path d="m9 12 2 2 4-6" />
                </svg>
                <p>Kitchen and bathroom makeovers</p>
              </div>

              <div className="flex gap-2 text-[#305658] font-sencondary text-[1.7vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "
                >
                  <path d="m9 12 2 2 4-6" />
                </svg>
                <p>Room extensions and layout changes</p>
              </div>

              <div className="flex gap-2 font-sencondary text-[#305658] text-[1.7vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "
                >
                  <path d="m9 12 2 2 4-6" />
                </svg>
                <p>Structural improvements</p>
              </div>

              <div className="flex gap-2 font-sencondary text-[#305658] text-[1.7vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "
                >
                  <path d="m9 12 2 2 4-6" />
                </svg>
                <p>Clean and budget-friendly finishing</p>
              </div>

              <button className="px-[5%] text-[120%] py-2 text-[#063231] mt-4 font-c2a rounded-full w-fit font-semibold tracking-wide bg-[#cbff54] hover:bg-lime-500 cursor-pointer">
                <Link href="/contact">ENQUIRE NOW</Link>
              </button>
            </div>
          </div>
        </div>

        {/* Section */}
        <div className=" h-full w-full bg-blue-50 px-[5%] py-30">
          <div className="flex flex-col text-center  items-center gap-4 px-[10%]">
            <p className="font-semibold font-primary text-[#305658] text-[1.5vw]">
              3-STEP PROCESS
            </p>
            <p className="font-bold text-[3.5vw] text-[#063231] font-primary">
              Our Process, Made Simple
            </p>
            <p className=" text-[#305658] font-sencondary text-[1.8vw]">
              We believe that great homes are built through open communication
              and proper planning. Here&apos;s how we make the process easy for you:
            </p>
          </div>

          <div className="grid grid-cols-3 gap-10 items-center h-full w-full justify-center px-[10%] pt-15">
            <div className="flex flex-col gap-3 bg-white h-[100%] shadow-2xl rounded-2xl items-center text-center p-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="54"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#cbff54"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-notebook-text-icon lucide-notebook-text bg-gray-900 rounded-full p-2"
              >
                <path d="M2 6h4" />
                <path d="M2 10h4" />
                <path d="M2 14h4" />
                <path d="M2 18h4" />
                <rect width="16" height="20" x="4" y="2" rx="2" />
                <path d="M9.5 8h5" />
                <path d="M9.5 12H16" />
                <path d="M9.5 16H14" />
              </svg>
              <p className="font-bold text-[2vw] text-[#063231] font-primary">
                1. Plan & Discover
              </p>
              <p className="font-sencondary text-[#305658] text-[1.7vw]">
                We visit your site, understand your needs, and plan the right
                design and cost.
              </p>
            </div>

            <div className="flex flex-col gap-3 h-[100%] bg-white shadow-2xl rounded-2xl items-center text-center p-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="54"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#cbff54"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-school-icon lucide-school rounded-full p-2 bg-gray-900"
              >
                <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
                <path d="M18 5v16" />
                <path d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6" />
                <path d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11" />
                <path d="M6 5v16" />
                <circle cx="12" cy="9" r="2" />
              </svg>
              <p className="font-bold text-[2vw] text-[#063231] font-primary">
                2. Design & Quote
              </p>
              <p className="font-sencondary text-[#305658] text-[1.7vw]">
                We share a clear and simple estimate, along with material
                details and timeline.
              </p>
            </div>

            <div className="flex flex-col gap-3 h-[100%] bg-white shadow-2xl rounded-2xl items-center text-center p-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="54"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#cbff54"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-house-icon lucide-house rounded-full p-2 bg-gray-900"
              >
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
              <p className="font-bold text-[2vw] text-[#063231] font-primary">
                3. Build & Deliver
              </p>
              <p className="font-sencondary text-[#305658] text-[1.7vw]">
                Our team gets to work, keeps you updated, and completes the
                project as promised.
              </p>
            </div>
          </div>
          <div className=" flex items-center justify-around pt-15">
            <p className=" h-full text-[#305658]  tracking-widest font-semibold bg-[#cbff54] text-[2vw] cursor-pointer hover:bg-lime-500 px-8 py-2 rounded-full font-c2a">
              <Link href="/contact">Schedule a Free Consultation</Link>
            </p>
          </div>
        </div>
      </div>
      {/* Laptop Responsive */}

      {/* tab Responsive  */}
      <div className="h-full w-full hidden sm:block lg:hidden   bg-white  text-black">
        <div className="bg-[#218686] bg-blend-multiply rounded-bl-[80%_100px] rounded-br-[80%_100px] w-full h-[80%] bg-cover bg-center bg-[url('https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg')]">
          <div className="flex text-white items-center text-center gap-4 py-[20%] px-[12%] flex-col">
            <p className="bg-[#407d7d]/60 text-[2vw] px-3  font-semibold py-1 rounded-full cursor-pointer font-primary">
              SERVICES
            </p>
            <p className="font-bold text-[5vw] font-primary">
              Our Construction Solutions
            </p>
            <p className="font-sencondary text-[2.5vw]">
              We offer complete construction services to bring your dream home
              to life — with care, skill, and quality materials.
            </p>
          </div>
        </div>
        {/* Section */}

        <div className="flex flex-col gap-15 items-center py-5 px-[8%]  my-10">
          <div className=" h-full justify-between w-full border  border-gray-400 rounded-3xl items-center">
            <div>
              <Image
                src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg"
                alt="Image is missing "
                width={1000}
                height={1000}
                className="h-[40vh]  rounded-tr-3xl rounded-tl-3xl "
              ></Image>{" "}
            </div>
            <div className="flex flex-col gap-3 text-[#305658] p-5">
              <p className="font-bold text-[4vw] text-[#063231] font-primary">
                Residential Construction
              </p>
              <p className="font-sencondary text-[#305658] text-[2.5vw]">
                We specialize in custom homes designed to fit your space,
                budget, and lifestyle. From foundation to finishing, we handle
                everything with care.
              </p>
              <p className="font-bold text-[3.5vw] pt-3 text-[#063231] font-primary">
                Key Benefits
              </p>
              <div className="flex gap-2 font-sencondary text-[#305658] text-[2.5vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "
                >
                  <path d="m9 12 2 2 4-6" />
                </svg>
                <p>Detailed planning and site supervision</p>
              </div>

              <div className="flex gap-2 font-sencondary text-[#305658] text-[2.5vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "
                >
                  <path d="m9 12 2 2 4-6" />
                </svg>
                <p>Strong structure with quality materials</p>
              </div>

              <div className="flex gap-2 font-sencondary text-[#305658] text-[2.5vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "
                >
                  <path d="m9 12 2 2 4-6" />
                </svg>
                <p>Neat finishing and reliable workers</p>
              </div>

              <div className="flex gap-2 font-sencondary text-[#305658] text-[2.5vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "
                >
                  <path d="m9 12 2 2 4-6" />
                </svg>
                <p>Timely project completion</p>
              </div>

              <button className="px-[5%] py-2 mt-4 rounded-full text-[2.5vw] w-fit font-semibold tracking-wide bg-[#cbff54] hover:bg-lime-500 cursor-pointer font-c2a">
                <Link href="/contact">ENQUIRE NOW</Link>
              </button>
            </div>
          </div>

          <div className=" h-full justify-between w-full border border-gray-400  rounded-3xl items-center">
            <div>
              <Image
                src="https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg"
                alt="Image is missing "
                width={1000}
                height={1000}
                className="h-[40vh]  rounded-tr-3xl rounded-tl-3xl "
              ></Image>{" "}
            </div>
            <div className="flex flex-col  gap-3 p-5">
              <p className="font-bold text-[4vw] text-[#063231] font-primary">
                Commercial Buildings
              </p>
              <p className="font-sencondary text-[#305658] text-[2.5vw]">
                We also take up small commercial and rental building projects
                that require strong foundations and functional designs.
              </p>
              <p className="font-bold text-[3.5vw] text-[#063231] pt-3 font-primary">
                Key Benefits
              </p>
              <div className="flex gap-2  text-[#305658] font-sencondary text-[2.5vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "
                >
                  <path d="m9 12 2 2 4-6" />
                </svg>
                <p>Safe and modern structures</p>
              </div>

              <div className="flex gap-2 font-sencondary text-[#305658] text-[2.5vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "
                >
                  <path d="m9 12 2 2 4-6" />
                </svg>
                <p>Experienced team coordination</p>
              </div>

              <div className="flex gap-2 font-sencondary text-[#305658] text-[2.5vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "
                >
                  <path d="m9 12 2 2 4-6" />
                </svg>
                <p>Smooth work progress and supervision</p>
              </div>

              <div className="flex gap-2 font-sencondary text-[#305658] text-[2.5vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "
                >
                  <path d="m9 12 2 2 4-6" />
                </svg>
                <p>Built to match your business needs</p>
              </div>

              <button className="px-[5%] py-2 mt-4 rounded-full text-[2.5vw] w-fit font-semibold tracking-wide text-[#063231] bg-[#cbff54] hover:bg-lime-500 cursor-pointer font-c2a">
                <Link href="/contact">ENQUIRE NOW</Link>
              </button>
            </div>
          </div>

          <div className=" h-full  justify-between w-full border border-gray-400  rounded-3xl items-center">
            <div>
              <Image
                src="https://images.pexels.com/photos/323781/pexels-photo-323781.jpeg"
                alt="Image is missing "
                width={1000}
                height={1000}
                className="h-[40vh]  rounded-tr-3xl rounded-tl-3xl "
              ></Image>{" "}
            </div>
            <div className="flex flex-col  gap-3 p-5">
              <p className="font-bold text-[4vw] text-[#063231] font-primary">
                Renovation & Remodeling
              </p>
              <p className="font-sencondary text-[#305658] text-[2.5vw]">
                We give new life to old homes through careful renovation and
                smart upgrades — without disturbing your daily routine.
              </p>
              <p className="font-bold text-[3.5vw] text-[#063231] pt-3 font-primary">
                Key Benefits
              </p>
              <div className="flex gap-2 font-sencondary text-[#305658] text-[2.5vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "
                >
                  <path d="m9 12 2 2 4-6" />
                </svg>
                <p>Kitchen and bathroom makeovers</p>
              </div>

              <div className="flex gap-2 text-[#305658] font-sencondary text-[2.5vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "
                >
                  <path d="m9 12 2 2 4-6" />
                </svg>
                <p>Room extensions and layout changes</p>
              </div>

              <div className="flex gap-2 font-sencondary text-[#305658] text-[2.5vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "
                >
                  <path d="m9 12 2 2 4-6" />
                </svg>
                <p>Structural improvements</p>
              </div>

              <div className="flex gap-2 font-sencondary text-[#305658] text-[2.5vw]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "
                >
                  <path d="m9 12 2 2 4-6" />
                </svg>
                <p>Clean and budget-friendly finishing</p>
              </div>

              <button className="px-[5%] py-2 mt-4 text-[2.5vw] rounded-full w-fit font-semibold tracking-wide text-[#063231] bg-[#cbff54] hover:bg-lime-500 cursor-pointer font-c2a">
                <Link href="/contact">ENQUIRE NOW</Link>
              </button>
            </div>
          </div>
        </div>

        {/* Section */}
        <div className=" h-full w-full bg-blue-50 px-[8%]  py-10">
          <div className="flex flex-col text-center  items-center gap-4 px-5">
            <p className="font-semibold text-[2vw] text-[#305658] font-primary">
              3-STEP PROCESS
            </p>
            <p className="font-bold text-[4vw] text-[#063231]  font-primary">
              Our Process, Made Simple
            </p>
            <p className=" text-[#305658] text-[2.5vw] font-sencondary">
              We believe that great homes are built through open communication
              and proper planning. Here&apos;s how we make the process easy for you:
            </p>
          </div>

          <div className="grid grid-row-3 gap-5 items-center h-full w-full p-5 pt-10">
            <div className="flex flex-col gap-3  bg-white shadow-2xl rounded-2xl items-center text-center p-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="54"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#cbff54"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-notebook-text-icon lucide-notebook-text bg-gray-900 rounded-full p-2"
              >
                <path d="M2 6h4" />
                <path d="M2 10h4" />
                <path d="M2 14h4" />
                <path d="M2 18h4" />
                <rect width="16" height="20" x="4" y="2" rx="2" />
                <path d="M9.5 8h5" />
                <path d="M9.5 12H16" />
                <path d="M9.5 16H14" />
              </svg>
              <p className="font-bold text-[4vw] text-[#063231] font-primary">
                1. Plan & Discover
              </p>
              <p className="font-sencondary text-[#305658] text-[2.5vw]">
                We visit your site, understand your needs, and plan the right
                design and cost.
              </p>
            </div>

            <div className="flex flex-col gap-3  bg-white shadow-2xl rounded-2xl items-center text-center p-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="54"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#cbff54"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-school-icon lucide-school rounded-full p-2 bg-gray-900"
              >
                <path d="M14 21v-3a2 2 0 0 0-4 0v3" />
                <path d="M18 5v16" />
                <path d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6" />
                <path d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11" />
                <path d="M6 5v16" />
                <circle cx="12" cy="9" r="2" />
              </svg>
              <p className="font-bold  font-primary text-[#063231] text-[4vw]">
                2. Design & Quote
              </p>
              <p className="font-sencondary text-[#305658] text-[2.5vw]">
                We share a clear and simple estimate, along with material
                details and timeline.
              </p>
            </div>

            <div className="flex flex-col gap-3  bg-white shadow-2xl rounded-2xl items-center text-center p-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="54"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#cbff54"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-house-icon lucide-house rounded-full p-2 bg-gray-900"
              >
                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                <path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              </svg>
              <p
                className="font-bold  font-primary text-[4vw] text-[#063231]
            "
              >
                3. Build & Deliver
              </p>
              <p className="font-sencondary text-[#305658] text-[2.5vw]">
                Our team gets to work, keeps you updated, and completes the
                project as promised.
              </p>
            </div>
          </div>
          <div className=" flex items-center justify-around p-10 text-center">
            <p className=" h-full  tracking-widest  text-[2.5vw] font-semibold text-[#063231] bg-[#cbff54] cursor-pointer hover:bg-lime-500  px-5 py-2 rounded-full font-c2a">
              <Link href="/contact">Schedule a Free Consultation</Link>
            </p>
          </div>
        </div>
      </div>
      {/* tab Responsive  */}

      {/* Mobile Responsive  */}
      <div className="h-full w-full sm:hidden block  bg-white">

      <div className="bg-[#218686] bg-blend-multiply rounded-bl-[80%_50px] rounded-br-[80%_50px] w-full h-[50vh] bg-cover bg-center bg-[url('https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg')]">
        <div className="flex text-white items-center text-center gap-4 py-[30%] px-[5%] flex-col">
          <p className="bg-[#407d7d]/60  px-3 text-[4vw] font-semibold py-1 rounded-full cursor-pointer font-c2a">SERVICES</p>
          <p className="font-bold text-[7vw] font-primary">Our Construction Solutions</p>
          <p className="font-sencondary text-[4vw]">We offer complete construction services to bring your dream home to life — with care, skill, and quality materials.</p>
        </div>
      </div>
      {/* Section */}

      <div className="flex flex-col gap-15 items-center px-[8%] my-10">

        <div className=" h-full justify-between w-full border  border-gray-400 rounded-3xl items-center">
          <div ><Image src="https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg" alt="Image is missing " width={1000} height={1000} className="h-[40vh]  rounded-tr-3xl rounded-tl-3xl "></Image> </div>
          <div className="flex flex-col gap-3  p-5">
            <p className="font-bold text-[6vw] text-[#063231] font-primary">Residential Construction</p>
            <p className="font-sencondary text-[4vw] text-[#305658]">We specialize in custom homes designed to fit your space, budget, and lifestyle. From foundation to finishing, we handle everything with care.</p>
            <p className="font-bold text-[6vw] pt-3 text-[#063231] font-primary ">Key Benefits</p>
            <div className="flex gap-2 font-sencondary text-[#305658] text-[4vw]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>Detailed planning and site supervision</p>
            </div>

            <div className="flex gap-2 font-sencondary text-[#305658] text-[4vw]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>Strong structure with quality materials</p>
            </div>

            <div className="flex gap-2 font-sencondary text-[#305658] text-[4vw]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>Neat finishing and reliable workers</p>
            </div>

            <div className="flex gap-2 font-sencondary text-[#305658] text-[4vw]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>Timely project completion</p>
            </div>

            <button className="px-[5%] py-2 mt-4 text-[4vw] rounded-full w-fit font-semibold tracking-wide text-[#063231] bg-[#cbff54] hover:bg-lime-500 cursor-pointer font-c2a"><Link href='/contact'>ENQUIRE NOW</Link></button>
          </div>

        </div>

        <div className=" h-full justify-between w-full border border-gray-400  rounded-3xl items-center">
          <div ><Image src="https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg" alt="Image is missing " width={1000} height={1000} className="h-[40vh]  rounded-tr-3xl rounded-tl-3xl "></Image> </div>
          <div className="flex flex-col  gap-3 p-5">
            <p className="font-bold text-[6vw] text-[#063231] font-primary">Commercial Buildings</p>
            <p className="font-sencondary text-[#305658] text-[4vw]">We also take up small commercial and rental building projects that require strong foundations and functional designs.</p>
            <p className="font-bold text-[6vw] pt-3 text-[#063231] font-primary">Key Benefits</p>
            <div className="flex gap-2  text-[#305658] font-sencondary text-[4vw]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>Safe and modern structures</p>
            </div>

            <div className="flex gap-2 font-sencondary text-[#305658] text-[4vw]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>Experienced team coordination</p>
            </div>

            <div className="flex gap-2 font-sencondary text-[#305658] text-[4vw]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>Smooth work progress and supervision</p>
            </div>

            <div className="flex gap-2 font-sencondary text-[#305658] text-[4vw]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>Built to match your business needs</p>
            </div>

            <button className="px-[5%] py-2 mt-4 text-[4vw] rounded-full w-fit font-semibold tracking-wide text-[#063231] bg-[#cbff54] hover:bg-lime-500 cursor-pointer font-c2a"><Link href='/contact'>ENQUIRE NOW</Link></button>
          </div>

        </div>

        <div className=" h-full  justify-between w-full border border-gray-400  rounded-3xl items-center">
          <div ><Image src="https://images.pexels.com/photos/323781/pexels-photo-323781.jpeg" alt="Image is missing " width={1000} height={1000} className="h-[40vh]  rounded-tr-3xl rounded-tl-3xl "></Image> </div>
          <div className="flex flex-col gap-3 p-5">
            <p className="font-bold text-[6vw] text-[#063231] font-primary">Renovation & Remodeling</p>
            <p className="font-sencondary text-[#305658]  text-[4vw]">We give new life to old homes through careful renovation and smart upgrades — without disturbing your daily routine.</p>
            <p className="font-bold text-[6vw] pt-3 text-[#063231] font-primary">Key Benefits</p>
            <div className="flex gap-2 font-sencondary text-[#305658]  text-[4vw]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>Kitchen and bathroom makeovers</p>
            </div>

            <div className="flex gap-2 text-[#305658]  font-sencondary text-[4vw]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>Room extensions and layout changes</p>
            </div>

            <div className="flex gap-2 font-sencondary text-[#305658]  text-[4vw]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>Structural improvements</p>
            </div>

            <div className="flex gap-2 font-sencondary text-[#305658]  text-[4vw]">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check bg-black rounded-full "><path d="m9 12 2 2 4-6" /></svg>
              <p>Clean and budget-friendly finishing</p>
            </div>

            <button className="px-[5%] py-2 text-[4vw] mt-4 rounded-full w-fit font-semibold tracking-wide text-[#063231] bg-[#cbff54] hover:bg-lime-500 cursor-pointer font-c2a"><Link href='/contact'>ENQUIRE NOW</Link></button>
          </div>

        </div>
      </div>

      {/* Section */}
      <div className=" h-full w-full bg-blue-50 py-10 px-[8%]">
        <div className="flex flex-col text-center   items-center gap-4 ">
          <p className="font-semibold text-[#305658] text-[4vw] font-primary">3-STEP PROCESS</p>
          <p className="font-bold text-[8vw] font-primary text-[#063231]">Our Process, Made Simple</p>
          <p className=" text-[#305658] font-sencondary text-[4vw]">We believe that great homes are built through open communication and proper planning.
Here&apos;s how we make the process easy for you:</p>
        </div>

        <div className="grid grid-row-3 gap-5 items-center h-full w-full pt-10">
          <div className="flex flex-col gap-3 bg-white  shadow-2xl rounded-2xl items-center text-center p-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#cbff54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-notebook-text-icon lucide-notebook-text bg-gray-900 rounded-full p-2"><path d="M2 6h4" /><path d="M2 10h4" /><path d="M2 14h4" /><path d="M2 18h4" /><rect width="16" height="20" x="4" y="2" rx="2" /><path d="M9.5 8h5" /><path d="M9.5 12H16" /><path d="M9.5 16H14" /></svg>
            <p className="font-bold text-[6.2vw] text-[#063231] font-primary">1. Plan & Discover</p>
            <p className="font-sencondary text-[#305658] text-[4vw]">We visit your site, understand your needs, and plan the right design and cost.</p>
          </div>

          <div className="flex flex-col gap-3 bg-white text-[#305658] shadow-2xl rounded-2xl items-center text-center p-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#cbff54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-school-icon lucide-school rounded-full p-2 bg-gray-900"><path d="M14 21v-3a2 2 0 0 0-4 0v3" /><path d="M18 5v16" /><path d="m4 6 7.106-3.79a2 2 0 0 1 1.788 0L20 6" /><path d="m6 11-3.52 2.147a1 1 0 0 0-.48.854V19a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a1 1 0 0 0-.48-.853L18 11" /><path d="M6 5v16" /><circle cx="12" cy="9" r="2" /></svg>
            <p className="font-bold  text-[6.2vw] text-[#063231] font-primary">2. Design & Quote</p>
            <p className="font-sencondary text-[#305658] text-[4vw]">We share a clear and simple estimate, along with material details and timeline.</p>
          </div>

          <div className="flex flex-col gap-3 bg-white text-[#305658] shadow-2xl rounded-2xl items-center text-center p-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="#cbff54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house-icon lucide-house rounded-full p-2 bg-gray-900"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
            <p className="font-bold text-[6.2vw] font-primary text-[#063231]
            ">3. Build & Deliver</p>
            <p className="font-sencondary text-[#305658] text-[4vw]">Our team gets to work, keeps you updated, and completes the project as promised.</p>
          </div>
        </div>  
        <div className=" flex items-center justify-around p-10 text-center">
          <p className=" h-full text-[4.5vw] tracking-widest text-[#305658] font-semibold bg-[#cbff54] cursor-pointer hover:bg-lime-500  px-3 py-2 rounded-full font-c2a"><Link href="/contact">Schedule a Free Consultation</Link></p>
        </div>
      </div>
      
      </div>

      {/* Mobile Responsive  */}
    </main>
  );
}
