import * as React from "react";
import image1 from "../assets/homepage-1.svg";
import image2 from "../assets/homepage-2.svg";
import { PiMapPinLight } from "react-icons/pi";
import { TbLocationPin } from "react-icons/tb";
import Title from "../components/Title";
import ProductCarousel from "../components/Carousel/ProductCarousel";
import image3 from "../assets/homepage-3.svg";
import image5 from "../assets/homepage-5.svg";
import driver from "../assets/driver.svg";
import farmer from "../assets/farmer.svg";
import { useState } from "react";
import { ProductCard, IProductCardProps } from "../components/ProductCard";
import partner1 from "../assets/FATEFOUNDATION.png";
import partner2 from "../assets/USADF.png";
import partner3 from "../assets/OCN2.png";
import partner4 from "../assets/LSETF.png";
import partner5 from "../assets/rockefellerfoundation.png";
import partner6 from "../assets/JICA.png";
import PartnerCarousel from "../components/Carousel/PartnerCarousel";

export interface IHomePageProps {}

const products = [
  {
    name: "Product 1",
    imageUrl:
      "data:image/webp;base64,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",
  },

  {
    name: "Product 2",
    imageUrl: "https://tkdfarms.com/wp-content/uploads/2020/11/pineapple.jpg",
  },

  {
    name: "Product 1",
    imageUrl:
      "data:image/webp;base64,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",
  },
];
const partners = [
  {
    imageUrl: partner1,
  },
  {
    imageUrl: partner2,
  },
  {
    imageUrl: partner3,
  },
  {
    imageUrl: partner4,
  },
  {
    imageUrl: partner5,
  },
  {
    imageUrl: partner6,
  },
];
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

export function HomePage() {
  const [user, setUser] = useState(localStorage.getItem("user"));
  console.log('user', user)

  React.useEffect(() => {
    const storedUser = localStorage.getItem('user');
    setUser(storedUser);
  }, []);

  return (
    <div>
      <section className="w-full  flex flex-row justify-center items-center p-5 bg-[#7ED957] translate-y-[-1px]">
        <img
          className="hidden sm:block w-1/2 h-1/2 rounded-full"
          src={image1}
        />
        <div className="w-full text-[#173e1f] h-full flex flex-col justify-center items-start sm:pl-10 pt-20">
          <Title content="Fruit Delivery & Storage Made Easy" />

          <span className="text-2xl pt-8">Fruits & Vegetables</span>

          <div className="w-[280px] lg:w-[560px] h-[70px] rounded-3xl bg-white flex flex-row justify-between items-center pl-4 px-4  mt-16 text-[40px] shadow-2xl">
            <PiMapPinLight />

            <input
              className="border-none outline-none text-[#173e1f] text-xl"
              placeholder="What's your address?"
            />
            <button className="hidden lg:flex w-[300px] h-[55px] justify-center items-center font-semibold rounded-2xl bg-[#173e1f] text-xl text-white  gap-2">
              <TbLocationPin />
              Use Current Address
            </button>
          </div>
        </div>
      </section>
      <div
        className="w-full h-[200px] bg-no-repeat bg-cover translate-y-[-3px]"
        style={{ backgroundImage: `url(${image2})` }}
      ></div>
      {user ? (
        <section className="w-full flex flex-col justify-start items-center px-5 py-20 ">
          <div className="w-full flex justify-between items-center">
            {" "}
            <Title content="Products" size="md" />
            <a href="/products" className="text-[#173e1f] text-lg font-light">See more</a>
          </div>
          <div className="w-full pt-16 grid grid-cols-1 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-16 ">
            {dummyProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </section>
      ) : (
        <section className="w-full flex flex-col justify-start items-center px-5 py-20 ">
          <Title content="Browse Through Our Plethora of Freshness" />
          <div className="w-screen pt-16 px-12">
            <ProductCarousel products={products} />
          </div>
        </section>
      )}

      <section className="w-full flex flex-col justify-start items-center p-5 py-40 gap-20">
        <Title content="All Your Cultivation  Needs, Solved by Us" />
        <div className="h-full w-full flex flex-row sm:justify-center items-center gap-20">
          <div
            className="hidden sm:block w-[500px] h-[500px] bg-contain bg-no-repeat rounded-lg  bg-bottom"
            style={{ backgroundImage: `url(${image3})` }}
          ></div>
          <div className="w-[300px] sm:w-[600px] h-full flex flex-col justify-center items-start gap-24">
            <span className="text-[#173e1f] text-4xl font-semibold">
              Reduce post-harvest loss of fruits and vegetables with our cold
              storage facility.
            </span>

            <button className="w-[300px] h-[60px] flex justify-center items-center rounded-lg bg-[#173e1f] text-white font-semibold text-2xl">
              Preserve your fruits
            </button>
          </div>
        </div>
      </section>
      {user ? (
        <section className="w-full flex flex-col justify-start items-center px-5 py-20 text-[#173e1f]">
          <Title content="Our Partners" center={true} />
          <span className="text-center text-xl font-light pt-5">
            Driving success with our valued sponsors and empowering our
            community through partnership.
          </span>
          <div className="w-screen pt-16">
            <PartnerCarousel partners={partners} />
          </div>
        </section>
      ) : (
        <>
          <div
            className="w-full h-[200px] bg-no-repeat bg-bottom bg-cover translate-y-[3px]"
            style={{ backgroundImage: `url(${image5})` }}
          ></div>
          <section className="w-full flex flex-col justify-center items-center p-5 bg-[#7ED957]">
            <Title content="Let’s do it together" />
            <div className="flex flex-col sm:flex-row justify-around items-start gap-12 lg:gap-28">
              <div className="lg:w-[400px] h-[600px] flex flex-col justify-center items-center">
                <img
                  className="w-[250px] h-[250px] rounded-full object-contain"
                  src={farmer}
                />
                <span className="text-3xl font-semibold pb-5 text-[#173e1f]">
                  Become a Farmer
                </span>
                <span className="text-lg font-semibold pb-4 text-[#173e1f]">
                  Help Cutlivate Goodness
                </span>
                <button className="bg-[#173e1f] w-[170px] h-[40px] text-lg font-semibold text-[#7ED957] rounded-xl">
                  Register Here
                </button>
              </div>

              <div className="lg:w-[400px] h-[600px] flex flex-col justify-center items-center">
                <img
                  className="w-[250px] h-[250px] rounded-full object-contain"
                  src={driver}
                />
                <span className="text-3xl font-semibold pb-5 text-[#173e1f]">
                  Become a Driver
                </span>
                <span className="text-lg font-semibold pb-4 text-[#173e1f]">
                  Help Deliver Goodness
                </span>
                <button className="bg-[#173e1f] w-[170px] h-[40px] text-lg font-semibold text-[#7ED957] rounded-xl">
                  Register Here
                </button>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  );
}
