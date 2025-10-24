import Image from "next/image"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { TbLocation } from "react-icons/tb";
import { IoTimeOutline } from "react-icons/io5";
import { PiMapPinLineFill } from "react-icons/pi";
export default function Contact() {
  return (

    <main className="" >
      {/* Desktop Responsive */}
      <div className="hidden xl:block bg-white text-black">
        <div className="bg-[#1b4343] flex  items-center justify-center bg-blend-multiply rounded-bl-[80%_100px] rounded-br-[80%_100px] w-full h-[90%] bg-cover bg-center bg-[url('https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg')]">
          <div className="flex text-white items-center  text-center gap-4 py-[10%] px-[8%] flex-col">
            <p className="bg-[#407d7d]/60  px-3 font-semibold py-1 rounded-full cursor-pointer font-primary text-[100%]">CONTACT</p>
            <p className="font-bold text-[300%] font-primary">Get in Touch with Sri Velan Constructions</p>
            <p className="font-sencondary text-[120%]">Reach out today to discuss your dream home or building project. We’re here to help with a free consultation.</p>
          </div>
        </div>

        {/* Section */}
        <div className="flex justify-center h-full items-center w-full bg-white my-20 ">
          <div className="flex flex-col gap-8 w-[35%] pr-[5%] ">
            <p className="font-semibold font-primary text-[100%] text-[#305658]">We’re Here to Help</p>
            <p className="font-bold text-[200%] font-primary text-[#063231]">Let’s Talk About Your Next Build!</p>
            <p className="font-sencondary text-[120%] text-[#305658]">Whether you’re planning a new home or renovation, we’d love to hear your ideas.
              Fill out the form, call us, or visit our office in Kambainallore, Dharmapuri — let’s start building something great together.</p>

            <div className="flex items-center gap-2">
              <div><Image src="https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_640.png" alt="Image is not there" width={70} height={70} className="" ></Image>
              </div>

              <div className="flex flex-col">
                <Image src="https://cdn.pixabay.com/photo/2022/06/30/03/44/five-stars-7292866_640.png" alt="Image is missing" width={100} height={50} className="h-[50px]"></Image>
                <p className="font-sencondary text-[100%] text-[#305658]">260+ reviews (4.95 of 5)</p>
              </div>
            </div>
          </div>

          <Image src="https://cdn.pixabay.com/photo/2023/09/19/15/42/ai-generated-8262931_1280.jpg" alt="Image is missing" width={600} height={600} className="rounded-4xl w-[35%]"></Image>

        </div>

        {/* Section */}
        <div className="flex items-center flex-col w-full justify-center px-[8%] py-[8%] bg-[#f6f7f7]">
          <p className=" font-semibold font-primary text-[100%] text-[#305658]">WE ARE HERE</p>
          <p className="text-[300%] font-bold font-primary text-[#063231]">Find us on Google</p>
          <div className="grid grid-cols-3 items-center w-[80%] gap-8 justify-between h-full pt-[8%] ">

            <div className="flex flex-col h-full gap-3 bg-white shadow-2xl rounded-2xl items-center text-center p-10">
<PiMapPinLineFill size={44} color="#cbff54" className="bg-[#063231] rounded-full p-2" />     
         <p className="font-bold text-[150%] font-primary text-[#063231] ">Address</p>
              <p className="font-sencondary text-[100%] text-[#305658]">Kambainallore, Dharmapuri, Tamil Nadu 635202</p>
            </div>


            <div className="flex flex-col gap-3 h-full bg-white shadow-2xl rounded-2xl items-center text-center p-10 ">
<FaWhatsapp size={44} color="#cbff54" className="bg-[#063231] rounded-full p-1.5"/>
              <p className="font-bold text-[150%] font-primary text-[#063231]">Whatsapp</p>
              <p className="font-sencondary text-[100%] text-[#305658]">+91 82485 01872</p>
            </div>

            <div className="flex flex-col h-full gap-3 bg-white shadow-2xl rounded-2xl items-center text-center p-10">
<IoMdMail size={44} color="#cbff54" className="bg-[#063231] rounded-full p-2"/>         
     <p className="font-bold text-[150%] font-primary text-[#063231]">Send Email</p>
              <p className="font-sencondary text-[100%] text-[#305658]">
                <Link
                  href="https://mail.google.com/mail/u/0/?to=srivelamconstruction@gmail.com&su=Enquiry+Regarding+Construction+Services&fs=1&tf=cm"
                  target="_blank"
                >
                  srivelamconstruction@gmail.com
                </Link>

              </p>
            </div>

            <div className="flex flex-col h-full gap-3  bg-white shadow-2xl rounded-2xl items-center text-center p-10">
<IoCall  size={44} color="#cbff54" className="bg-[#063231] rounded-full p-2"/>
              <p className="font-bold text-[150%] font-primary text-[#063231]">Call us</p>
              <p className="font-sencondary text-[100%] text-[#305658]">+91 82485 01872</p>
            </div>

            <div className="flex flex-col h-full gap-3 bg-white shadow-2xl rounded-2xl items-center text-center p-10">
<TbLocation size={44} color="#cbff54" className="bg-[#063231] rounded-full p-2"/>      
        <p className="font-bold  font-primary text-[150%] text-[#063231]">Follow us</p>
              <div className="flex gap-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook-icon lucide-facebook bg-[#063231] rounded-full p-1"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram-icon lucide-instagram bg-[#063231] rounded-full p-1"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube-icon lucide-youtube bg-[#063231] rounded-full p-1"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x bg-[#063231] rounded-full p-1"><path d="M18 6 6 18" /><path d="m6 6 12 12" /><path d="m8 6 12 12" /></svg> */}
              </div>
            </div>
            <div className="flex flex-col gap-3 h-full  bg-white shadow-2xl rounded-2xl items-center text-center p-10">
<IoTimeOutline size={44} color="#cbff54" className="bg-[#063231] rounded-full p-1"/>    
          <p className="font-bold text-[150%] font-primary text-[#063231]">Business Hours</p>
              <div>  <p className="font-sencondary text-[100%] text-[#305658]">Monday – Saturday</p>
                <p className="font-sencondary text-[100%] text-[#305658]">9:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d31196.87242333158!2d78.27674!3d12.206983!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDEzJzA3LjQiTiA3OMKwMTcnMjguNCJF!5e0!3m2!1sta!2sin!4v1761208669450!5m2!1sta!2sin" width="600" height="600" className="border-0 w-[80%] overflow-hidden pt-[8%]" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        </div>
      </div>



      {/* Laptop Responsive */}
      <div className="xl:hidden hidden lg:block bg-white text-black">
        <div className="bg-[#1b4343] flex  items-center justify-center bg-blend-multiply rounded-bl-[80%_100px] rounded-br-[80%_100px] w-full h-[90%] bg-cover bg-center bg-[url('https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg')]">
          <div className="flex text-white items-center  text-center gap-4 py-[10%] px-[8%] flex-col">
            <p className="bg-[#407d7d]/60  px-3 font-semibold py-1 rounded-full cursor-pointer font-primary text-[100%]">CONTACT</p>
            <p className="font-bold text-[300%] font-primary">Get in Touch with Sri Velan Constructions</p>
            <p className="font-sencondary text-[120%]">Reach out today to discuss your dream home or building project. We’re here to help with a free consultation.</p>
          </div>
        </div>

        {/* Section */}
        <div className="flex justify-center gap-[8%] h-full items-center w-full  bg-white my-20 ">
          <div className="flex flex-col gap-[10%] w-[35%]  ">
            <p className="font-semibold text-[#305658] font-primary text-[100%]">We’re Here to Help</p>
            <p className="font-bold text-[200%] font-primary text-[#063231]">Let’s Talk About Your Next Build!</p>
            <p className="font-sencondary text-[120%] text-[#305658]">Whether you’re planning a new home or renovation, we’d love to hear your ideas.
              Fill out the form, call us, or visit our office in Kambainallore, Dharmapuri — let’s start building something great together.</p>

            <div className="flex items-center gap-2">
              <div><Image src="https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_640.png" alt="Image is not there" width={70} height={70} className="" ></Image>
              </div>

              <div className="flex flex-col">
                <Image src="https://cdn.pixabay.com/photo/2022/06/30/03/44/five-stars-7292866_640.png" alt="Image is missing" width={100} height={50} className="h-[50px]"></Image>
                <p className="font-sencondary text-[100%] text-[#305658]">260+ reviews (4.95 of 5)</p>
              </div>
            </div>
          </div>

          <Image src="https://cdn.pixabay.com/photo/2023/09/19/15/42/ai-generated-8262931_1280.jpg" alt="Image is missing" width={600} height={600} className="rounded-4xl w-[35%]"></Image>

        </div>

        {/* Section */}
        <div className="flex items-center flex-col w-full justify-center px-[10%] py-[8%] bg-[#f6f7f7]">
          <p className=" font-semibold font-primary text-[100%] text-[#305658]">WE ARE HERE</p>
          <p className="text-[300%] font-bold font-primary text-[#063231]">Find us on Google</p>
          <div className="grid grid-cols-3 items-center w-[100%] gap-8 justify-between h-full pt-[8%] ">

            <div className="flex flex-col h-full gap-3 bg-white shadow-2xl rounded-2xl items-center text-center p-10">
<PiMapPinLineFill size={44} color="#cbff54" className="bg-[#063231] rounded-full p-2" />     
              <p className="font-bold text-[150%] font-primary text-[#063231]">Address</p>
              <p className="font-sencondary text-[100%] text-[#305658]">Kambainallore, Dharmapuri, Tamil Nadu 635202</p>
            </div>


            <div className="flex flex-col gap-3 h-full bg-white shadow-2xl rounded-2xl items-center text-center p-10 ">
<FaWhatsapp size={44} color="#cbff54" className="bg-[#063231] rounded-full p-1.5"/>    
          <p className="font-bold text-[150%] font-primary text-[#063231]">Whatsapp</p>
              <p className="font-sencondary text-[100%] text-[#305658]">+91 82485 01872</p>
            </div>

            <div className="flex flex-col h-full gap-3 bg-white shadow-2xl rounded-2xl items-center text-center p-10">
<IoMdMail size={44} color="#cbff54" className="bg-[#063231] rounded-full p-2"/>         
              <p className="font-bold text-[150%] font-primary text-[#063231]">Send Email</p>
              <p className="font-sencondary text-[100%] text-[#305658]">
                <Link
                  href="https://mail.google.com/mail/u/0/?to=srivelamconstruction@gmail.com&su=Enquiry+Regarding+Construction+Services&fs=1&tf=cm"
                  target="_blank"
                >
                  srivelamconstruction@gmail.com
                </Link>

              </p>
            </div>

            <div className="flex flex-col h-full gap-3  bg-white shadow-2xl rounded-2xl items-center text-center p-10">
<IoCall  size={44} color="#cbff54" className="bg-[#063231] rounded-full p-2"/>
              <p className="font-bold text-[150%] font-primary text-[#063231]">Call us</p>
              <p className="font-sencondary text-[100%] text-[#305658]">+91 82485 01872</p>
            </div>

            <div className="flex flex-col h-full gap-3 bg-white shadow-2xl rounded-2xl items-center text-center p-10">
<TbLocation size={44} color="#cbff54" className="bg-[#063231] rounded-full p-2"/>      
              <p className="font-bold  font-primary text-[150%] text-[#063231]">Follow us</p>
              <div className="flex gap-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook-icon lucide-facebook bg-[#063231] rounded-full p-1"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram-icon lucide-instagram bg-[#063231] rounded-full p-1"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube-icon lucide-youtube bg-[#063231] rounded-full p-1"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x bg-[#063231] rounded-full p-1"><path d="M18 6 6 18" /><path d="m6 6 12 12" /><path d="m8 6 12 12" /></svg> */}
              </div>
            </div>
            <div className="flex flex-col gap-3 h-full  bg-white shadow-2xl rounded-2xl items-center text-center p-10">
<IoTimeOutline size={44} color="#cbff54" className="bg-[#063231] rounded-full p-1"/>    
              <p className="font-bold text-[150%] font-primary text-[#063231]">Business Hours</p>
              <div>  <p className="font-sencondary text-[100%] text-[#305658]">Monday – Saturday</p>
                <p className="font-sencondary text-[100%] text-[#305658]">9:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>

          <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d31196.87242333158!2d78.27674!3d12.206983!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDEzJzA3LjQiTiA3OMKwMTcnMjguNCJF!5e0!3m2!1sta!2sin!4v1761208669450!5m2!1sta!2sin" width="600" height="600" className="border-0 w-[100%] overflow-hidden pt-[8%]" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        </div>
      </div>




      {/* MOBILE */}
      <div className="sm:hidden block bg-white">
        <div className="bg-[#218686] bg-blend-multiply rounded-bl-[80%_100px] rounded-br-[80%_100px] w-full h-[40vh] bg-cover bg-center bg-[url('https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg')]">
          <div className="flex text-white items-center text-center gap-4 py-[20%] px-[6%] flex-col">
            <p className="bg-[#407d7d]/60  px-3 font-semibold py-1 rounded-full cursor-pointer font-c2a">CONTACT</p>
            <p className="font-bold text-[180%] font-primary ">Get in Touch with Sri Velan Constructions</p>
            <p className="font-sencondary text-[100%] ">Reach out today to discuss your dream home or building project. We’re here to help with a free consultation.</p>
          </div>
        </div>

        {/* Section */}
        <div className="grid grid-rows-1 h-full gap-10 items-center  px-[8%] py-10 bg-white">
          <div className="flex flex-col gap-5 ">
            <p className="font-semibold text-[#305658] font-primary text-[100%]">We’re Here to Help</p>
            <p className="font-bold text-[180%] font-primary text-[#063231]">Let’s Talk About Your Next Build!</p>
            <p className="font-sencondary text-[110%] text-[#305658]">Whether you’re planning a new home or renovation, we’d love to hear your ideas.
              Fill out the form, call us, or visit our office in Kambainallore, Dharmapuri — let’s start building something great together.</p>

            <div className="flex items-center gap-2">
              <div><Image src="https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_640.png" alt="Image is not there" width={70} height={70} className="" ></Image></div>

              <div className="flex flex-col">
                <Image src="https://cdn.pixabay.com/photo/2022/06/30/03/44/five-stars-7292866_640.png" alt="Image is missing" width={100} height={50} className="h-[50px]"></Image>
                <p className="font-sencondary text-[100%] text-[#305658]">260+ reviews (4.95 of 5)</p>
              </div>
            </div>
          </div>


          <Image src="https://cdn.pixabay.com/photo/2023/09/19/15/42/ai-generated-8262931_1280.jpg" alt="Image is missing" width={600} height={600} className="rounded-4xl"></Image>
        </div>

        {/* Section */}
        <div className="flex  flex-col text-center h-full px-[8%] py-[8%] bg-[#f6f7f7]">
          <p className=" font-semibold text-[90%] font-primary text-[#305658]">WE ARE HERE</p>
          <p className="text-[180%] font-bold font-primary text-[#063231]">Find us on Google</p>
          <div className="grid grid-cols-1 grid-rows-6 gap-8 items-center w-full h-full pt-[8%]">
            <div className="flex flex-col gap-3 h-full bg-white shadow-lg rounded-2xl items-center text-center p-10">
<PiMapPinLineFill size={44} color="#cbff54" className="bg-[#063231] rounded-full p-2" />     
              <p className="font-bold text-[180%] font-primary text-[#063231]">Address</p>
              <p className="font-sencondary text-[100%] text-[#305658]">Kambainallore, Dharmapuri, Tamil Nadu 635202</p>
            </div>
            <Link href="https://wa.me/918248501872" target="_blank" className="flex  h-full flex-col gap-3 bg-white shadow-lg rounded-2xl items-center text-center p-10">
              <div className="flex flex-col gap-3 items-center text-center ">
<FaWhatsapp size={44} color="#cbff54" className="bg-[#063231] rounded-full p-1.5"/>                <p className="font-bold text-[180%] font-primary text-[#063231]">Whatsapp</p>
                <p className="font-sencondary text-[100%] text-[#305658]">+91 82485 01872</p>
              </div>
            </Link>

            <div className="flex flex-col gap-3 h-full bg-white shadow-lg rounded-2xl items-center text-center p-10">
<IoMdMail size={44} color="#cbff54" className="bg-[#063231] rounded-full p-2"/>         
              <p className="font-bold text-[180%] font-primary text-[#063231]">Send Email</p>
              <p className="font-sencondary text-[100%] text-[#305658]">
                <Link
                  href="https://mail.google.com/mail/u/0/?to=srivelamconstruction@gmail.com&su=Enquiry+Regarding+Construction+Services&fs=1&tf=cm"
                  target="_blank"
                >
                  srivelamconstruction@gmail.com
                </Link>
              </p>
            </div>

            <div className="flex flex-col gap-3 bg-white shadow-lg h-full rounded-2xl items-center text-center p-10">
  <IoCall size={44} color="#cbff54" className="bg-[#063231] rounded-full p-2" />
  <p className="font-bold text-[180%] font-primary text-[#063231]">Call us</p>
  <Link href="tel:+918248501872" className="font-secondary text-[110%] text-[#305658] hover:underline">
    +91 82485 01872
  </Link>
</div>

            <div className="flex flex-col gap-3 h-full bg-white shadow-lg rounded-2xl items-center text-center p-10">
<TbLocation size={44} color="#cbff54" className="bg-[#063231] rounded-full p-2"/>      
              <p className="font-bold text-[180%] font-primary text-[#063231]">Follow us</p>
              <div className="flex gap-5 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook-icon lucide-facebook bg-[#063231] rounded-full p-1"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram-icon lucide-instagram bg-[#063231] rounded-full p-1"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube-icon lucide-youtube bg-[#063231] rounded-full p-1"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x bg-[#063231] rounded-full p-1"><path d="M18 6 6 18" /><path d="m6 6 12 12" /><path d="m8 6 12 12" /></svg> */}
              </div>

            </div>
            <div className="flex flex-col h-full gap-3  bg-white shadow-lg rounded-2xl items-center text-center p-10">
<IoTimeOutline size={44} color="#cbff54" className="bg-[#063231] rounded-full p-1"/>    
              <p className="font-bold text-[180%] font-primary text-[#063231]">Business Hours</p>
              <div>  <p className="font-sencondary text-[100%] text-[#305658]">Monday – Saturday</p>
                <p className="font-sencondary text-[100%] text-[#305658]">9:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d31196.87242333158!2d78.27674!3d12.206983!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDEzJzA3LjQiTiA3OMKwMTcnMjguNCJF!5e0!3m2!1sta!2sin!4v1761208669450!5m2!1sta!2sin" width="600" height="600" className="border-0 w-full  pt-[8%]" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        </div>
      </div>

      {/* TAB Responsive */}
      <div className="hidden sm:block lg:hidden bg-white">
        <div className="bg-[#218686] bg-blend-multiply rounded-bl-[80%_100px] rounded-br-[80%_100px] w-full h-[80%] bg-cover bg-center bg-[url('https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg')]">
          <div className="flex text-white items-center text-center gap-4 py-[20%] px-[6%] flex-col">
            <p className="bg-[#407d7d]/60  px-3 font-semibold py-1 rounded-full cursor-pointer font-primary">CONTACT</p>
            <p className="font-bold text-[180%] font-primary">Get in Touch with Sri Velan Constructions</p>
            <p className="font-sencondary text-[120%]">Reach out today to discuss your dream home or building project. We’re here to help with a free consultation.</p>
          </div>
        </div>

        {/* Section */}
        <div className="grid grid-rows-1 h-full gap-10 items-center  px-[8%] py-10 bg-white">
          <div className="flex flex-col gap-5 ">
            <p className="font-semibold text-[#305658] font-primary">We’re Here to Help</p>
            <p className="font-bold text-[180%] font-primary text-[#063231]">Let’s Talk About Your Next Build!</p>
            <p className="font-sencondary text-[120%] text-[#305658]">Whether you’re planning a new home or renovation, we’d love to hear your ideas.
              Fill out the form, call us, or visit our office in Kambainallore, Dharmapuri — let’s start building something great together.</p>

            <div className="flex items-center gap-2">
              <div><Image src="https://cdn.pixabay.com/photo/2015/12/11/11/43/google-1088004_640.png" alt="Image is not there" width={70} height={70} className="" ></Image></div>

              <div className="flex flex-col">
                <Image src="https://cdn.pixabay.com/photo/2022/06/30/03/44/five-stars-7292866_640.png" alt="Image is missing" width={100} height={50} className="h-[50px]"></Image>
                <p className="font-sencondary text-[100%] text-[#305658]">260+ reviews (4.95 of 5)</p>
              </div>
            </div>
          </div>


          <Image src="https://cdn.pixabay.com/photo/2023/09/19/15/42/ai-generated-8262931_1280.jpg" alt="Image is missing" width={600} height={600} className="rounded-4xl"></Image>
        </div>

        {/* Section */}
        <div className="flex  flex-col text-center px-[8%] py-[8%] bg-[#f6f7f7]">
          <p className=" font-semibold text-[90%] font-primary text-[#305658]">WE ARE HERE</p>
          <p className="text-[180%] font-bold font-primary text-[#063231]">Find us on Google</p>
          <div className="grid grid-cols-1 grid-rows-4 gap-10 items-center h-full pt-[8%]">
            <div className="flex flex-col gap-3 bg-white shadow-lg h-full rounded-2xl items-center text-center p-10">
<PiMapPinLineFill size={44} color="#cbff54" className="bg-[#063231] rounded-full p-2" />     
              <p className="font-bold text-[180%] font-primary text-[#063231]">Address</p>
              <p className="font-sencondary text-[110%] text-[#305658]">Kambainallore, Dharmapuri, Tamil Nadu 635202</p>
            </div>


            <Link href="https://wa.me/918248501872" target="_blank" className="flex h-full flex-col gap-3 bg-white shadow-lg rounded-2xl items-center text-center p-10">
              <div className="flex flex-col gap-3 items-center text-center ">
<FaWhatsapp size={44} color="#cbff54" className="bg-[#063231] rounded-full p-1.5"/>                <p className="font-bold text-[180%] font-primary text-[#063231]">Whatsapp</p>
                <p className="font-sencondary text-[110%] text-[#305658]">+91 82485 01872</p>
              </div>
            </Link>

            <div className="flex flex-col gap-3 bg-white shadow-lg h-full rounded-2xl items-center text-center p-10">
<IoMdMail size={44} color="#cbff54" className="bg-[#063231] rounded-full p-2"/>         
              <p className="font-bold text-[180%] font-primary text-[#063231]">Send Email</p>
              <p className="font-sencondary text-[110%] text-[#305658]">
                <Link
                  href="https://mail.google.com/mail/u/0/?to=srivelamconstruction@gmail.com&su=Enquiry+Regarding+Construction+Services&fs=1&tf=cm"
                  target="_blank"
                >
                  srivelamconstruction@gmail.com
                </Link>
              </p>
            </div>

            <div className="flex flex-col gap-3 bg-white shadow-lg h-full rounded-2xl items-center text-center p-10">
<IoCall  size={44} color="#cbff54" className="bg-[#063231] rounded-full p-2"/>
              <p className="font-bold text-[180%] font-primary text-[#063231]">Call us</p>
              <p className="font-sencondary text-[110%] text-[#305658]">
                <Link href="tel:+918248501872" className="font-secondary text-[110%] text-[#305658] hover:underline">
    +91 82485 01872
  </Link>
              </p>
            </div>

            <div className="flex flex-col gap-3 bg-white shadow-lg h-full rounded-2xl items-center text-center p-10">
<TbLocation size={44} color="#cbff54" className="bg-[#063231] rounded-full p-2"/>      
              <p className="font-bold text-[180%] font-primary text-[#063231]">Follow us</p>
              <div className="flex gap-5">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook-icon lucide-facebook bg-[#063231] rounded-full p-1"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram-icon lucide-instagram bg-[#063231] rounded-full p-1"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube-icon lucide-youtube bg-[#063231] rounded-full p-1"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" /><path d="m10 15 5-3-5-3z" /></svg>
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x bg-[#063231] rounded-full p-1"><path d="M18 6 6 18" /><path d="m6 6 12 12" /><path d="m8 6 12 12" /></svg> */}
              </div>
            </div>
            <div className="flex flex-col h-full gap-3  bg-white shadow-lg rounded-2xl items-center text-center p-10">
<IoTimeOutline size={44} color="#cbff54" className="bg-[#063231] rounded-full p-1"/>    
              <p className="font-bold text-[180%] font-primary text-[#063231]">Business Hours</p>
              <div>  <p className="font-sencondary text-[110%] text-[#305658]">Monday – Saturday</p>
                <p className="font-sencondary text-[110%] text-[#305658]">9:00 AM – 6:00 PM</p>
              </div>
            </div>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d31196.87242333158!2d78.27674!3d12.206983!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDEzJzA3LjQiTiA3OMKwMTcnMjguNCJF!5e0!3m2!1sta!2sin!4v1761208669450!5m2!1sta!2sin" width="600" height="600" className="border-0 w-full  pt-[8%]" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

        </div>
      </div>

    </main>

  )
}