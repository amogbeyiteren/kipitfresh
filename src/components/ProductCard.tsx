import { IoIosStar } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export interface IProductCardProps {
    imageSrc: string;
    title: string;
    rating: number;
    price: string;
    description: string;
    in_stock: boolean;
}

export function ProductCard ({product}: { product: IProductCardProps }) {
    const navigate = useNavigate();

    const handleClick = () => {
      navigate('/product');
    };
  return (
    <div className=' bg-[#7ED957] text-[#173e1f] flex flex-col justify-center items-center w-full rounded-lg py-8'>
        <img 
        className='w-[120px] h-[120px] rounded-full'
        src={product.imageSrc}
        />
        <span className='text-lg pt-5'>{product.title}</span>
        <div className='flex pt-2'>
            {
                Array.from({ length: product.rating }).map((_, index) => (
                    <IoIosStar key={index} color="#f5bd02" className='mx-1' size={20}/>
                ))
            }
        </div>
        <span className='text-xl pt-2'>{product.price}</span>
        <span className='text-sm pt-2'>{product.description}</span>
        {
            product.in_stock ? (
                <button onClick={handleClick} className='mt-2 text-white bg-[#173e1f] border border-[#173e1f] px-3 py-2 rounded-md  hover:text-[#173e1f] hover:shadow-[inset_8rem_0_0_0] hover:shadow-white duration-[400ms,700ms] transition-[color,box-shadow]'>
                    Add to cart
                </button>
            )
            :
            (
                <button className='mt-2 text-white bg-[#E33F3F] px-3 py-2 rounded-md' disabled>
                    Out of Stock
                </button>
            )
        }
    </div>
  );
}
