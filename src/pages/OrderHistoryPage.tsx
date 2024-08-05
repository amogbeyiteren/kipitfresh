import Title from "../components/Title";
import { useState } from "react";
import { ProductCard, IProductCardProps } from "../components/ProductCard";
import { FaCheck } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import OrderHistoryCard from "../components/OrderHistoryCard";


const orderHistoryCardsData = [
  {
    imageUrl: "https://example.com/image1.jpg",
    deliveryDate: "July 12, 2024",
    productName: "Organic Pineapple - Unripe",
    description: "Full Package + Free Tote Bag",
    quantity: "2 Dozen",
    orderId: "#2883949596849",
    price: "#10,000"
  },
  {
    imageUrl: "https://example.com/image2.jpg",
    deliveryDate: "July 15, 2024",
    productName: "Fresh Apples - Ripe",
    description: "Box of Fresh Apples",
    quantity: "1 Dozen",
    orderId: "#2883949596850",
    price: "#5,000"
  },
  {
    imageUrl: "https://example.com/image3.jpg",
    deliveryDate: "July 18, 2024",
    productName: "Bananas - Fresh",
    description: "Bunch of Bananas",
    quantity: "3 Dozen",
    orderId: "#2883949596851",
    price: "#7,500"
  }
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
          <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center justify-between w-[400px]">
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
          {/* <div className="flex flex-row justify-end items-center gap-5">
          <button className="px-3 py-2 border border-[#173e1f] border-dashed">
            View Order
          </button>
          <button className="px-3 py-2 border border-[#173e1f] border-dashed">
            View Invoice
          </button>
        </div> */}
        </div>
        {orderHistoryCardsData.map((card, index) => (
        <OrderHistoryCard
          key={index}
          imageUrl={card.imageUrl}
          deliveryDate={card.deliveryDate}
          productName={card.productName}
          description={card.description}
          quantity={card.quantity}
          orderId={card.orderId}
          price={card.price}
        />
      ))}
        
      </section>
    </div>
  );
}
