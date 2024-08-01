import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './PartnerCarousel.css'

interface IPartner {
  imageUrl: string;
}

interface ICarouselProps {
  partners: IPartner[];
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

export default function PartnerCarousel({ partners }: ICarouselProps) {
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
        arrows={true}
       
        
      >
        {partners.map((partner, index) => (
          <div key={index} className="flex justify-center items-center p-10 flex-col h-[300px]">
            <img
              className="w-full h-full object-contain"
              src={partner.imageUrl}
              alt={`Partner ${index + 1}`}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
