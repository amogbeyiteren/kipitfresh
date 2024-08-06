import Title from "../components/Title";
import contact from "../assets/contact.svg"
import { FiMapPin } from "react-icons/fi";
import { TbPhoneCall } from "react-icons/tb";
import { MdMailOutline } from "react-icons/md";

export function ContactPage() {
  return (
    <div>    
        <section className="py-10 px-3 md:px-12 flex flex-col justify-center items-center">
            <div className="w-full flex flex-row justify-center items-center ">
              <div className="w-full md:w-[90%] py-16 flex  flex-col md:flex-row justify-center items-center px-3 md:px-10 bg-[#7ED957] text-[#173e1f] rounded-3xl">
                <div className="flex flex-col justify-center items-start w-full md:w-1/2">
                  <Title content='Get in Touch' size='md' />
                  <span>We are here for you! How can we help?</span>
                  <input 
                  className="w-full rounded-3xl shadow-2xl h-[60px] mt-6 px-6 border-none outline-none hover:border hover:border-[#173e1f]"
                  placeholder="Enter your name"
                  

                  />
                   <input 
                  className="w-full rounded-3xl shadow-2xl h-[60px] mt-4 px-6 border-none outline-none hover:border hover:border-[#173e1f]"
                  placeholder="Enter your email address"
                  type="email"
                  

                  />
                  <textarea 
                  className="w-full rounded-3xl shadow-2xl h-[240px] mt-4 p-6 border-none outline-none hover:border hover:border-[#173e1f]"
                  placeholder="Go ahead, we are listening..."
                 
          
                  

                  />
                  <button className="w-full rounded-3xl shadow-2xl py-3 mt-9 px-6 bg-[#173e1f] text-white text-2xl"
                  >Submit</button>

                </div>

                <div className="flex flex-col justify-center items-start w-full md:w-1/2 pl-0 pt-10 md:pl-10 md:pt-0">

                <img 
                className=" w-full object-cover"
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
