import React, { useState } from "react";
import Title from "../../components/Title";
import { CiSearch, CiUser } from "react-icons/ci";
import { IoOptions } from "react-icons/io5";
import { ProductCard, IProductCardProps } from "../../components/FarmerProductCard";

const dummyProducts: IProductCardProps[] = [
  {
    imageSrc: "https://via.placeholder.com/100",
    title: "Product 1",
    stock: 36,
  },
  {
    imageSrc: "https://via.placeholder.com/100",
    title: "Product 2",
    stock: 36,

  },
  {
    imageSrc: "https://via.placeholder.com/100",
    title: "Product 3",
    stock: 36,

  },
  {
    imageSrc: "https://via.placeholder.com/100",
    title: "Product 4",
    stock: 36,

  },
];
const Products = () => {
  return (
    <div className="flex lg:px-2 flex-col justify-start items-start min-h-screen">
      <div className="pt-4 pb-4  w-full flex flex-row justify-between items-center">
        
        <div className="w-[50%] h-[40px] flex justify-center items-center border py-1 pl-4 pr-6 rounded-2xl border-[#173e1f]">
            <CiSearch size={24} color="#173e1f" />
            <input
              className="w-full h-full bg-transparent border-none outline-none px-5"
              placeholder="Search for Orders By ID"
            />
            <IoOptions size={24} color="#173e1f" />
          </div>
          
       
        
        <div className="flex flex-col items-end justify-between h-full">
          <div className="flex flex-row justify-center items-center gap-4">
            
            <a href='profile-management' className="w-[40px] h-[40px] rounded-full bg-[#b2e89a] flex justify-center items-center">
              <CiUser size={24} />
            </a>

          </div>
        </div>
      </div>
      <Title content="My Listings" size="md" />
      

      <div className="w-full h-full pb-4 flex flex-row justify-center items-center gap-5 ">


        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            {dummyProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        
    </div>
  );
};

export default Products;
