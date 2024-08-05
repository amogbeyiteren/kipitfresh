import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { NumInput} from './NumberInput/NumberInput'; // Assuming NumInput is a separate component you have already created

interface ICartCardProps {
  imageUrl: string;
  productName: string;
  description: string;
  price: string;
  onDelete: () => void;
  quantity: string;
  
}

const CartCard: React.FC<ICartCardProps> = ({
  imageUrl,
  productName,
  description,
  price,
  onDelete,
  quantity,
  
}) => {
  console.log(quantity)
  return (
    <div className="w-full gap-y-5 flex flex-col justify-center items-center px-3 sm:px-6 md:px-10 rounded-3xl bg-[#b2e89a]">
      <div className="w-full py-5 flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="flex flex-row justify-center items-center gap-5">
          <img className="w-[150px] h-[120px] rounded-lg" src={imageUrl} alt={productName} />
          <div className="flex flex-col justify-center items-start gap-2">
            <span className="font-semibold text-lg sm:text-2xl md:w-[200px]">
              {productName}
            </span>
            <span className="font-light text-lg">{description}</span>
          </div>
        </div>
        <NumInput/>
        <div className="flex w-full md:w-[300px] justify-between">
          <span className="font-semibold text-2xl">{price}</span>
          <span className="font-semibold text-2xl cursor-pointer" onClick={onDelete}>
            <RiDeleteBinLine />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
