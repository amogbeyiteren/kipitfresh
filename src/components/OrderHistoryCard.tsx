import React from 'react';
import { FaCheck } from 'react-icons/fa';

interface IOrderHistoryProps {
  imageUrl: string;
  deliveryDate: string;
  productName: string;
  description: string;
  quantity: string;
  orderId: string;
  price: string;
}

const OrderHistory: React.FC<IOrderHistoryProps> = ({
  imageUrl,
  deliveryDate,
  productName,
  description,
  quantity,
  orderId,
  price,
}) => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-4 px-5 py-12 bg-[#7ED957] text-[#173e1f] border-t border-white">
      <div className="h-full w-full flex flex-col justify-center gap-8 items-start pr-2">
        <img
          className="w-full sm:w-[250px] border h-[250px] rounded-lg"
          src={imageUrl}
          alt={productName}
        />
        <span className="flex items-center justify-center gap-2">
          <span className="bg-[#173e1f] p-2 rounded-full flex justify-center items-center">
            <FaCheck color="white" size={18} />
          </span>
          Delivered on {deliveryDate}
        </span>
      </div>
      <div className="sm:h-[300px] w-full col-span-2 flex flex-col py-10 justify-start items-start">
        <span className="text-xl sm:text-2xl font-bold">{productName}</span>
        <span className="text-sm sm:text-xl font-light mt-10">{description}</span>
        <span className="text-sm sm:text-xl font-light">Qty - {quantity}</span>
        <span className="text-sm sm:text-xl font-light">Order ID - {orderId}</span>
      </div>
      <div className="sm:h-[300px] flex flex-col sm:justify-between items-end sm:py-10">
        <span className="text-2xl font-semibold">{price}</span>
        <span className="sm:text-xl font-semibold text-nowrap">
          View Product | Buy Again
        </span>
      </div>
    </div>
  );
};

export default OrderHistory;
