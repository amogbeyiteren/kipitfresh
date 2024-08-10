import "./PartnerCarousel.css";
import partner1 from "../../assets/images/FATEFOUNDATION.png";
import partner2 from "../../assets/images/USADF.png";
import partner3 from "../../assets/images/OCN2.png";
import partner4 from "../../assets/images/LSETF.png";
import partner5 from "../../assets/images/rockefellerfoundation.png";
import partner6 from "../../assets/images/JICA.png";



export default function PartnerCarousel() {
  return (
    <div className="w-full h-[150px] mb-[150px] partner-carousel-container overflow-hidden">
      <div className="w-full min-w-[1200px] h-full -700 flex relative">
        <div
          id="first"
          className="flex justify-center items-center pb-10 px-10 flex-col h-[160px] slider-item"
        >
          <img
            className="w-[200px] h-[80px] aspect-auto object-contain"
            src={partner1}
            alt="Fate Foundation"
          />
        </div>

        <div
          id="second"
          className="flex justify-center items-center pb-10 px-10 flex-col h-[160px] slider-item"
        >
          <img
            className="w-[200px] h-[80px] aspect-auto object-contain"
            src={partner2}
            alt="USADF"
          />
        </div>

        <div
          id="third"
          className="flex justify-center items-center pb-10 px-10 flex-col h-[160px] slider-item"
        >
          <img
            className="w-[200px] h-[80px] aspect-auto object-contain"
            src={partner3}
            alt="OCN"
          />
        </div>

        <div
          id="fourth"
          className="flex justify-center items-center pb-10 px-10 flex-col h-[160px] slider-item"
        >
          <img
            className="w-[200px] h-[80px] aspect-auto object-contain"
            src={partner4}
            alt="LSETF"
          />
        </div>

        <div
          id="fifth"
          className="flex justify-center items-center pb-10 px-10 flex-col h-[160px] slider-item"
        >
          <img
            className="w-[200px] h-[80px] aspect-auto object-contain"
            src={partner5}
            alt="Rockefeller Foundation"
          />
        </div>

        <div
          id="sixth"
          className="flex justify-center items-center pb-10 px-10 flex-col h-[160px] slider-item"
        >
          <img
            className="w-[200px] h-[80px] aspect-auto object-contain"
            src={partner6}
            alt="JICA"
          />
        </div>
      </div>
    </div>
  );
}
