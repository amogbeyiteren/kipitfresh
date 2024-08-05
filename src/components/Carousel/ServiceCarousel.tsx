import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './ServiceCarousel.css'

interface IService {
  imageSrc: string;
  title: string;
  description: string
}

interface ICarouselProps {
  services: IService[];
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomLeftArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="custom-arrow left-arrow"
    >
      &#9664;
    </button>
  );
};

const CustomRightArrow = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button
      onClick={onClick}
      className="custom-arrow right-arrow"
    >
      &#9654;
    </button>
  );
};

export default function ServiceCarousel({ services }: ICarouselProps) {
  return (
    <div className="carousel-wrapper">
      <Carousel
        swipeable={true}
        draggable={false}
        showDots={false}
        responsive={responsive}
        ssr={false} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        arrows={false}
       
        
      >
        {services.map((service, index) => (
             <div className="flex justify-center p-[20px]">
               <div className='group relative bg-[#7ED957] border border-[#7ED957] text-[#173e1f] flex flex-col justify-center items-center w-full rounded-lg py-8 px-2 hover:shadow-[inset_32rem_0_0_0] hover:shadow-white duration-[800ms,850ms] transition-[color,box-shadow]'>
              <img 
                className='w-[280px] h-[280px] rounded-full transition-opacity duration-700 group-hover:opacity-0'
                src={service.imageSrc}
                alt={service.title}
              />
              <span className='text-2xl font-semibold pt-12'>{service.title}</span>
              <div className='absolute inset-0 flex flex-col justify-center items-center opacity-0 transition-opacity duration-700 group-hover:opacity-100'>
                
                <span className='text-lg pt-4 px-2 text-center'>{service.description}</span>
              </div>
            </div>
             </div>
        ))}
      </Carousel>
    </div>
  );
}
