import * as React from "react";
import Title from "../components/Title";
import contact from "../assets/contact.svg"
import { FiMapPin } from "react-icons/fi";
import { TbPhoneCall } from "react-icons/tb";
import { MdMailOutline } from "react-icons/md";

export function ContactPage() {
  return (
    <div>    
        <section className="py-10 px-12 flex flex-col justify-center items-center">
            <div className="w-full flex flex-row justify-center items-center ">
              <div className="w-[90%] py-16 flex flex-row justify-center items-center px-10 bg-[#7ED957] text-[#173e1f] rounded-3xl">
                <div className="flex flex-col justify-center items-start w-1/2">
                  <Title content='Get in Touch' size='md' />
                  <span>We are here for you! How can we help?</span>
                  <input 
                  className="w-full rounded-3xl shadow-2xl h-[60px] mt-6 px-6"
                  placeholder="Enter your name"
                  

                  />
                   <input 
                  className="w-full rounded-3xl shadow-2xl h-[60px] mt-4 px-6"
                  placeholder="Enter your email address"
                  type="email"
                  

                  />
                  <textarea 
                  className="w-full rounded-3xl shadow-2xl h-[240px] mt-4 p-6"
                  placeholder="Go ahead, we are listening..."
                 
          
                  

                  />
                  <button className="w-full rounded-3xl shadow-2xl h-[80px] mt-9 px-6 bg-[#173e1f] text-white text-lg"
                  >Submit</button>

                </div>

                <div className="flex flex-col justify-center items-start w-1/2 pl-10">

                <img 
                className="h-600px w-full object-cover"
                src={contact}
                />

                <div className="flex justify-center items-center gap-1 text-[#173e1f] mt-8">
                  <FiMapPin />
                  
                  Plot 15, Adeniyi Jones, Ikeja, Lagos
                </div>
                <div className="flex justify-center items-center gap- text-[#173e1f] mt-3">
                  <TbPhoneCall />
                  
                  
                  (+234) 908 319 8103
                </div>
                <div className="flex justify-center items-center gap-1 text-[#173e1f] mt-3">
                  <MdMailOutline />
                  
                  info@kipitfresh.com
                </div>

                </div>

              </div>

            </div>
        </section> 
    </div>
  );
}
