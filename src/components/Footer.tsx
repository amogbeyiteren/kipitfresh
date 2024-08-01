import React from "react";
import { FiMapPin } from "react-icons/fi";
import { TbPhoneCall } from "react-icons/tb";
import { MdMailOutline } from "react-icons/md";
import { TbBrandFacebook } from "react-icons/tb";
import { BsTwitterX } from "react-icons/bs";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import logo from '../assets/LOGO.svg'

const Footer: React.FC = () => {
  return (

    <footer className="w-full h-max xl:h-[510px] flex flex-col justify-start items-center">
      <div className="bg-[#173e1f] w-full py-12 xl:h-[410px] h-max grid grid-cols-1 sm:grid-cols-2 lg:flex items-center justify-center gap-12 xl:gap-16 px-4">
        <div className="flex flex-col items-start justify-start w-full gap-2 sm:h-[245px] text-white ">
          {/* <span className="font-bold text-3xl pb-5">KipitFresh</span> */}
          <a href="/"> 
          <img 
          src={logo}
          className="w-[100px] "
          />
          </a>
          
          <div className="flex flex-row justify-start items-center gap-4 ">
            <a className="w-[38px] h-[38px] rounded-full bg-white flex justify-center items-center" href='#'>
              <TbBrandFacebook color="#173e1f" size={23}/>
              
              

            </a>
            <a className="w-[38px] h-[38px] rounded-full bg-white flex justify-center items-center" href='#'>
              <BsTwitterX color="#173e1f" size={23}/>
              
              

            </a>
            <a className="w-[38px] h-[38px] rounded-full bg-white flex justify-center items-center" href='#'>
              <SlSocialLinkedin color="#173e1f" size={23}/>
              
              

            </a>
            <a className="w-[38px] h-[38px] rounded-full bg-white flex justify-center items-center" href='#'>
              <FaInstagram color="#173e1f" size={23}/>
              
              

            </a>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start gap-2 h-[245px] text-white w-full">
          <span className="font-semibold text-lg pb-5">Quick Links</span>
          <a className="text-white">Home</a>
          <a className="text-white">About</a>
          <a className="text-white">Services</a>
          <a className="text-white">Blogs</a>
          <a className="text-white">Career</a>
          <a className="text-white">Testimonial</a>
        </div>
        <div className="flex flex-col items-start justify-start gap-2 sm:h-[245px] text-white w-full">
          <span className="font-semibold text-lg pb-5 ">Get in Touch</span>
          <a className="flex flex-row justify-center items-center gap-1 text-white">
            {" "}
            <FiMapPin  /> <span className="lg:text-sm xl:text-base"> Lagos office: 7 Adeniyi Jones, Ikeja, Lagos{" "}</span>
          </a>
          <a className="flex flex-row justify-center items-center gap-1 text-white">
            {" "}
            <TbPhoneCall /> 0704 0000 400
          </a>
          <a className="flex flex-row justify-center items-center gap-1 text-white">
            <MdMailOutline /> info@kipitfresh.com
          </a>
        </div>
        <div className="flex flex-col items-end justify-start gap-2 sm:h-[245px] text-white w-full">
          <span className="font-semibold text-lg pb-5 ">
            Subscribe to our Newsletter
          </span>
          <div className=" sm:w-[300px] md:w-[360px] lg:w-[300px] h-[50px] rounded-2xl bg-white flex flex-row justify-end items-center pl-4 px-1">
            <input
              className="border-none outline-none w-full text-[#173e1f]"
              placeholder="Email"
            />
            <button className="w-[140px] h-[42px] flex justify-center items-center font-semibold rounded-2xl bg-[#173e1f]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div className="h-[100px] flex justify-center items-center">
      <p className="text-[#173e1f]">&copy; 2024 <span className="font-semibold">KipitFresh</span>. All Rights Reserved.</p>

      </div>
    </footer>
  );
};

export default Footer;
