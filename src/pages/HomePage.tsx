import * as React from "react";
import image1 from "../assets/images/homepage-1.svg";
import image2 from "../assets/images/homepage-2.svg";
import { PiMapPinLight } from "react-icons/pi";
import { TbLocationPin } from "react-icons/tb";
import Title from "../components/Title";
import ProductCarousel from "../components/Carousel/ProductCarousel";
import image3 from "../assets/images/homepage-3.svg";
import image5 from "../assets/images/homepage-5.svg";
import driver from "../assets/images/driver.svg";
import farmer from "../assets/images/farmer.svg";
import { useState } from "react";
import { ProductCard, IProductCardProps } from "../components/ProductCard";
import dataAnalytics from "../assets/images/dataAnalytics.svg";
import cleanEnergy from "../assets/images/cleanEnergy.svg";
import logistics from "../assets/images/logistics.svg";
import training from "../assets/images/training.svg";
import PartnerCarousel from "../components/Carousel/PartnerCarousel";
import ServiceCarousel from "../components/Carousel/ServiceCarousel";
import { useNavigate } from "react-router-dom";
import { m } from "framer-motion";
import KipitfreshAnimation from "../components/KipitfreshAnimation";

export interface IHomePageProps {}

const products = [
  {
    name: "Product 1",
    imageUrl: "https://tkdfarms.com/wp-content/uploads/2020/11/pineapple.jpg",
  },
  {
    name: "Product 2",
    imageUrl: "https://tkdfarms.com/wp-content/uploads/2020/11/pineapple.jpg",
  },

  {
    name: "Product 3",
    imageUrl: "https://tkdfarms.com/wp-content/uploads/2020/11/pineapple.jpg",
  },
];

