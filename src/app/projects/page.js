"use client";
import { useState } from "react";
import Image from "next/image";

export default function Project() {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      title: "Puddireddipatti Site",
      type: "Residential",
      status: "Completed",
      img: "https://cdn.pixabay.com/photo/2023/09/19/15/42/ai-generated-8262931_1280.jpg",
      desc: "A compact and well-planned home designed for comfortable living with strong construction and modern interior layout. The project includes structural, electrical, and finishing works completed to high-quality standards.",
      highlights: [
        "Completed in 5 months",
        "₹25 Lakhs total budget",
        "15 skilled workers on site",
      ],
    },
    {
      title: "Pachanampatti Site",
      type: "Residential",
      status: "Completed",
      img: "https://images.pexels.com/photos/29334668/pexels-photo-29334668.png",
      desc: "A spacious  with modern design and durable construction. This project focused on open space planning, ventilation, and long-lasting materials to ensure both comfort and quality.",
      highlights: [
        "Completed in 1 year",
        "35 skilled workers involved",
        "Total budget: ₹60 Lakhs",
      ],
    },
    {
      title: "Perichagoudampatti Site",
      type: "Residential",
      status: "Completed",
      img: "https://cdn.pixabay.com/photo/2023/09/19/15/42/ai-generated-8262931_1280.jpg",
      desc: "A beautifully structured residential home featuring a functional layout and premium finish. Built using high-grade materials and experienced workmanship, ensuring strength and elegance in every detail.",
      highlights: [
        "Completed in 5 months",
        "25 skilled workers involved",
        "Total budget: ₹33 Lakhs",
      ],
    },
    {
      title: "",
      type: "",
      status: "Upcoming",
      img: "https://images.pexels.com/photos/162031/dubai-tower-arab-khalifa-162031.jpeg",
      desc: "",
      highlights: [],
    },
  ];

  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.status === filter);

  return (
    <main>
      {/* Desktop Responsive*/}
      <div className="hidden h-full w-full xl:block bg-white mb-[5%]  text-[120%] ">
        <div className="bg-[#218686] bg-blend-multiply flex items-center justify-center  rounded-bl-[80%_100px] rounded-br-[80%_100px] w-full h-[70vh] bg-cover bg-center bg-[url('https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg')]">
          <div className="flex text-white items-center text-center gap-4 py-[10%] px-[15%] flex-col">
            <p className="bg-[#407d7d]/60  px-3 text-[1vw] font-semibold py-1 rounded-full cursor-pointer font-primary">
              PROJECTS
            </p>
            <p className="font-bold text-[3vw]  font-primary text-white">
              From Design to Reality
            </p>
            <p className="font-sencondary text-[1.1vw] text-white">
              At Sri Velan Constructions, we turn every idea into a strong
              foundation of trust, quality, and craftsmanship. Explore our proud
              works — where each project speaks of dedication, precision, and
              the promise to last for generations.
            </p>
          </div>
        </div>

        {/* Section */}
        <div>
          <div className="flex flex-col text-center justify-center items-center my-20">
            <p className="font-semibold font-primary text-[#305658] text-[1vw]">
              BUILT TO LAST
            </p>
            <p className="font-bold text-[2.5vw] px-[10%] text-[#063231] font-primary">
              Where Every Project Becomes a Landmark
            </p>
          </div>
          {/* Filter Buttons */}
          <div className="flex gap-10 text-[1vw] justify-center pb-10">
            {["All", "Completed", "Upcoming"].map((cat) => (
              <p
                key={cat}
                onClick={() => setFilter(cat)}
                className={`cursor-pointer font-bold tracking-wider shadow-2xl text-[#305658]  px-4 py-2 rounded-xl transition-colors 
        ${
          filter === cat
            ? "font-bold font-primary tracking-wider bg-[#063231] text-[#cbff54]"
            : "hover:bg-[#0f4544] font-primary bg-gray-200 hover:text-[#cbff54]"
        }`}
              >
                {cat === "Completed"
                  ? "Completed Projects"
                  : cat === "Upcoming"
                  ? "Upcoming Projects"
                  : "All"}
              </p>
            ))}
          </div>

          {/* Projects */}
          <div className="grid grid-cols-2  auto-rows-auto mx-[18%] gap-10  ">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 transition-transform text-[#305658]  duration-300 ease-in-out  hover:scale-101 shadow-xl rounded-4xl border-dotted w-full"
              >
                {/* For upcoming project: full image only */}
                {project.status === "Upcoming" ? (
                  <div className="h-full bg-[#218686]/60 rounded-4xl  w-full  relative">
                    <Image
                      src={project.img}
                      alt="Upcoming Project"
                      width={1920}
                      height={1080}
                      className="object-cover h-full w-full mix-blend-multiply rounded-4xl"
                    />
                    <div className="absolute top-[45%] left-[25%]  font-semibold font-sencondary text-black text-[2.5vw]">
                      {" "}
                      Coming Soon.....
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Completed / other projects */}
                    <div className=" w-full ">
                      <Image
                        src={project.img}
                        alt={project.title}
                        width={400}
                        height={400}
                        className="bg-cover h-full w-full rounded-b-[20%] rounded-t-4xl"
                      />
                    </div>
                    <div className="flex flex-col gap-5 px-5 h-[50%]">
                      <p className="font-bold text-[1.6vw] font-primary text-[#063231]">
                        {project.title}
                      </p>
                      <p className="font-sencondary text-[1.2vw] h-full indent-8 text-[#305658]">
                        {project.desc}
                      </p>
                      {project.highlights.length > 0 && (
                        <>
                          <p className="font-semibold text-[1.2vw] font-primary text-[#063231]">
                            Highlights
                          </p>
                          {project.highlights.map((item, i) => (
                            <div key={i} className="flex gap-2">
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
                                className="lucide lucide-circle-check bg-black rounded-full"
                              >
                                <path d="m9 12 2 2 4-6" />
                              </svg>
                              <p className="font-sencondary text-[1.2vw] ">
                                {item}
                              </p>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                    <hr />
                    <p className="px-[5%]   text-gray-800 text-[1.3vw] pb-[2%]">
                      Type:{" "}
                      <span className=" text-[#063231] font-semibold">
                        {project.type}
                      </span>
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Desktop Responsive */}

      {/* Laptop Responsive*/}

      <div className="hidden h-full w-full lg:block xl:hidden bg-white mb-[5%]  text-[120%]">
        <div className="bg-[#218686] bg-blend-multiply flex items-center justify-center  rounded-bl-[80%_100px] rounded-br-[80%_100px] w-full h-[70vh] bg-cover bg-center bg-[url('https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg')]">
          <div className="flex text-white items-center text-center gap-4 py-[10%] px-[20%] flex-col">
            <p className="bg-[#407d7d]/60  px-3 text-[1.5vw] font-semibold py-1 rounded-full cursor-pointer font-primary">
              PROJECTS
            </p>
            <p className="font-bold text-[4.5vw] text-white font-primary">
              From Design to Reality
            </p>
            <p className="font-sencondary text-white text-[1.7vw]">
              At Sri Velan Constructions, we turn every idea into a strong
              foundation of trust, quality, and craftsmanship. Explore our proud
              works — where each project speaks of dedication, precision, and
              the promise to last for generations.
            </p>
          </div>
        </div>

        {/* Section */}
        <div>
          <div className="flex flex-col text-center justify-center items-center my-20">
            <p className="font-semibold font-primary text-[#305658] text-[1.6vw]">
              BUILT TO LAST
            </p>
            <p className="font-bold text-[4vw] px-[10%] text-[#063231] font-primary">
              Where Every Project Becomes a Landmark
            </p>
          </div>
          {/* Filter Buttons */}
          <div className="flex gap-10 text-[1.8vw] justify-center pb-10">
            {["All", "Completed", "Upcoming"].map((cat) => (
              <p
                key={cat}
                onClick={() => setFilter(cat)}
                className={`cursor-pointer font-bold tracking-wider shadow-2xl text-[#305658] px-4 py-2 rounded-xl transition-colors 
        ${
          filter === cat
            ? "font-bold font-primary tracking-wider bg-[#063231] text-[#cbff54]"
            : "hover:bg-[#0f4544] font-primary bg-gray-200 hover:text-[#cbff54]"
        }`}
              >
                {cat === "Completed"
                  ? "Completed Projects"
                  : cat === "Upcoming"
                  ? "Upcoming Projects"
                  : "All"}
              </p>
            ))}
          </div>

          {/* Projects */}
          <div className="grid grid-cols-2  auto-rows-auto mx-[10%] gap-10 ">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col h-full  gap-3 transition-transform text-[#305658]  duration-300 ease-in-out  hover:scale-101 shadow-xl rounded-4xl border-dotted w-full"
              >
                {/* For upcoming project: full image only */}
                {project.status === "Upcoming" ? (
                  <div className="h-full w-full bg-[#218686]/60 rounded-4xl  relative">
                    <Image
                      src={project.img}
                      alt="Upcoming Project"
                      width={1920}
                      height={1080}
                      className="object-cover h-full mix-blend-multiply w-full rounded-4xl"
                    />
                    <div className="absolute top-[45%] left-[25%]  font-semibold font-sencondary text-black text-[3vw]">
                      {" "}
                      Coming Soon.....
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Completed / other projects */}
                    <div className="w-full ">
                      <Image
                        src={project.img}
                        alt={project.title}
                        width={400}
                        height={400}
                        className="bg-cover h-full w-full rounded-b-[20%] rounded-t-4xl"
                      />
                    </div>
                    <div className="flex flex-col  gap-5 px-5 h-full">
                      <p className="font-bold text-[2.8vw] font-primary text-[#063231]">
                        {project.title}
                      </p>
                      <p className="font-sencondary text-[1.8vw]  h-full indent-8 ">
                        {project.desc}
                      </p>
                      {project.highlights.length > 0 && (
                        <>
                          <p className="font-semibold text-[2.2vw] font-primary text-[#063231]">
                            Highlights
                          </p>
                          {project.highlights.map((item, i) => (
                            <div key={i} className="flex gap-2">
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
                                className="lucide lucide-circle-check bg-black rounded-full"
                              >
                                <path d="m9 12 2 2 4-6" />
                              </svg>
                              <p className="font-sencondary text-[1.8vw] ">
                                {item}
                              </p>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                    <hr />
                    <p className="px-[5%]   text-[#10383a] text-[1.8vw] pb-[3%]">
                      Type:{" "}
                      <span className=" text-[#063231] font-semibold">
                        {project.type}
                      </span>
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Laptop Responsive */}

      {/* Tab  responsive*/}

      <div className="lg:hidden md:block hidden bg-white mb-[5%]  ">
        <div className="bg-[#218686] bg-blend-multiply flex items-center justify-center  rounded-bl-[80%_100px] rounded-br-[80%_100px] w-full h-[45vh] bg-cover bg-center bg-[url('https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg')]">
          <div className="flex text-white items-center text-center gap-4 py-[10%] px-[12%] flex-col">
            <p className="bg-[#407d7d]/60 text-[2.5vw] px-3  font-semibold py-1 rounded-full cursor-pointer font-primary">
              PROJECTS
            </p>
            <p className="font-bold text-[5vw] font-primary text-white">
              From Design to Reality
            </p>
            <p className="font-sencondary text-[2.5vw] text-w'">
              At Sri Velan Constructions, we turn every idea into a strong
              foundation of trust, quality, and craftsmanship. Explore our proud
              works — where each project speaks of dedication, precision, and
              the promise to last for generations.
            </p>
          </div>
        </div>

        {/* Section */}
        <div>
          <div className="flex flex-col text-center justify-center items-center my-20">
            <p className="font-semibold font-primary text-[#305658] text-[2.5vw] ">
              BUILT TO LAST
            </p>
            <p className="font-bold text-[3.5vw] text-[#063231]  font-primary">
              Where Every Project Becomes a Landmark
            </p>
          </div>
          {/* Filter Buttons */}
          <div className="flex flex-col gap-10  justify-center pb-10">
            {["All", "Completed", "Upcoming"].map((cat) => (
              <p
                key={cat}
                onClick={() => setFilter(cat)}
                className={`cursor-pointer font-bold mx-[5%] text-[#305658] text-[2.5vw] items-center text-center py-4  tracking-wider shadow-xl rounded-xl transition-colors 
        ${
          filter === cat
            ? "font-bold font-primary tracking-wider bg-[#063231] text-[#cbff54]"
            : "hover:bg-[#0f4544] font-primary bg-gray-200 hover:text-[#cbff54]"
        }`}
              >
                {cat === "Completed"
                  ? "Completed Projects"
                  : cat === "Upcoming"
                  ? "Upcoming Projects"
                  : "All"}
              </p>
            ))}
          </div>

          {/* Projects */}
          <div className="flex flex-col auto-rows-auto px-[5%] gap-5">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 rounded-4xl text-[#305658] border-dotted border w-full"
              >
                {/* For upcoming project: full image only */}
                {project.status === "Upcoming" ? (
                  <div className="w-full h-[50vh] bg-[#218686]/60 rounded-4xl relative">
                    <Image
                      src={project.img}
                      alt="Upcoming Project"
                      width={1000}
                      height={1080}
                      className="object-cover  h-full w-full mix-blend-multiply rounded-4xl"
                    />
                    <div className="absolute top-[45%] left-[25%] font-semibold font-sencondary text-black text-[5vw] ">
                      {" "}
                      Coming Soon.....
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Completed / other projects */}
                    <div className=" w-full">
                      <Image
                        src={project.img}
                        alt={project.title}
                        width={400}
                        height={400}
                        className="bg-cover h-[45vh] w-full rounded-b-[20%] rounded-t-4xl"
                      />
                    </div>
                    <div className="flex flex-col gap-5 px-5">
                      <p className="font-bold text-[4vw]  text-[#063231] font-primary">
                        {project.title}
                      </p>
                      <p className="font-sencondary text-[#305658] text-[2.5vw] ">
                        {project.desc}
                      </p>
                      {project.highlights.length > 0 && (
                        <>
                          <p className="font-semibold text-[#063231]  font-primary text-[3.5vw] ">
                            Highlights
                          </p>
                          {project.highlights.map((item, i) => (
                            <div key={i} className="flex gap-2 text-[2.5vw] ">
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
                                className="lucide lucide-circle-check bg-black rounded-full"
                              >
                                <path d="m9 12 2 2 4-6" />
                              </svg>
                              <p className="font-sencondary text-[#305658]">
                                {item}
                              </p>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                    <hr />
                    <p className="px-5 pb-3  text-gray-800 text-[3vw] ">
                      Type:
                      <span className="text-[#063231] font-semibold">
                        {project.type}{" "}
                      </span>{" "}
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Tab  responsive*/}

      {/* Mobile  responsive*/}

      <div className="sm:hidden block  bg-white mb-[5%] ">
        <div className="bg-[#218686] bg-blend-multiply flex items-center justify-center  rounded-bl-[80%_100px] rounded-br-[80%_100px] w-full h-[45vh] bg-cover bg-center bg-[url('https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg')]">
          <div className="flex text-white items-center text-center gap-4 py-[10%] px-[8%] flex-col">
            <p className="bg-[#407d7d]/60  px-3  font-semibold py-1 rounded-full cursor-pointer font-c2a">
              PROJECTS
            </p>
            <p className="font-bold text-[180%] font-primary text-white">
              From Design to Reality
            </p>
            <p className="font-sencondary text-[100%] text-white">
              At Sri Velan Constructions, we turn every idea into a strong
              foundation of trust, quality, and craftsmanship. Explore our proud
              works — where each project speaks of dedication, precision, and
              the promise to last for generations.
            </p>
          </div>
        </div>

        {/* Section */}
        <div>
          <div className="flex flex-col text-center justify-center items-center px-[8%] my-20">
            <p className="font-semibold font-primary text-[#305658] text-[110%]">
              BUILT TO LAST
            </p>
            <p className="font-bold text-[150%] text-[#063231]  font-primary">
              Where Every Project Becomes a Landmark
            </p>
          </div>
          {/* Filter Buttons */}
          <div className="flex flex-col gap-10 px-[5%] justify-center pb-10">
            {["All", "Completed", "Upcoming"].map((cat) => (
              <p
                key={cat}
                onClick={() => setFilter(cat)}
                className={`cursor-pointer font-bold mx-[5%] text-[#305658] items-center text-center text-[100%] tracking-wider shadow-xl py-4 rounded-xl transition-colors 
        ${
          filter === cat
            ? "font-bold font-primary tracking-wider  bg-[#063231] text-[#cbff54]"
            : "hover:bg-[#0f4544] font-primary bg-gray-200 hover:text-[#cbff54]"
        }`}
              >
                {cat === "Completed"
                  ? "Completed Projects"
                  : cat === "Upcoming"
                  ? "Upcoming Projects"
                  : "All"}
              </p>
            ))}
          </div>

          {/* Projects */}
          <div className="flex flex-col auto-rows-auto px-[8%] gap-5">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="flex flex-col gap-3 rounded-4xl text-[#305658] border-dotted border w-full"
              >
                {/* For upcoming project: full image only */}
                {project.status === "Upcoming" ? (
                  <div className="w-full h-[50vh] bg-[#218686]/60 rounded-4xl relative">
                    <Image
                      src={project.img}
                      alt="Upcoming Project"
                      width={1000}
                      height={1080}
                      className="object-cover  h-full w-full mix-blend-multiply  rounded-4xl"
                    />
                    <div className="absolute top-[45%] left-[25%] font-semibold font-sencondary text-black text-[150%]">
                      {" "}
                      Coming Soon.....
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Completed / other projects */}
                    <div className=" w-full">
                      <Image
                        src={project.img}
                        alt={project.title}
                        width={400}
                        height={400}
                        className="bg-cover h-[35vh] w-full rounded-b-[20%] rounded-t-4xl"
                      />
                    </div>
                    <div className="flex flex-col h-full gap-5 px-5">
                      <p className="font-bold  font-primary text-[#063231] text-[150%]">
                        {project.title}
                      </p>
                      <p className="font-sencondary text-[#305658] text-[110%] ">
                        {project.desc}
                      </p>
                      {project.highlights.length > 0 && (
                        <>
                          <p className="font-semibold text-[140%] text-[#063231] font-primary">
                            Highlights
                          </p>
                          {project.highlights.map((item, i) => (
                            <div key={i} className="flex gap-2">
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
                                className="lucide lucide-circle-check bg-black rounded-full"
                              >
                                <path d="m9 12 2 2 4-6" />
                              </svg>
                              <p className="font-sencondary text-[#305658]">
                                {item}
                              </p>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                    <hr />
                    <p className="px-5 pb-3 text-gray-800 text-[100%] ">
                      Type:{" "}
                      <span className="text-[#063231] font-semibold">
                        {project.type}
                      </span>
                    </p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Mobile  responsive*/}
    </main>
  );
}
