import Title from "../components/Title";
import { useState } from "react";
import { ProductCard, IProductCardProps } from "../components/ProductCard";
import { FaCheck } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";

export interface IOrderHistoryPageProps {}

const dummyProducts: IOrderHistoryPageProps[] = [
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

export function OrderHistoryPage() {
  return (
    <div>
      <section className="w-full flex flex-col justify-start items-center px-5 py-20 ">
        <div className="w-full flex justify-center items-start flex-col">
          {" "}
          <Title content="Order History" size="md" />
          <span className="text-[#173e1f] text-lg font-light">
            Check the Status of Recent Orders
          </span>
        </div>
        <div className="text-[#173e1f] mt-8 w-full rounded-t-xl flex flex-row justify-between items-center px-4 pt-5 pb-3 bg-[#7ED957]">
          <div className="flex flex-row items-center justify-between w-[400px]">
            <div className="flex flex-col">
              <span className="text-lg font-bold">Cart ID</span>
              <span className=" ">ABC125GG</span>
            </div>

            <div className="flex flex-col">
              <span className="text-lg font-bold">Monthly Placed</span>
              <span className=" ">July 2024</span>
            </div>

            <div className="flex flex-col">
              <span className="text-lg font-bold">Total Amount</span>
              <span className=" ">#8,900</span>
            </div>
          </div>
          <div className="flex flex-row justify-end items-center gap-5">
          <button className="px-3 py-2 border border-[#173e1f] border-dashed">
            View Order
          </button>
          <button className="px-3 py-2 border border-[#173e1f] border-dashed">
            View Invoice
          </button>
        </div>
        </div>
        <div className="w-full grid grid-cols-4 px-5 py-12 bg-[#7ED957] text-[#173e1f] border-t border-white">
            <div className="h-full w-full flex flex-col justify-center gap-8 items-start">
                <img 
                className="w-[250px] h-[250px] rounded-lg"
                
                />
                <span className="flex  items-center justify-center gap-2">
                    <span className="bg-[#173e1f] w-[40px] h-[40px] rounded-full flex justify-center items-center"><FaCheck color="white" /></span>
                    Delivered on July 12, 2024
                </span>

            </div>
            <div className="h-[300px] w-full col-span-2 flex flex-col py-10 justify-start items-start">
                <span className="text-xl sm:text-2xl font-bold">Organic Pineapple - Unripe </span>
                <span className="text-sm sm:text-xl font-light  mt-10">Full Package + Free Tote Bag</span>
                <span className="text-sm sm:text-xl  font-light">Qty - 2 Dozen </span>
                <span className="text-sm sm:text-xl  font-light">Order ID - #2883949596849 </span>


            </div>
            <div className="h-[300px]  flex flex-col justify-between items-end py-10">
                <span className="text-2xl font-semibold">#10,000 </span>
                <span className="text-xl font-semibold">View Product | Buy Again</span>


            </div>

        </div>
        <div className="w-full grid grid-cols-4 px-5 py-12 bg-[#7ED957] text-[#173e1f] border-t border-white">
            <div className="h-full w-full flex flex-col justify-center gap-8 items-start">
                <img 
                className="w-[250px] h-[250px] rounded-lg"
                
                />
                <span className="flex  items-center justify-center gap-2">
                    <span className="bg-[#173e1f] w-[40px] h-[40px] rounded-full flex justify-center items-center"><TbTruckDelivery color="white" /></span>
                    Out for Delivery
                </span>

            </div>
            <div className="h-[300px] w-full col-span-2 flex flex-col py-10 justify-start items-start">
                <span className="text-xl sm:text-2xl font-bold">Organic Pineapple - Unripe </span>
                <span className="text-sm sm:text-xl font-light  mt-10">Full Package + Free Tote Bag</span>
                <span className="text-sm sm:text-xl  font-light">Qty - 2 Dozen </span>
                <span className="text-sm sm:text-xl  font-light">Order ID - #2883949596849 </span>


            </div>
            <div className="h-[300px]  flex flex-col justify-between items-end py-10">
                <span className="text-2xl font-semibold">#10,000 </span>
                <span className="text-xl font-semibold">View Product | Buy Again</span>


            </div>

        </div>

      </section>
    </div>
  );
}
