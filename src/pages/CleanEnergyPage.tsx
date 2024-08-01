import * as React from "react";
import Title from "../components/Title";
import cleanEnergy1 from '../assets/clean-energy-1.jpeg'
import cleanEnergy2 from '../assets/clean-energy-2.jpeg'
import cleanEnergy3 from '../assets/clean-energy-3.jpeg'

export function CleanEnergyPage() {
  return (
    <div>
      <section className="flex flex-col justify-center items-center  bg-no-repeat bg-cover " style={{ backgroundImage: `url(${cleanEnergy2})` }}>
        <div className="flex flex-col justify-center items-center py-48 gap-1 w-full h-full hover:backdrop-blur-sm backdrop-blur-none">
        <div className="w-[600px] flex justify-center items-center backdrop-blur-sm">
          <Title
            content="Green Fruit Storage 
as a New Revolution"
            
            center={true}
          />
        </div>
        <span className="w-[700px] text-center text-black backdrop-blur-sm font-semibold text-xl">
        Clean energy is an energy source that does not emit carbon or other pollutants when used. Clean energy sources can come from natural sources, such as Solar, wind and more.

        </span>
        <div className="p-1 flex justify-center items-center gap-5">
            <button className="rounded-full px-7 py-2 bg-[#173e1f] text-white text-lg">Get Started</button>
            <button className="rounded-full px-4 py-2 text-[#173e1f] border border-[#173e1f] bg-white text-lg">Learn More</button>

        </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center py-40 gap-20 px-20">
      <div className='h-full w-full grid grid-cols-2 gap-20'>
      <img className="w-full object-cover rounded-lg  bg-bottom"
              src={cleanEnergy1}
              
              
              />
        <div className='w-full h-full flex flex-col justify-center items-start gap-4'>
        <span className='text-[#173e1f] text-3xl font-semibold'>
        Reduce post-harvest loss of fruits and vegetables with our cold storage facility.
        </span>
        <span className='text-[#173e1f] text-lg '>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed quod excepturi tempore? Voluptates odit fuga inventore ratione, deserunt esse voluptate quasi veniam odio quae harum ipsam, rem facilis reiciendis facere?
        </span>

        <button className='mt-16 w-[320px] h-[60px] flex justify-center items-center rounded-lg bg-[#173e1f] text-white font-semibold text-2xl'>
        About Us
        </button>
        
           </div>
        
       



          

        



      </div>
      

      </section>
      
      <section className="bg-no-repeat bg-cover bg-center " style={{ backgroundImage: `url(${cleanEnergy3})` }}>
           <div className="w-full py-40 px-16  flex flex-row justify-start items-center hover:backdrop-blur-sm backdrop-blur-none">
            <div className="flex flex-col items-start justify-center">
            <span className="pt-5 ">
              <Title  content="Our Values" />
            </span>
              <span className="border-b-2 w-12 h-0 border border-[#173e1f]"></span>
              <p className="w-[600px] pt-8 font-semibold text-lg">
              How to preserve avocados is a must-know if you want to ensure that your avocados remain fresh. This is because avocados, with their smooth and creamy texture, are a culinary delight. However, their short shelf life can often leave us scrambling to use them before they spoil. Fear not! In this article, we will explore…
              </p>

            </div>
            </div>
        </section>

      
    </div>
  );
}
