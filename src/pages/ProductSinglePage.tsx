import { IoArrowBackCircleOutline } from "react-icons/io5";
import DatePickerComponent from "../components/Datepicker";
import { NumInput } from "../components/NumberInput/NumberInput";
import { useNavigate } from "react-router-dom";

export interface IProductSinglePageProps {}

export function ProductSinglePage() {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
      };

    const handleClick = () => {
      navigate('/cart');
    };
  return (
    <div className="flex flex-col justify-start items-start py-6 px-3 sm:px-12">
      <div className="w-full flex items-start justify-start">
        <span onClick={goBack} className="hover:cursor-pointer"><IoArrowBackCircleOutline color="#173e1f" size={24} /></span>
        
      </div>
      <div className="flex flex-col md:flex-row justify-start items-start w-full gap-12 mt-5 mb-16">
        {/* <div className="flex flex-col gap-8 justify-start items-center">
          <img
            className="w-[250px] h-[250px]"
            src="https://via.placeholder.com/300"
          />
          <img
            className="w-[250px] h-[250px]"
            src="https://via.placeholder.com/300"
          />
        </div> */}
        <div className="flex flex-col w-full md:w-2/3 justify-start items-center">
          <img
            className="w-full aspect-auto rounded-2xl"
            src="https://via.placeholder.com/300"
          />
        </div>
        <div className="flex flex-col gap-6 md:gap-12 justify-start items-start">
          <span className="font-bold text-4xl text-start">
            Unconventional (Organic) Pineapple
          </span>
          <span className="text-xl text-start">
            Indulge in the natural sweetness and vibrant flavor of our
            handpicked pineapples
          </span>
          <span className="font-bold text-2xl text-start">₦15/Dozen</span>
          <div className="w-full flex flex-col sm:flex-row justify-center items-start sm:justify-start sm:items-center gap-4">
            <span className="text-xl text-start w-32">Delivery day</span>

            <DatePickerComponent />
          </div>

          <div className="w-full flex flex-col sm:flex-row justify-center items-start sm:justify-start sm:items-center gap-4">
            <span className="text-xl text-start w-32">Quantity</span>
            <span className="border border-gray-400 focus:border-[#173e1f] rounded-sm">
                <NumInput size="lg"/>
            </span>

            
          </div>
          <div className="w-full flex items-center justify-start mt-3">
            <button onClick={handleClick} className="bg-[#173e1f] w-[200px] text-lg py-2 px-2 border-[#173e1f] border rounded-md  text-white hover:text-[#173e1f] hover:shadow-[inset_13rem_0_0_0] hover:shadow-white duration-[400ms,700ms] transition-[color,box-shadow]">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
