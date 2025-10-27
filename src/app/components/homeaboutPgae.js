import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* destop responsive */}
      <div className="hidden xl:block">
    <div className="flex flex-row items-center justify-center gap-10 mt-0 px-[8%] pt-[10%] bg-white">
      {/* Left: Images */}
      <div className="relative  w-1/2 flex justify-center">
        {/* Main image */}
        <div className="w-[80%] rounded-3xl overflow-hidden shadow-md">
          <Image
            src="https://cdn.pixabay.com/photo/2023/09/19/15/42/ai-generated-8262931_1280.jpg"
            alt="Modern Building"
            width={600}
            height={400}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Overlapping small image */}
        <div className="absolute top-[70%] left-[55%] w-[45%] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
          <Image
            src="https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg"
            alt="Office Building"
            width={400}
            height={300}
            className="object-cover "
          />
        </div>
      </div>

      {/* Right: Text */}
      <div className="w-1/2 space-y-4">
        <p className="text-[1.1vw] font-semibold text-[#063231] font-primary">
          ABOUT US
        </p>

        <h1 className="text-[2vw]  font-bold leading-tight text-[#063231] font-primary">
          Your Trusted <br className="hidden lg:block" />
          Construction Partner in <br className="hidden lg:block" />
          Kambainallore & Dharmapuri
        </h1>

        <p className="text-gray-700 text-[1.1vw] pr-[5%] font-secondary">
          Sri Velan Constructions is a local construction company based in
          Kambainallore, Dharmapuri. With years of hands-on experience, we focus
          on residential building projects that meet both budget and quality
          expectations. We believe in honesty, hard work, and customer
          satisfaction — that’s how we’ve earned the trust of families across
          the region.
        </p>

        {/* Bullet Points */}
        <ul className="space-y-3 text-gray-800 font-secondary">
          <li className="flex items-center gap-2">
            <span className="text-green-600 text-[1.1vw]">✔</span> Residential Building Specialists
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600 text-[1.1vw]">✔</span> Skilled Manpower
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600 text-[1.1vw]">✔</span> On-time Project Completion
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600 text-[1.1vw]">✔</span> Strong Local Reputation
          </li>
        </ul>
      </div>
    </div>
    </div>
     {/* destop responsive */}

     {/* laptop responsive */}
      <div className="hidden lg:block xl:hidden">
    <div className="flex flex-row items-center justify-center gap-10 mt-0 px-[10%]  pt-[20%] bg-white">
      {/* Left: Images */}
      <div className="relative  w-1/2 flex justify-center">
        {/* Main image */}
        <div className="w-[100%] rounded-3xl overflow-hidden shadow-md">
          <Image
            src="https://cdn.pixabay.com/photo/2023/09/19/15/42/ai-generated-8262931_1280.jpg"
            alt="Modern Building"
            width={1000}
            height={1000}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Overlapping small image */}
        <div className="absolute top-[75%] left-[70%] w-[35%] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
          <Image
            src="https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg"
            alt="Office Building"
            width={400}
            height={300}
            className="object-cover "
          />
        </div>
      </div>

      {/* Right: Text */}
      <div className="w-1/2 space-y-1">
        <p className="text-[1.2vw] font-semibold text-[#063231] font-primary">
          ABOUT US
        </p>

        <h1 className="text-[2.5vw]  font-bold leading-tight text-[#063231] font-primary">
          Your Trusted <br className="hidden lg:block" />
          Construction Partner in <br className="hidden lg:block" />
          Kambainallore & Dharmapuri
        </h1>

        <p className="text-gray-700 text-[1.4vw] pr-[5%] font-secondary">
          Sri Velan Constructions is a local construction company based in
          Kambainallore, Dharmapuri. With years of hands-on experience, we focus
          on residential building projects that meet both budget and quality
          expectations. We believe in honesty, hard work, and customer
          satisfaction — that’s how we’ve earned the trust of families across
          the region.
        </p>

        {/* Bullet Points */}
        <ul className="space-y-3 text-gray-800 font-secondary">
          <li className="flex items-center gap-2">
            <span className="text-green-600 text-[1.2vw]">✔</span> Residential Building Specialists
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600 text-[1.2vw]">✔</span> Skilled Manpower
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600 text-[1.2vw]">✔</span> On-time Project Completion
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600 text-[1.2vw]">✔</span> Strong Local Reputation
          </li>
        </ul>
      </div>
    </div>
    </div>
     {/* laptop responsive */}

    


    

     {/* tab responsive*/}
      <div className="hidden sm:block lg:hidden">
    <div className="flex flex-col  items-center justify-center gap-10 px-[8%] pt-20 mt-[45%]  bg-white">
      {/* Left: Images */}
      <div className="relative w-full  flex justify-center">
        {/* Main image */}
        <div className="w-[80%] rounded-3xl overflow-hidden shadow-md">
          <Image
            src="https://cdn.pixabay.com/photo/2023/09/19/15/42/ai-generated-8262931_1280.jpg"
            alt="Modern Building"
            width={600}
            height={400}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Overlapping small image */}
        <div className="absolute top-[65%] left-[65%] w-[35%] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
          <Image
            src="https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg"
            alt="Office Building"
            width={400}
            height={300}
            className="object-cover "
          />
        </div>
      </div>

      {/* Right: Text */}
      <div className="w-full mt-[8%] space-y-4">
        <p className="text-[2vw] font-semibold text-[#063231] font-primary">
          ABOUT US
        </p>

        <h1 className=" text-[4vw] font-bold leading-tight text-[#063231] font-primary">
          Your Trusted <br className="hidden lg:block" />
          Construction Partner in <br className="hidden lg:block" />
          Kambainallore & Dharmapuri
        </h1>

        <p className="text-gray-700 text-[2.5vw] font-secondary">
          Sri Velan Constructions is a local construction company based in
          Kambainallore, Dharmapuri. With years of hands-on experience, we focus
          on residential building projects that meet both budget and quality
          expectations. We believe in honesty, hard work, and customer
          satisfaction — that’s how we’ve earned the trust of families across
          the region.
        </p>

        {/* Bullet Points */}
        <ul className="space-y-3 text-gray-800 font-secondary">
          <li className="flex items-center gap-2">
            <span className="text-green-600 text-[3vw]">✔</span> Residential Building Specialists
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600 text-[3vw]">✔</span> Skilled Manpower
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600 text-[3vw]">✔</span> On-time Project Completion
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600 text-[3vw]">✔</span> Strong Local Reputation
          </li>
        </ul>
      </div>
    </div>
    </div>
      {/* tab responsive*/}

      {/* mobile responsive */}
    <div className="block sm:hidden ">
    <div className="flex flex-col  items-center justify-center gap-10 px-[8%] pt-20 mt-[120%] bg-white">
      {/* Left: Images */}
      <div className="relative w-full  flex justify-center">
        {/* Main image */}
        <div className="w-[80%] rounded-3xl overflow-hidden shadow-md">
          <Image
            src="https://cdn.pixabay.com/photo/2023/09/19/15/42/ai-generated-8262931_1280.jpg"
            alt="Modern Building"
            width={600}
            height={400}
            className="object-cover w-full h-full"
            priority
          />
        </div>

        {/* Overlapping small image */}
        <div className="absolute top-[65%] left-[65%] w-[35%] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
          <Image
            src="https://images.pexels.com/photos/290275/pexels-photo-290275.jpeg"
            alt="Office Building"
            width={400}
            height={300}
            className="object-cover "
          />
        </div>
      </div>

      {/* Right: Text */}
      <div className="w-full mt-[10%] space-y-4">
        <p className="text-[4vw] font-semibold text-[#063231] font-primary">
          ABOUT US
        </p>

        <h1 className=" text-[8vw] font-bold leading-tight text-[#063231] font-primary">
          Your Trusted <br className="hidden lg:block" />
          Construction Partner in <br className="hidden lg:block" />
          Kambainallore & Dharmapuri
        </h1>

        <p className="text-gray-700  text-[5vw]font-secondary">
          Sri Velan Constructions is a local construction company based in
          Kambainallore, Dharmapuri. With years of hands-on experience, we focus
          on residential building projects that meet both budget and quality
          expectations. We believe in honesty, hard work, and customer
          satisfaction — that’s how we’ve earned the trust of families across
          the region.
        </p>

        {/* Bullet Points */}
        <ul className="space-y-3 text-gray-800 font-secondary">
          <li className="flex items-center gap-2">
            <span className="text-green-600 text-[4vw]">✔</span> Residential Building Specialists
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600 text-[4vw]">✔</span> Skilled Manpower
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600 text-[4vw]">✔</span> On-time Project Completion
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-600 text-[4vw]">✔</span> Strong Local Reputation
          </li>
        </ul>
      </div>
    </div>
    </div>

    {/* mobile responsive */}
    </div>
  );
}