const services = [
  {
    imageSrc: dataAnalytics,
    title: "Data Analytics",
    description:
      "Our advanced data analytics services provide valuable insights to optimize agricultural processes and improve yields.",
  },
  {
    imageSrc: logistics,
    title: "Logistics",
    description:
      "We offer efficient logistics services to ensure that your produce reaches its destination fresh and on time.",
  },
  {
    imageSrc: cleanEnergy,
    title: "Clean Energy",
    description:
      "We are at the forefront of renewable energy solutions, helping to create a sustainable future for agriculture.",
  },
  {
    imageSrc: training, // Assuming you will upload the image for training farmers and use its path here
    title: "Training Farmers",
    description:
      "Our expert coaching programs teach farmers the best practices for storing fruits and vegetables, ensuring longer shelf life and reduced waste.",
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
  console.log("user", user);

  React.useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser);
  }, []);
  const navigate = useNavigate();
  const gotoContact = () => {
    navigate("/contact");
  };
  const gotoSignup = () => {
    navigate("/onboarding");
  };
  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
          // You can use the latitude and longitude to fetch the address or do something else
        },
        (error) => {
          console.error('Error retrieving location:', error.message);
          // Handle error accordingly
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      // Handle the case where geolocation is not supported
    }
  };

  return (
    <div>
      <section className="w-full  flex flex-col md:flex-row justify-center items-center px-5 py-6 bg-[#7ED957] translate-y-[-1px]">
        <m.div 
          initial={{ opacity: 0, rotate: -15, scale: 0.5 }} // Start tilted left at 45 degrees, 50% size, and invisible
          whileInView={{
            opacity: 1,
            rotate: [-15, 0], // Rotate from 0 to +45 degrees and then back to 0
            scale: [0.5, 1], // Scale from 0.5 to 1.2 and then back to 1
          }}
          viewport={{ once: false }} 
          transition={{ duration: 1.2 }} // Adjust duration for a smoother transition
        
        className="md:w-full md:h-full rounded-full">
        <img className="max-w-full md:w-full md:h-full rounded-full" src={image1} />
        </m.div >
        <div className="w-full text-[#173e1f] h-full flex flex-col justify-center items-start sm:pl-10 pt-5 md:pt-20 lg:pr-2">
        
        <KipitfreshAnimation />
        
        
          {/* <Title content="Fruit Delivery & Storage Made Easy" /> */}

          <span className="text-2xl pt-5 md:pt-8">Fruits & Vegetables</span>

          <div className="w-full lg:w-[480px] xl:w-[560px] lg:h-[70px] rounded-3xl bg-white flex flex-col lg:flex-row justify-between items-center pl-4 px-4 pt-4 sm:pt-0 mt-8 md:mt-16 text-[40px] shadow-lg lg:shadow-2xl">
            <span className="hidden sm:block pt-2">
              <PiMapPinLight />
            </span>

            <input
              className="border-none outline-none text-[#173e1f] text-xl w-full lg:w-[250px] bg-transparent"
              placeholder="What's your address?"
            />
            <button onClick={handleGetLocation} className="flex my-4 lg:my-0 w-full lg:w-[300px] h-[55px] justify-center items-center font-semibold rounded-2xl bg-[#173e1f] text-lg text-white  gap-2">
              <span className="lg:hidden xl:block">
                <TbLocationPin />
              </span>
              Use Current Address
            </button>
          </div>
        </div>
      </section>
      <div
        id="hompage-2"
        className="w-full h-[200px] bg-no-repeat bg-cover translate-y-[-3px]"
        style={{ backgroundImage: `url(${image2})` }}
      ></div>
      {user ? (
        <section className="w-full flex flex-col justify-start items-center px-5 py-20 ">
          <div className="w-full flex justify-between items-center">
            {" "}
            <Title content="Products" size="md" />
            <a
              href="/products"
              className="text-[#173e1f] text-lg font-light hover:underline"
            >
              See more
            </a>
          </div>
          <div className="w-full pt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-16 ">
            {dummyProducts.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </section>
      ) : (
        <section className="w-full flex flex-col justify-start items-center px-5 py-10 md:py-20 ">
          <Title content="Browse Through Our Plethora of Freshness" />
          <div className="w-screen px-6 md:px-12">
            <ProductCarousel products={products} />
          </div>
        </section>
      )}

      <section className="w-full flex flex-col justify-start items-center p-5 py-20 gap-12 md:gap-20">
        <span className="sm:text-center">
          <Title content="All Your Cultivation  Needs, Solved by Us" />
        </span>
        <div className="h-full w-full flex flex-col sm:flex-row sm:justify-center items-center gap-20">
          <m.div
            initial={{ opacity: 0, rotate: -45, scale: 0.5 }} // Start tilted left, at 50% size, and invisible
            whileInView={{ opacity: 1, rotate: 0, scale: 1 }} // Animate to normal position, full size, and fully visible
            viewport={{ once: false }} 
            transition={{ duration: 0.8 }} // Adjust the duration of the transition as needed
          >
            <div
              className="w-[300px] sm:w-[300px] lg:w-[500px] h-[300px] md:h-[500px] bg-contain bg-no-repeat rounded-lg  bg-bottom"
              style={{ backgroundImage: `url(${image3})` }}
            ></div>
          </m.div>
          <div className="w-[300px] sm:w-[450px] md:w-[600px] h-full flex flex-col justify-center items-start gap-8 lg:gap-24">
            <span className="text-[#173e1f] text-xl md:text-2xl font-semibold">
              Reduce post-harvest loss of fruits and vegetables with our cold
              storage facility.
            </span>

            <button
              onClick={gotoContact}
              className="px-2 w-[300px] sm:w-[200px] md:w-[300px] h-[60px] flex justify-center items-center rounded-lg border border-[#173e1f] bg-[#173e1f] text-white font-semibold text-lg md:text-2xl  hover:text-[#173e1f] hover:shadow-[inset_20rem_0_0_0] hover:shadow-white duration-[400ms,700ms] transition-[color,box-shadow]"
            >
              Preserve your fruits
            </button>
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col justify-start items-center px-5 py-20 text-[#173e1f]">
        <Title content="Our Diverse Services" center={true} />
        <span className="text-center text-xl font-light pt-5 max-w-[800px]">
          At <span className="font-bold">kipitfresh</span>, we are committed to
          providing top-quality fruits and vegetables. But that's not all we do!
          Our diverse services include:
        </span>
        <div className="w-screen pt-16">
          <ServiceCarousel services={services} />
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
            <PartnerCarousel />
          </div>
        </section>
      ) : (
        <>
          <div
            id="hompage-5"
            className="w-full h-[200px] bg-no-repeat bg-bottom bg-cover translate-y-[3px] "
            style={{ backgroundImage: `url(${image5})` }}
          ></div>
          <section
            id="signup"
            className="w-full flex flex-col justify-center items-center p-5 bg-[#7ED957]"
          >
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
                <button
                  onClick={gotoSignup}
                  className="bg-[#173e1f] w-[170px] h-[40px] text-lg font-semibold text-[#7ED957] rounded-xl"
                >
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
                <button
                  onClick={gotoSignup}
                  className="bg-[#173e1f] w-[170px] h-[40px] text-lg font-semibold text-[#7ED957] rounded-xl"
                >
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
