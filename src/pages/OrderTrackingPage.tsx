import Title from "../components/Title";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";

export interface IOrderTrackingPageProps {}

const dummyProducts: IOrderTrackingPageProps[] = [
  {
    imageSrc: "https://via.placeholder.com/100",
    title: "Product 1",
    rating: 4,
    price: "$19.99",
    description: "Description for product 1",
    in_stock: true,
  },
  {
    imageSrc: "https://via.placeholder.com/100",
    title: "Product 2",
    rating: 5,
    price: "$29.99",
    description: "Description for product 2",
    in_stock: false,
  },
  {
    imageSrc: "https://via.placeholder.com/100",
    title: "Product 3",
    rating: 3,
    price: "$9.99",
    description: "Description for product 3",
    in_stock: true,
  },
  {
    imageSrc: "https://via.placeholder.com/100",
    title: "Product 4",
    rating: 2,
    price: "$14.99",
    description: "Description for product 4",
    in_stock: true,
  },
];

export function OrderTrackingPage() {
  return (
    <div>
      <section className="w-full flex flex-col justify-start items-center px-5 py-10 ">
        <div className="w-full py-20 px-20 flex justify-center items-center gap-2 flex-col bg-[#7ED957] text-[#173e1f] rounded-3xl">
          <span className="text-black font-light w-full text-center text-2xl">Cart ID</span>
          <Title content="ABC123FF" center={true} />
          <div className="w-full py-5 grid grid-cols-2 gap-10 gap-x-20">
            <div className="flex flex-col justify-start items-start gap-1">
              <span className="text-black text-left">Delivered by:</span>
              <span className="text-2xl font-semibold text-left">Driver Name</span>
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <span className="text-black text-left">Delivered Address:</span>
              <span className="text-2xl font-semibold text-left">3, Family Es, Allen, Ikeja</span>
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <span className="text-black text-left">Delivered by:</span>
              <span className="text-2xl font-semibold text-left">Driver Name</span>
            </div>
            <div className="flex flex-col justify-start items-start gap-1">
              <span className="text-black text-left">Delivered by:</span>
              <span className="text-2xl font-semibold text-left">Driver Name</span>
            </div>

          </div>
        </div>
        

      </section>


      <section className="w-full flex flex-col justify-start items-start gap-3 px-5 py-10 ">
      <Title content="Order Tracking"/>
          <div className="w-full flex flex-row justify-between items-center">
          <span className="text-black font-light text-center text-2xl">ProducT Transit</span>
          <span className="text-black font-light text-center text-2xl">EST: 2 Days</span>
          </div>
        <div className="w-full mt-10 py-10 px-10 flex justify-center items-start gap-2 flex-row bg-[#7ED957] text-[#173e1f] rounded-3xl">
          <span className=" w-[100px] h-0 border border-[#173e1f] translate-y-[25px]"></span>
          <div className="flex flex-col justify-center items-center">
          <div className="w-[50px] h-[50px] rounded-full bg-[#173e1f] flex justify-center items-center"><FaCheck color="white"/></div>
          <span className="font-semibold pt-1">Packaged</span>
          <span className="font-light text-sm text-nowrap">June 11th, 2021</span>
          

          </div>
          <span className=" w-full h-0 border border-[#173e1f] translate-y-[25px]"></span>
          <div className="flex flex-col justify-center items-center">
          <div className="w-[50px] h-[50px] rounded-full bg-[#173e1f] flex justify-center items-center"><FaCheck color="white"/></div>
          <span className="font-semibold pt-1">Sent Out</span>
          <span className="font-light text-sm text-nowrap">June 11th, 2021</span>
          

          </div>
          <span className=" w-full h-0 border border-[#173e1f] translate-y-[25px]"></span>
          <div className="flex flex-col justify-center items-center">
          <div className="w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center"><FaCheck color="#173e1f"/></div>
          <span className="font-semibold pt-1 text-nowrap">In Transit</span>
          <span className="font-light text-sm text-nowrap">waiting</span>
          

          </div>
          <span className=" w-full h-0 border border-[#173e1f] translate-y-[25px]"></span>
          <div className="flex flex-col justify-center items-center">
          <div className="w-[50px] h-[50px] rounded-full bg-white flex justify-center items-center"><TbTruckDelivery color="#173e1f"/></div>
          <span className="font-semibold pt-1">Delivered</span>
          <span className="font-light text-sm text-nowrap">waiting</span>
          

          </div>

          

          
        </div>
        

      </section>
    </div>
  );
}
