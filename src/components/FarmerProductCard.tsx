import AddtoStock from './AddToStockModal';

export interface IProductCardProps {
    imageSrc: string;
    title: string;
    stock: number

}

export function ProductCard ({product}: { product: IProductCardProps }) {
  return (
    <div className=' bg-[#7ED957] text-[#173e1f] flex flex-col justify-center items-center w-full rounded-lg py-8'>
        <img 
        className='w-[200px] h-[200px] rounded-full'
        src={product.imageSrc}
        />
        <span className='text-lg pt-12'>{product.title}</span>
        <span className='text-lg pt-2'>Current Stock: {product.stock}</span>
        <AddtoStock />
        

    </div>
  );
}
