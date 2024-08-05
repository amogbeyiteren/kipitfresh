import Title from "../components/Title";
import { ProductCard, IProductCardProps } from "../components/ProductCard";



export interface IProductPageProps {}

const dummyProducts: IProductCardProps[] = [
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

export function ProductPage() {

  return (
    <div>

        <section className="w-full flex flex-col justify-start items-center px-5 py-20 ">
          <div className="w-full flex justify-center items-start flex-col">
            {" "}
            <Title content="Products" size="md" />
            <span  className="text-[#173e1f] text-lg font-light" >Savor the Best of Nature’s Bounty</span>
            
          </div>
          <div className="w-full pt-16 grid grid-cols-1 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-16 ">
            {dummyProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </section>
     

    </div>
  );
}
