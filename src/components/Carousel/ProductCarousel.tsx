import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import './ProductCarousel.css'

interface IProduct {
  name: string;
  imageUrl: string;
}

interface ICarouselProps {
  products: IProduct[];
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomDot = ({ onClick, ...rest }) => {
  const { active } = rest;
  return (
    <button
      onClick={() => onClick?.()}
      className={`custom-dot ${active ? "active" : ""}`}
      style={{
        display: "inline-block",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        background: active ? "#173e1f" : "#7ED957",
        margin: "50px 5px 0px 5px",
        cursor: "pointer",
      }}
    />
  );
};

export default function ProductCarousel({ products }: ICarouselProps) {
  return (
    <Carousel
      swipeable={true}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={false} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={500}
      containerClass="carousel-container"
      arrows={false}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      customDot={<CustomDot onClick={undefined} />}
    >
      {products.map((product, index) => (
        <div key={index} className="flex justify-center items-center flex-col p-1 h-[500px]">
          <img
            className="w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] rounded-full object-cover"
            src={product.imageUrl}
            alt={product.name}
          />
        </div>
      ))}
    </Carousel>
  );
}
